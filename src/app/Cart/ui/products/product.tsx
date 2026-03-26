"use client"

import { useCart } from "@/app/Cart/ui/CartContext/Context"
import Button from "@/components/button/Button"
import Card from "@/components/card/card"
import { Trash } from "lucide-react"
import Image from "next/image"

export default function CartProduct() {
  const { cart, handleDeleteProduct, increaseQuantity, decreaseQuantity, updateQuantity, total } = useCart()

  const calculateSubtotal = (price: string, quantity: number) => {
    return (Number(price) * quantity).toFixed(2)
  }

  if (cart.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center gap-5 w-full p-10">
        <p className="text-xl text-muted-foreground">Seu carrinho está vazio</p>
      </section>
    )
  }

  return (
    <>
      <section className="flex flex-col gap-5 w-full">
        {cart.map((p) => (
          <Card key={p.id} className="">
            <div className="flex gap-5 items-center justify-between max-md:flex-col max-md:items-start">
              <div className="flex gap-4 items-center flex-1">
                {p.image?.src && (
                  <Image
                    src={p.image.src || "/placeholder.svg"}
                    alt={p.image.altText || p.title}
                    width={80}
                    height={80}
                    className="rounded object-cover"
                  />
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium text-lg">{p.title}</h3>
                  <p className="text-muted-foreground">R${p.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(p.id)}
                  className="w-8 h-8 flex items-center justify-center rounded bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <span className="font-extrabold text-lg">-</span>
                </button>
                <input
                  type="number"
                  min="1"
                  value={p.quantity}
                  onChange={(e) => {
                    const value = Number.parseInt(e.target.value) || 1
                    updateQuantity(p.id, value)
                  }}
                  className="w-16 h-8 text-center border border-border rounded bg-background"
                />
                <button
                  onClick={() => increaseQuantity(p.id)}
                  className="w-8 h-8 flex items-center justify-center rounded bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <span className="font-extrabold text-lg">+</span>
                </button>
                <Button
                  onClick={() => handleDeleteProduct(p.id)}
                  className="ml-3 w-8 h-8 flex items-center justify-center rounded bg-destructive/10 hover:bg-destructive/20 transition-colors"
                >
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-border">
              <p className="text-md font-light">
                Subtotal ({p.quantity} {p.quantity === 1 ? "item" : "itens"}):
              </p>
              <h1 className="text-2xl font-extralight">R$ {calculateSubtotal(p.price, p.quantity)}</h1>
            </div>
          </Card>
        ))}
      </section>
    </>
  )
}
