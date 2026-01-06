
import Card from "@/components/card/card";
import Image from "next/image";
import Button from "@/components/button/Button";
import Tag from "@/components/tag/tag";
import { ArrowRight, Heart, Star} from "lucide-react";
import Link from "next/link";
import { Products } from "@/ui/shopifyinterface/interface";
import { getProducts } from "@/lib/shopify";

export default async function Releases() {
  const datashopify: Products[] = await getProducts(50);
  return (
    <>
      <section className="bg-neutral-50 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
         <div className="mb-12 lg:mb-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">Seleção Especial</p>
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight text-balance">
                Lançamentos em Destaque
              </h2>
            </div>
            <Link
              href="/products"
              className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mt-2"
            >
              <span className="text-sm font-medium">Ver Tudo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <p className="text-neutral-600 text-lg max-w-2xl">
            Fique de olho e observe de perto um catálogo diverso de novidades
          </p>
        </div>
          <div className="grid max-md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-5">
            {datashopify.slice(4, 18).map((produtos) => (
              <div key={produtos.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 bg-white">
                <Link href={`/produtos/${encodeURIComponent(produtos.id)}`}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={produtos.images[0].src}
                    alt={produtos.images[0].altText || produtos.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {produtos.variants[0].availableForSale && (
                    <Tag className="absolute top-3 left-3 bg-black text-white">
                      {produtos.variants[0].availableForSale}
                    </Tag>
                  )}
                </div>

                <div className="p-3 space-y-1">
                  <h4 className="font-medium text-black text-balance line-clamp-2">
                    {produtos.title}
                  </h4>

                   <span className="text-sm justify-center text-neutral-500 line-through">
                      R$
                      {(
                        Number.parseInt(produtos.variants[0].price.amount) * 1.08
                      ).toFixed(2)}
                    </span>

                  <div className="flex justify-center gap-3">
                    <span className="text-2xl font-bold text-neutral-900">
                      R${produtos.variants[0].price.amount}
                    </span>
                    
                  </div>
                </div>
                </Link>
              </div>
            ))}
          </div>
          </div>
      </section>
    </>
  );
}
