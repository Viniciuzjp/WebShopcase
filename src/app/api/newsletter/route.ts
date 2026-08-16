import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "E-mail inválido" }, { status: 400 });
    }

    const domain = process.env.SHOPIFY_STORE_DOMAIN;
    const token = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

    if (!domain || !token) {
      console.error(
        "Erro: SHOPIFY_STORE_DOMAIN ou SHOPIFY_STOREFRONT_ACCESS_TOKEN não configurados no .env"
      );
      return NextResponse.json(
        { error: "Configuração da loja ausente" },
        { status: 500 }
      );
    }

    const response = await fetch(`https://${domain}/api/2026-04/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": token,
      },
      body: JSON.stringify({
        query: `
          mutation newsletterSignup($input: CustomerCreateInput!) {
            customerCreate(input: $input) {
              customer { id }
              customerUserErrors { code field message }
            }
          }
        `,
        variables: {
          input: {
            email,
            password: crypto.randomUUID(),
            acceptsMarketing: true,
          },
        },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error("Erros do GraphQL da Shopify:", data.errors);
      return NextResponse.json(
        { error: "Não foi possível concluir a inscrição" },
        { status: 500 }
      );
    }

    const userErrors = data.data?.customerCreate?.customerUserErrors ?? [];
    const alreadySubscribed = userErrors.some(
      (e: { code?: string }) => e.code === "TAKEN"
    );

    if (userErrors.length > 0 && !alreadySubscribed) {
      console.error("Erros de validação da Shopify:", userErrors);
      return NextResponse.json(
        { error: userErrors[0]?.message || "Não foi possível concluir a inscrição" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, alreadySubscribed });
  } catch (err) {
    console.error("Erro no cadastro de newsletter:", err);
    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 }
    );
  }
}
