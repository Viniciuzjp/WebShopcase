import { NextResponse } from "next/server";

const SHOPIFY_STORE_DOMAIN = process.env.SHOPIFY_STORE_DOMAIN!;
const SHOPIFY_STOREFRONT_TOKEN = process.env.SHOPIFY_STOREFRONT_TOKEN!;

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "É necessário enviar pelo menos um item para o checkout" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://${SHOPIFY_STORE_DOMAIN}/api/2024-07/graphql.json`,
      {
        method: "POST",
        headers: {
          "X-Shopify-Storefront-Access-Token": SHOPIFY_STOREFRONT_TOKEN,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
            mutation checkoutCreate($lineItems: [CheckoutLineItemInput!]!) {
              checkoutCreate(input: { lineItems: $lineItems }) {
                checkout {
                  id
                  webUrl
                }
                userErrors {
                  field
                  message
                }
              }
            }
          `,
          variables: { lineItems: items },
        }),
      }
    );

    const data = await response.json();

    if (data.errors) {
      console.error("Erros gerais da Shopify:", data.errors);
      return NextResponse.json({ error: "Erro ao criar checkout" }, { status: 500 });
    }

    if (data.data.checkoutCreate.userErrors.length > 0) {
      console.error("Erros do usuário:", data.data.checkoutCreate.userErrors);
      return NextResponse.json(
        { error: data.data.checkoutCreate.userErrors.map((e: any) => e.message).join(", ") },
        { status: 400 }
      );
    }

    const checkout = data.data.checkoutCreate.checkout;

    if (!checkout) {
      return NextResponse.json({ error: "Checkout não retornado" }, { status: 500 });
    }

    return NextResponse.json({ checkoutUrl: checkout.webUrl });
  } catch (err: any) {
    console.error("Erro ao criar checkout:", err);
    return NextResponse.json({ error: err.message || "Erro interno" }, { status: 500 });
  }
}