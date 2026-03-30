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
import { Container } from "@/design-system/layout/Container";

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
        <>
          <Container>
            <section className="flex xl:px-10 max-lg:flex-col w-full">
              <section className="flex lg:sticky xl:px-10 lg:top-15 lg:h-fit py-10 gap-2 lg:px-3 lg:w-7/10 ">
                <div className="flex gap-2 py-2 max-lg:w-2/10 max-xl:w-2/10 xl:w-1/6 flex-col">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i}>
                      <Skeleton className="w-full h-30" />
                    </div>
                  ))}
                </div>
                <div className="w-full">
                  {Array.from({ length: 1 }).map((_, i) => (
                    <div key={i}>
                      <Skeleton className="w-full h-160" />
                    </div>
                  ))}
                </div>
              </section>
              <section className="flex lg:p-8 gap-10 flex-col lg:w-7/10 w-full py-5">
                <div className="space-y-2">
                  <Skeleton className="w-9/10 h-10" />
                  <Skeleton className="w-7/10 h-10" />
                  <Skeleton className="w-4/10 h-10" />
                </div>
                <Skeleton className="w-3/10 h-10" />

                <Skeleton className="w-full h-15" />

                <div className="flex flex-col gap-2">
                  <Skeleton className="full h-10" />
                  <div
                    className="text-sm font-medium text-neutral-700 space-y-4"
                    dangerouslySetInnerHTML={{
                      __html: product?.descriptionHtml || "",
                    }}
                  />
                </div>
              </section>
            </section>
          </Container>
        </>
      ) : (
        <Container>
          <section className="flex xl:px-10 max-lg:flex-col w-full">
            <section className="flex lg:sticky xl:px-10 lg:top-15 lg:h-fit py-10 gap-2 lg:px-3 lg:w-7/10 ">
              <div className="flex gap-2 py-2 max-lg:w-2/10 max-xl:w-2/10 xl:w-1/6 flex-col">
                {product?.images.map((p, index) => (
                  <Image
                    key={p.src}
                    src={p.src}
                    alt={p.altText || "IMG"}
                    height={p.height}
                    width={p.width}
                    className="hover:border"
                    onClick={() => setCurrentImageIndex(index)}
                  ></Image>
                ))}
              </div>
              <div className="w-full">
                {currentImage && (
                  <Image
                    src={currentImage.src}
                    alt={product.images[0].altText || "IMG"}
                    height={product.images[0].height}
                    width={product.images[0].width}
                  ></Image>
                )}
              </div>
            </section>
            <section className="flex lg:p-8 gap-10 flex-col lg:w-7/10 w-full py-5">
              <Text variant="h1">{product?.title}</Text>
              <hr className="text-neutral-300" />
              <Text variant="h1">R$ {product?.variants[0].price.amount}</Text>

              <Button onClick={handleAddToCart}>Adicionar Ao Carrinho</Button>

              <div className="flex flex-col gap-2">
                <Text variant="h2">ESPECIFICAÇÕES</Text>
                <div
                  className="text-sm font-medium text-neutral-700 space-y-4"
                  dangerouslySetInnerHTML={{
                    __html: product?.descriptionHtml || "",
                  }}
                />
              </div>
            </section>
          </section>
          <Text variant="h2">Você pode gostar</Text>
          <div className="gap-5 justify-center items-center">
            <Suggestions />
          </div>
        </Container>
      )}
    </>
  );
}
