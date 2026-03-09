"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/CartContext/Context";
import Button from "@/components/button/Button";
import { Products } from "@/ui/shopifyinterface/interface";
import Card from "@/components/card/card";
import { getProducts } from "@/lib/shopify";
import Link from "next/link";
import Suggestions from "@/components/suggestions/suggestions";

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
      setLoading(false);
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-destructive">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Produto não encontrado</p>
      </div>
    );
  }
  const currentImage = product.images[currentImageIndex];

  return (
    <main className="flex flex-col xl:px-10 max-lg:px-5 gap-10">
      <section className="flex xl:px-10 max-lg:flex-col w-full">
        <section className="flex lg:sticky xl:px-10 lg:top-15 lg:h-fit py-10 gap-2 lg:px-3 lg:w-7/10 ">
          <div className="flex gap-2 py-2 max-lg:w-2/10 max-xl:w-2/10 xl:w-1/6 flex-col">
            {product.images.map((p, index) => (
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
            <Image
              src={currentImage}
              alt={product.images[0].altText || "IMG"}
              height={product.images[0].height}
              width={product.images[0].width}
            ></Image>
          </div>
        </section>
        <section className="flex lg:p-8 gap-10 flex-col lg:w-7/10 w-full py-5">
          <span className="text-3xl font-bold">{product.title}</span>
          <hr className="text-neutral-300" />
          <span className="text-3xl font-extralight">
            R$ {product.variants[0].price.amount}
          </span>

          <Button onClick={handleAddToCart}>Adicionar Ao Carrinho</Button>

          <div className="flex flex-col gap-2">
            <h1 className="text-5xl text-neutral-800 font-extrabold">ESPECIFICAÇÕES</h1>
            <div
              className="text-sm font-medium text-neutral-700 space-y-4"
              dangerouslySetInnerHTML={{
                __html: product.descriptionHtml || "",
              }}
            />
          </div>
        </section>
      </section>
      <section className="flex flex-col gap-3">
        <span className="text-3xl font-bold">Você pode gostar</span>
        <div className="flex overflow-hidden gap-5 justify-center items-center">
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
