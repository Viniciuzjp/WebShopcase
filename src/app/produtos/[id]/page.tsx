"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/Cart/ui/CartContext/Context";
import Button from "@/components/button/Button";
import { Products } from "@/ui/shopifyinterface/interface";
import Suggestions from "@/components/suggestions/suggestions";
import { Text } from "@/components/text/Text";
import { Container, Flex, Grid, Section, Stack } from "@av-digital/components";
import { PorductSkelleton } from "../Skelleton/Skelleton";

export default function ProductPage() {
  const { id } = useParams();
  const { AddItem } = useCart();

  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!id) {
      setError("ID do produto não fornecido");
      return;
    }

    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${id}`);

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const data: Products = await response.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
        setError("Erro ao buscar produto");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const variant = product.variants[0];

    if (!variant) return;

    AddItem({
      id: product.id,
      variantId: variant.id,
      title: product.title,
      image: product.images[0],
      price: variant.price.amount,
    });
  };

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <Text variant="h2">{error}</Text>
      </div>
    );
  }

  const currentImage = product?.images[currentImageIndex];

  return (
    <>
      {loading ? (
        <PorductSkelleton />
      ) : (
        <Container size="xl">
          <Section>
            <Grid classname="min-w-0 lg:grid-cols-2">
              <div className="min-w-0 w-full lg:sticky lg:top-24 lg:self-start">
                <Flex
                  align="start"
                  justify="center"
                  className="w-full min-w-0 gap-4 lg:px-6"
                >
                  <Stack classname="w-16 shrink-0 gap-3">
                    {product?.images.map((img, index) => (
                      <button
                        key={img.src}
                        type="button"
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative aspect-square w-16 shrink-0 overflow-hidden rounded-md border ${
                          currentImageIndex === index
                            ? "border-neutral-900"
                            : "border-transparent hover:border-neutral-300"
                        }`}
                      >
                        <Image
                          src={img.src}
                          alt={img.altText || "Imagem do produto"}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </Stack>

                  <Flex
                    align="center"
                    justify="center"
                    className="min-w-0 flex-1 overflow-hidden"
                  >
                    {currentImage && (
                      <Image
                        src={currentImage.src}
                        alt={currentImage.altText || "Imagem do produto"}
                        width={700}
                        height={700}
                        sizes="(max-width: 1024px) calc(100vw - 5rem), 60vw"
                        className="block h-auto w-full max-w-full object-contain"
                      />
                    )}
                  </Flex>
                </Flex>
              </div>

              <Stack classname="min-w-0 w-full" gap="lg">
                <Text variant="h1">{product?.title}</Text>

                <hr />

                <Text variant="h2">R$ {product?.variants[0].price.amount}</Text>

                <Button onClick={handleAddToCart}>ADICIONAR AO CARRINHO</Button>

                <Text variant="h2">ESPECIFICAÇÕES</Text>

                <article
                  className="product-description max-w-full overflow-hidden"
                  dangerouslySetInnerHTML={{
                    __html: product?.descriptionHtml || "",
                  }}
                />
              </Stack>
            </Grid>

            <Flex className="mt-15">
              <Text variant="h2">Você pode gostar</Text>
              <Suggestions />
            </Flex>
          </Section>
        </Container>
      )}
    </>
  );
}
