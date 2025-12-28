"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/CartContext/Context"

interface ImageType {
  src: string
  altText: string
  width: number
  height: number
}

interface Variant {
  id: string
  title: string
  price: {
    amount: string
    currencyCode: string
  }
  availableForSale: boolean
}

interface Product {
  id: string
  title: string
  images: ImageType[]
  variants: Variant[]
}

export default function ProductPage() {
  const { id } = useParams()
  const { AddItem } = useCart()

  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    if (!id) {
      setError("ID do produto não fornecido")
      setLoading(false)
      return
    }

    async function fetchProduct() {
      try {
        const response = await fetch(`/api/products/${id}`)
        if (!response.ok) {
          const text = await response.text()
          console.error("Erro API:", text)
          throw new Error(`HTTP ${response.status}`)
        }

        const data: Product = await response.json()
        setProduct(data)
      } catch (err: unknown) {
        console.error(err)
        setError("Erro ao buscar produto")
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (!product) return

    setIsAdding(true)
    const item = {
      id: product.id,
      variantId: product.variants[0]?.id,
      title: product.title,
      image: product.images[0],
      price: product.variants[0].price.amount,
    }

    AddItem(item)

    setTimeout(() => {
      setIsAdding(false)
    }, 500)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Carregando...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-destructive">{error}</p>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl">Produto não encontrado</p>
      </div>
    )
  }

  return (
    <main className="overflow-hidden">
      <section className="flex gap-6 p-5 max-md:flex-col xl:flex-row">
        <div className="flex flex-wrap justify-center items-center md:w-full lg:w-1/2 h-full">
          {product.images.slice(0, 4).map((img, index) => (
            <div key={index} className="w-1/2 h-1/2 p-1">
              <img
                src={img.src || "/placeholder.svg"}
                className="w-full h-full object-cover rounded"
                alt={img.altText || product.title}
              />
            </div>
          ))}
        </div>

        <div className="flex md:w-full lg:w-1/2 flex-col pt-5 gap-10">
          <span className="text-3xl font-extralight">{product.title}</span>
          <div className="flex gap-3 items-center">
            <span className="text-3xl font-semibold items-center">R${product.variants[0].price.amount}</span>
            <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              8% offer
            </span>
          </div>

          <div className="flex gap-2 items-center">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                product.variants[0].availableForSale
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
              }`}
            >
              {product.variants[0].availableForSale ? "Disponível" : "Indisponível"}
            </span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100 rounded-full text-sm font-medium">
              Entrega Grátis
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.variants[0].availableForSale || isAdding}
              className="flex items-center justify-center gap-2 md:w-full h-14 text-xl bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isAdding ? "ADICIONADO!" : "ADICIONAR AO CARRINHO"}
              <ShoppingCart className="w-8 h-8" />
            </button>
          </div>
          <div className="w-full flex gap-3 flex-wrap">
            {product.images.map((img, index) => (
              <div key={index} className="w-24 h-24">
                <img
                  src={img.src || "/placeholder.svg"}
                  className="w-full h-full object-cover rounded"
                  alt={img.altText || product.title}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full border-t border-border"></div>
    </main>
  )
}
