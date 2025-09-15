"use client";

import Card from "@/components/card/card";
import Image from "next/image";
import { motion, Reorder } from "framer-motion";
import { useState } from "react";
import Button from "@/components/button/Button";

const initialProducts = [
  { id: 1, src: "/images/white-wireless-earbuds.jpg", alt: "Fones de ouvido", h: "h-96" },
  { id: 2, src: "/images/black-premium-keyboard.jpg", alt: "Teclado premium", h: "h-72" },
  { id: 3, src: "/images/white-wireless-mouse.jpg", alt: "Mouse sem fio", h: "h-80" },
  { id: 4, src: "/images/white-wireless-earbuds.jpg", alt: "Fones de ouvido", h: "h-64" },
  { id: 5, src: "/images/black-premium-keyboard.jpg", alt: "Teclado premium", h: "h-80" },
  { id: 6, src: "/images/white-wireless-mouse.jpg", alt: "Mouse sem fio", h: "h-72" },
  { id: 7, src: "/images/white-wireless-earbuds.jpg", alt: "Fones de ouvido", h: "h-64" },
  { id: 8, src: "/images/black-premium-keyboard.jpg", alt: "Teclado premium", h: "h-80" },
];

export default function Cat() {
  const [products, setProducts] = useState(initialProducts);

  return (
    <section className="container mx-auto bg-neutral-50 p-10 space-y-12">
      {/* Cabeçalho */}
      <div className="flex flex-col items-center gap-4 text-center">
        <span className="text-3xl font-extrabold text-neutral-950">
          CATEGORIAS
        </span>
        <p className="text-md font-light text-neutral-950 max-w-xl">
          Explore nossas categorias para encontrar o que você precisa.
        </p>
      </div>

      {/* Masonry flex drag & drop */}
      <Reorder.Group
        axis="y"
        values={products}
        onReorder={setProducts}
        className="flex flex-wrap justify-center gap-6"
      >
        {products.map((product, idx) => (
          <Reorder.Item
            key={product.id}
            value={product}
            className={`relative flex-1 min-w-[250px] sm:min-w-[200px] max-w-sm ${product.h} transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover: cursor-grab`}
          >
              <div className="relative w-full h-full rounded-xl overflow-hidden group">
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={1000}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <span className="absolute top-4 left-4 text-lg text-white font-extralight opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {product.alt}
                </span>
                <Button className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100 hover:bg-blue-700">
                  Explorar
                </Button>
              </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </section>
  );
}
