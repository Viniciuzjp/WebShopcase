interface Image {
  src: string;
  altText: string | null;
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

export interface Product {
  id: string;
  handle: string;
  title: string;
  descriptionHtml: string;
  images: Image[];
  variants: Variant[];
}

interface ProductEdge {
  node: {
    id: string;
    handle: string;
    title: string;
    descriptionHtml: string;
    images: {
      edges: { node: Image }[];
    };
    variants: {
      edges: { node: Variant }[];
    };
  };
}

export async function getProducts(first: number = 50): Promise<Product[]> {
  try {
    const response = await fetch(
      `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2026-04/graphql.json`,
      {
        method: "POST",
        headers: {
          "X-Shopify-Storefront-Access-Token":
            process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN!,
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
                  descriptionHtml
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

    const json = await response.json();

    if (!json?.data?.products?.edges) {
      console.error("Shopify não retornou produtos:", json);
      return [];
    }

    const products: Product[] = json.data.products.edges.map(
      ({ node }: ProductEdge) => ({
        id: node.id,
        handle: node.handle,
        title: node.title,
        descriptionHtml: node.descriptionHtml || "",
        images: node.images.edges.map((img) => img.node),
        variants: node.variants.edges.map((v) => v.node),
      })
    );

    return products;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    return [];
  }
}