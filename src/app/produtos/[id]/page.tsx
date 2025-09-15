"use client"

import Button from "@/components/button/Button"
import axios from "axios"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { ShoppingCart } from "lucide-react"
import Tag from "@/components/tag/tag"
import { useCart } from "@/components/CartContext/CartContext"
import type { ProductProps } from "@/app/produtos/[id]/interface"

export default function Page() {
  const params = useParams()

  const [data, setData] = useState<ProductProps | null>(null)
  console.log(data)
  useEffect(() => {
    axios
      .get(`http://localhost:3004/api/produtos/${params.id}`)
      .then((res) => res.data)
      .then((data) => {
        setData(data)
      })
  }, [params.id])

  function convertToBRL(usdPrice: number) {
    const exchangeRate = 5 // 1 USD = 5 BRL, troque pela cotação real se quiser
    return (usdPrice * exchangeRate).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  function parsePrice(price: string) {
    if (!price) return { min: 0, max: 0 }
    const [min, max] = price.split("--").map((v) => Number.parseFloat(v.trim()))
    return { min, max: max || min }
  }

  function handleStock() {
    if (data && data.listingCount > 0 && data.listingCount < 10) return "secondary"
    if (data?.listingCount === 0) return "tertiary"
    return "primary"
  }

  function handleStockText() {
    if (data && data.listingCount > 0 && data.listingCount < 10) return "ESGOTANDO"
    if (data?.listingCount === 0) return "ESGOTADO"
    return "EM ESTOQUE"
  }

  const { min, max } = parsePrice(data?.sellPrice || "0")

  const { addToCart } = useCart()
  return (
    <main className="overflow-hidden">
      <section className="flex gap-6 p-5 md:flex-col sm:flex-col lg:flex-row xl:flex-row overflow-hidden">
        <div className="flex flex-wrap justify-center items-center md:w-full sm:w-full lg:w-1/2 xl:w-1/2 h-full ">
          <div className="w-1/2 h-1/2">
            <img
              src={data?.details.productImageSet[0]}
              className="w-full h-full object-cover"
              alt={data?.productNameEn}
            />
          </div>
          <div className="w-1/2 h-1/2">
            <img
              src={data?.details.productImageSet[1]}
              className="w-full h-full object-cover"
              alt={data?.productNameEn}
            />
          </div>
          <div className="w-1/2 h-1/2">
            <img
              src={data?.details.productImageSet[2]}
              className="w-full h-full object-cover"
              alt={data?.productNameEn}
            />
          </div>
          <div className="w-1/2 h-1/2">
            <img
              src={data?.details.productImageSet[3]}
              className="w-full h-full object-cover"
              alt={data?.productNameEn}
            />
          </div>
        </div>

        <div className="flex md:w-full sm:w-full lg:w-1/2 xl:w-1/2 flex-col pt-5 gap-5">
          <span className="text-3xl font-normal">{data?.productNameEn}</span>

          <span className="text-4xl font-semibold">
            {min === max ? convertToBRL(min) : `${convertToBRL(min)} - ${convertToBRL(max)}`}
          </span>

          <div className="flex gap-2">
            <Tag variant={handleStock()}>{handleStockText()}</Tag>
            <Tag variant="quaternary">Entrega Gratis</Tag>
            <span className="text-md font-semibold text-neutral-500">{data?.productWeight} Disponíveis</span>
          </div>

          <div>
            <Button
              onClick={addToCart}
              className="flex items-center sm:gap-5 justify-center md:w-full sm:w-full lg:w-6/10 xl:w-5/10 lg:text-xl xl:text-xl h-20 text-3xl"
            >
              ADICIONAR AO CARRINHO
              <ShoppingCart className="w-8 h-8" />
            </Button>
          </div>

          <span className="text-sm text-neutral-500 font-normal">
            O prazo pode levar de 1 a 2 semanas para ser entregue ao seu endereço após a compra, lembrando que este
            prazo pode variar de acordo com a localidade.
          </span>

          <div className="flex flex-col gap-6 p-6">
            <h2 className="font-bold text-2xl text-gray-900 border-b border-gray-200 pb-3">Informações do produto</h2>

            <div className="overflow-hidden border border-gray-200">
              <table className="w-full">
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors duration-150">
                    <th className="text-left py-4 px-6 font-medium text-gray-700 bg-gray-50 w-1/3">Peso</th>
                    <td className="py-4 px-6 text-gray-900 font-medium">{data?.productWeight}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-150">
                    <th className="text-left py-4 px-6 font-medium text-gray-700 bg-gray-50">Material</th>
                    <td className="py-4 px-6 text-gray-900 font-medium">{data?.details.materialNameEnSet}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-150">
                    <th className="text-left py-4 px-6 font-medium text-gray-700 bg-gray-50">Descrição</th>
                    <td className="py-4 px-6 text-gray-900 font-medium">{data?.details.variants[0].variantNameEn}</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-150">
                    <th className="text-left py-4 px-6 font-medium text-gray-700 bg-gray-50">Altura</th>
                    <td className="py-4 px-6 text-gray-900 font-medium">
                      {data?.details.variants[0].variantHeight} cm
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors duration-150">
                    <th className="text-left py-4 px-6 font-medium text-gray-700 bg-gray-50">Largura</th>
                    <td className="py-4 px-6 text-gray-900 font-medium">{data?.details.variants[0].variantWidth} cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="flex w-full justify-center items-center flex-col gap-6 p-6">
          <span className="font-bold text-2xl text-gray-900 border-b border-gray-200 pb-3">Categoria</span>
          <div
            dangerouslySetInnerHTML={{
              __html: data?.details.description || "",
            }}
          />
        </div>
      </section>
    </main>
  )
}
