interface Image {
  src: string;
  altText: string;
  width: number;
  height: number;
}

interface Variant {
  id: string;
  title: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  availableForSale: boolean;
}

interface Product {
  id: string;
  handle: string;
  title: string;
  description: string;
  images: {
    edges: { node: Image }[];
  };
  variants: {
    edges: { node: Variant }[];
  };
}

interface ProductEdge {
  node: Product;
}

export async function getProducts(first: number = 50) {
  try {
    const response = await fetch(
      `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2024-07/graphql.json`,
      {
        method: "POST",
        headers: {
          "X-Shopify-Storefront-Access-Token":
            process.env.SHOPIFY_STOREFRONT_TOKEN!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
          {
            products(first: ${first}) {
              edges {
                node {
                  id
                  handle
                  title
                  description
                  images(first: 5) {
                    edges {
                      node {
                        src
                        altText
                        width
                        height
                      }
                    }
                  }
                  variants(first: 10) {
                    edges {
                      node {
                        id
                        title
                        price {
                        amount
                        currencyCode
                        }

                        availableForSale
                      }
                    }
                  }
                }
              }
            }
          }
        `,
        }),
      }
    );

    const data = await response.json();
    console.log("Produtos da Shopify:", data);

    if (!data?.data?.products) {
      console.error(
        "Shopify não retornou produtos:",
        JSON.stringify(data, null, 2)
      );
      return [];
    }

    return data.data.products.edges.map((p: ProductEdge) => ({
      ...p.node,
      images: p.node.images?.edges?.map((i) => i.node) || [],
      variants: p.node.variants?.edges?.map((v) => v.node) || [],
    }));
  } catch (err) {
    console.error("Erro ao buscar produtos da Shopify:", err);
    return [];
  }
}
