"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const images = [
  { src: "/images/premium-wireless-headphones-black.jpg", alt: "Headsets" },
  { src: "/images/black-premium-keyboard.jpg", alt: "Teclados" },
  { src: "/images/wireless-charging-pad-modern.jpg", alt: "PowerBanks" },
  { src: "/images/white-wireless-mouse.jpg", alt: "Mouse" },
]

const CARD_WIDTH = 280

export default function Cat() {
  const [mounted, setMounted] = useState(false)
  const duplicated = [...images, ...images, ...images]

  const [index, setIndex] = useState(images.length)
  const [animate, setAnimate] = useState(true)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (index >= images.length * 2) {
      setTimeout(() => {
        setAnimate(false)
        setIndex(images.length)
      }, 300)
    }

    if (index <= images.length - 1) {
      setTimeout(() => {
        setAnimate(false)
        setIndex(images.length * 2 - 1)
      }, 300)
    }
  }, [index])

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true))
    }
  }, [animate])

  if (!mounted) return null

  return (
    <section className="bg-neutral-900 py-10">
      <div className="container mx-auto px-4 mb-12">
        <div className="flex justify-between mb-4">
          <div>
            <p className="text-xs text-white font-semibold uppercase tracking-widest mb-3">
              Seleção Especial
            </p>
            <h2 className="text-4xl font-light text-white">
              Categorias em Destaque
            </h2>
          </div>

          <Link
            href="/products"
            className="flex items-center gap-2 text-neutral-600 mt-2"
          >
            <span className="text-sm font-medium text-white">Ver Tudo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-white text-lg max-w-2xl">
          Procure por tudo que precisar por cada categoria.
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => setIndex((i) => i - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-2xl"
        >
          =
        </button>

        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
              transition: animate ? "transform 0.4s ease" : "none",
            }}
          >
            {duplicated.map((item, i) => (
              <div key={i} className="min-w-[280px] px-4">
                <div className="relative aspect-square rounded-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-6 left-20 text-white text-xl font-semibold">
                    {item.alt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setIndex((i) => i + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-2xl"
        >
          =
        </button>
      </div>
    </section>
  )
}
