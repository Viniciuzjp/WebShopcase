"use client";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/button/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const initialProducts = [
  {
    id: 1,
    src: "/images/white-wireless-earbuds.jpg",
    alt: "Fones de ouvido",
  },
  {
    id: 2,
    src: "/images/black-premium-keyboard.jpg",
    alt: "Teclados",
  },
  {
    id: 6,
    src: "/images/white-wireless-mouse.jpg",
    alt: "Mouse sem fio",
  },
  {
    id: 7,
    src: "/images/premium-wireless-headphones-black.jpg",
    alt: "HeadSets",
  },
  {
    id: 8,
    src: "/images/wireless-charging-pad-modern.jpg",
    alt: "PowerBanks",
  },
];

export default function Cat() {
  const [products] = useState(initialProducts);

  return (
    <>
      <section className="container mx-auto bg-neutral-50 p-10 space-y-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 lg:mb-16">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
                  Seleção Especial
                </p>
                <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight text-balance">
                  Categorias em Destaque
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
              Procure por tudo que precisar por cada categoria.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <section className="flex gap-2">
              <div className="flex flex-col gap-2">
                <Image
                  src="/images/premium-wireless-headphones-black.jpg"
                  alt="Headsets"
                  width={306}
                  height={100}
                />

                <Image
                  src="/images/black-premium-keyboard.jpg"
                  alt="Teclados"
                  className="max-lg:w-80"
                  width={306}
                  height={100}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Image
                  src="/images/wireless-charging-pad-modern.jpg"
                  alt="PowerBanks"
                  width={407}
                  height={100}
                />
                <div className="flex gap-2">
                <Image
                  src="/images/white-wireless-mouse.jpg"
                  alt="Teclados"
                  className="max-lg:w-100"
                  width={200}
                  height={100}
                />
                <Image
                  src="/images/black-premium-keyboard.jpg"
                  alt="Mouses"
                  className="max-lg:hidden"
                  width={205}
                  height={100}
                />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
