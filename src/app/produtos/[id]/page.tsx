"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/button/Button";
import Tag from "@/components/tag/tag";
import { ShoppingCart } from "lucide-react";
import { useCart, Product as CartProduct } from "@/CartContext/Context";
import type { Products } from "@/ui/shopifyinterface/interface";
import Rating from '@mui/material/Rating';



export default function ProductPage() {

  const SHOPIFY_STORE_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
  const { id } = useParams();
  const { AddToCart } = useCart();

  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
    if (!product || !product.variants.length) return;

    const item: CartProduct = {
      id: product.variants[0].id,
      title: product.title,
      price: Number(product.variants[0].price.amount),
      image: product.images[0]?.src || "",
      quantity: 1,
      available: product.variants[0].availableForSale,
    };

    AddToCart(item);
    alert(`${item.title} adicionado ao carrinho!`);
  };


  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Produto não encontrado</div>;

  return (
    <main className="overflow-hidden">
      <section className="flex gap-6 p-5 max-md:flex-col xl:flex-row">
        <div className="flex flex-wrap justify-center items-center md:w-full lg:w-1/2 h-full">
          {product.images.slice(0, 4).map((img, index) => (
            <div key={index} className="w-1/2 h-1/2 p-1">
              <img
                src={img.src}
                className="w-full h-full object-cover rounded"
                alt={img.altText || product.title}
              />
            </div>
          ))}
        </div>

        <div className="flex md:w-full lg:w-1/2 flex-col pt-5 gap-10">
          <span className="text-3xl font-extralight">{product.title}</span>
          <div className="flex gap-3 items-center">
          <span className="text-3xl font-semibold items-center">
            R${product.variants[0].price.amount}
          </span>
          <Tag variant="tertiary">
              10% offer
          </Tag>
          </div>
          <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly/>

          <div className="flex gap-2 items-center">
            <Tag variant="primary">
              {product.variants[0].availableForSale ? "Disponível" : "Indisponível"}
            </Tag>
            <Tag variant="quaternary">Entrega Grátis</Tag>
          </div>

          <div className="flex flex-col gap-3">
          <Button
            onClick={handleAddToCart}
            className="flex items-center justify-center gap-2 md:w-full h-14 text-xl"
          >
            ADICIONAR AO CARRINHO
            <ShoppingCart className="w-8 h-8" />
          </Button>

          <Button
            className="flex items-center justify-center gap-2 md:w-full h-14 text-xl bg-green-600 text-white rounded-lg"
          >
            COMPRAR
            <ShoppingCart className="w-8 h-8" />
          </Button>
          </div>

          <span className="text-sm text-neutral-500 font-normal">
            O prazo pode levar de 1 a 2 semanas para entrega, podendo variar de acordo com a localidade.
          </span>

          <div className="w-full flex gap-3">
            {product.images.map((img, index) => (
            <div key={index} className="w-1/2 h-1/2 p-1">
              <img
                src={img.src}
                className="w-full h-full object-cover rounded"
                alt={img.altText || product.title}
              />
            </div>
          ))}
          </div>
        </div>
      </section>
      <div className="w-full border">
         
        </div>
    </main>
  );
}
