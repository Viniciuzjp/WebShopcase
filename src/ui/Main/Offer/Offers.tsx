import Card from "@/components/card/card";
import Image from "next/image";
import Button from "@/components/button/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getProducts } from "@/lib/shopify";
import type { Products } from "@/ui/shopifyinterface/interface";

export default async function OffersSection() {
  const datashopify: Products[] = await getProducts(50);

  return (
    <section className="py-16 lg:py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 lg:mb-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
                Seleção Especial
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight text-balance">
                Ofertas em Destaque
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
            Descubra nossa curadoria de produtos com as melhores ofertas do
            momento.
          </p>
        </div>

        <div className="grid grid-cols-1 max-md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {datashopify.slice(0, 8).map((produto) => (
            <Link
              key={produto.id}
              href={`/produtos/${encodeURIComponent(produto.id)}`}
              className="group"
            >
              <div className="bg-white hover:border-neutral-300 transition-all duration-300 overflow-hidden h-full flex flex-col hover:shadow-lg">
                <div className="relative w-full overflow-hidden bg-neutral-50 aspect-square">
                  <Image
                    src={produto.images[0].src || "/placeholder.svg"}
                    alt={produto.images[0].altText || produto.title}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  <div className="absolute top-4 right-4 bg-neutral-900 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {`-${Math.round(
                      ((Number.parseInt(produto.variants[0].price.amount) *
                        0.08) /
                        Number.parseInt(produto.variants[0].price.amount)) *
                        100
                    )}%`}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1 flex-1 p-4">
                  <div className="flex-1">
                    <h3 className="text-neutral-900 font-semilight text-base line-clamp-2 group-hover:text-neutral-700 transition-colors">
                      {produto.title}
                    </h3>
                  </div>

                    <span className="text-sm text-neutral-500 line-through">
                      R$
                      {(
                        Number.parseInt(produto.variants[0].price.amount) * 1.08
                      ).toFixed(2)}
                    </span>

                  <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-neutral-900">
                      R${produto.variants[0].price.amount}
                    </span>
                    
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
