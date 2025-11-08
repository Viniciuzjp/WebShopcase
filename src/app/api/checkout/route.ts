import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { lineItems } = await req.json();

    if (!lineItems || !lineItems.length) {
      return NextResponse.json({ error: "Nenhum item fornecido" }, { status: 400 });
    }

    const domain = process.env.SHOPIFY_STORE_DOMAIN;
    const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

    if (!domain || !token) {
      return NextResponse.json({ error: "Domínio ou token ausente" }, { status: 500 });
    }

    const response = await fetch(`https://${domain}/api/2025-01/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({
        query: `
          mutation cartCreate($lines: [CartLineInput!]!) {
            cartCreate(input: { lines: $lines }) {
              cart {
                id
                checkoutUrl
              }
            }
          }
        `,
        variables: {
          lines: lineItems.map((item: {quantity: number, id: string}) => ({
            quantity: item.quantity,
            merchandiseId: item.id,
          })),
        },
      }),
    });

    const data = await response.json();
    console.log("Shopify Cart Response:", JSON.stringify(data, null, 2));

    const checkoutUrl = data.data?.cartCreate?.cart?.checkoutUrl;
    if (!checkoutUrl) {
      return NextResponse.json({ error: "Não foi possível gerar checkout", details: data }, { status: 500 });
    }

    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    console.error("Erro Cart Checkout:", err);
  }
}
