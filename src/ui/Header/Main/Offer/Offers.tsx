"use client";

import { ProductProps } from "@/app/produtos/[id]/interface";
import Card from "@/components/card/card";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import Tag from "@/components/tag/tag";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function Offer() {
  useEffect(() => {
    axios
      .get("http://localhost:3004/api/produtos")
      .then((res) => setProducts(res.data));
  }, []);

  const [products, setProducts] = useState<ProductProps[]>([]);
  return (
    <>
      <section className="container mx-auto bg-red-50 space-y-5 p-10">
        <div className="flex items-center gap-4">
        <Zap className="w-10 h-10 text-red-600" />
        <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-red-600">Ofertas Especiais</h1>
        <span className="text-md text-neutral-950">Encontre as Melhores Ofertas - Não Perca Essa</span>
        </div>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {products.slice(0, 6).map((produtos) => (
            <Card key={produtos.pid} className="border-3 border-red-300 hover:border-red-600">
              <Link href={`/produtos/${produtos.pid}`}>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <Image
                    src={produtos.productImage}
                    alt={produtos.productNameEn}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Tag  className="absolute top-3 left-3 bg-red-600 text-white text-sm">
                    -{produtos.sellPrice} Desconto
                  </Tag>
                  <div className="absolute top-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs">
                    {produtos.listingCount} Restantes
                  </div>
                </div>
                <span className="font-medium">{produtos.productNameEn}</span>
                <div className="flex gap-3 items-center">
                  <span className="font-extrabold text-2xl text-red-600">
                    {produtos.sellPrice}
                  </span>
                  <span className="font-light text-lg line-through text-neutral-400">
                    {produtos.sellPrice}
                  </span>
                </div>
                <div className="w-full h-1 bg-red-600 m-auto rounded-md"></div>
                <Button variant="primary">Comprar</Button>
              </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
