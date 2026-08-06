"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useCart } from "@/app/Cart/ui/CartContext/Context";
import Button from "@/components/button/Button";
import { Products } from "@/ui/shopifyinterface/interface";
import Suggestions from "@/components/suggestions/suggestions";
import { Text } from "@/components/text/Text";
import { Skeleton } from "@/design-system/layout/Skeleton";
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
          const text = await response.text();
          console.error("Erro API:", text);
          throw new Error(`HTTP ${response.status}`);
        }

        const data: Products = await response.json();
        setProduct(data);
      } catch (err: unknown) {
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

    const item = {
      id: product.id,
      variantId: product.variants[0]?.id,
      title: product.title,
      image: product.images[0],
      price: product.variants[0].price.amount,
    };

    AddItem(item);
  };

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Text variant="h2">{error}</Text>
      </div>
    );
  }

  const currentImage = product?.images[currentImageIndex];

  return (
    <>
      {loading ? (
       <PorductSkelleton/>
      ) : (
        <Container size="xl">
          <Section>
            <Grid classname="lg:grid-cols-2">
              <div className="lg:sticky lg:top-24 self-start">
                <Flex align="start" justify="center">
                  <Stack classname="w-1/6">
                    {product?.images.map((img, index) => (
                      <Image
                        key={img.src}
                        src={img.src}
                        alt={img.altText || "IMG"}
                        height={img.height}
                        width={img.width}
                        className="hover:border"
                        onClick={() => setCurrentImageIndex(index)}
                      ></Image>
                    ))}
                  </Stack>
                  <Flex align="center" justify="center" className="w-8/11">
                    {currentImage && (
                      <Image
                        src={currentImage.src}
                        alt={product.images[0].altText || "IMG"}
                        height={product.images[0].height}
                        width={product.images[0].width}
                      ></Image>
                    )}
                  </Flex>
                </Flex>
              </div>

              <Stack gap="lg">
                <Text variant="h1">{product?.title}</Text>
                <hr />
                <Text variant="h2">R$ {product?.variants[0].price.amount}</Text>
                <Button onClick={handleAddToCart}>ADICIONAR AO CARRINHO</Button>

                <Text variant="h2">ESPECIFICAÇÕES</Text>
                <article
                  className="product-description"
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
{
}
