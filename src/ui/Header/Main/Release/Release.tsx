"use client";

import { ProductProps } from "@/app/produtos/[id]/interface";
import Card from "@/components/card/card";
import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/button/Button";
import Tag from "@/components/tag/tag";
import { Heart, Star, Zap } from "lucide-react";
import Link from "next/link";

export default function Releases() {
  useEffect(() => {
    axios
      .get("http://localhost:3004/api/produtos")
      .then((res) => setProducts(res.data));
  }, []);

  const [products, setProducts] = useState<ProductProps[]>([]);
  return (
    <>
      <section className="container mx-auto bg-neutral-50 space-y-5 p-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-3xl font-bold text-neutral-950">
            Lançamentos
          </span>
          <span className="text-md font-light text-neutral-950">
            Produtos em Lançamento que Podem te Interessar
          </span>
        </div>
        <Card>
          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
            {products.slice(6, 12).map((produtos) => (
              <Card key={produtos.pid} className="group cursor-pointer overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <Link href={`/produtos/${produtos.pid}`}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={produtos.productImage}
                    alt={produtos.productImage}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {produtos.listingCount && (
                    <Tag className="absolute top-3 left-3 bg-black text-white">
                      {produtos.listingCount}
                    </Tag>
                  )}
                  <Button
                    variant="secondary"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-gray-100"
                  >
                    <Heart className="h-4 w-4 text-gray-700" />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <h4 className="font-medium text-black text-balance line-clamp-2">
                    {produtos.productNameEn}
                  </h4>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-black">
                        {produtos.saleStatus}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({produtos.saleStatus})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-black">
                      {produtos.sellPrice}
                    </span>
                    {produtos.sellPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {produtos.sellPrice}
                      </span>
                    )}
                  </div>

                  <Button type="button" className="w-full">
                    Comprar
                  </Button>
                </div>
                </Link>
              </Card>
            ))}
          </div>
        </Card>
      </section>
    </>
  );
}
