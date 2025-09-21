"use client";

import { useState } from "react";
import Button from "@/components/button/Button";
import InputForm from "@/components/Input/InputForm";
import Card from "@/components/card/card";
import CardContent from "@mui/material/CardContent";
import Tag from "@/components/tag/tag";

import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowLeft,
  CreditCard,
  Truck,
  Gift,
} from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/CartContext/Context";

export default function CartPage() {
  const { cart, updateQuantity, removeItem, clearCart } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [shippingMethod, setShippingMethod] = useState("standard");

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors">
                <ArrowLeft className="h-5 w-5" />
                <span className="font-medium">Continue Comprando</span>
              </Link>
              <h1 className="text-xl font-semibold text-black">Carrinho</h1>
              <div className="w-32"></div>
            </div>
          </div>
        </header>

        <div className="max-w-2xl mx-auto px-4 py-16 text-center">
          <div className="flex flex-col items-center space-y-6">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-gray-400" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-black">Carrinho Vazio</h2>
              <p className="text-gray-600">Parece que seu carrinho está vazio</p>
            </div>
            <Link href="/">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                Começe a Comprar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Continue Comprando</span>
            </Link>
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-semibold text-black">Carrinho</h1>
              <Tag className="bg-black text-white">
                {itemCount} {itemCount === 1 ? "item" : "items"}
              </Tag>
            </div>
            <Button
              variant="primary"
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              Limpar Carrinho
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
              {cart.map((item) => (
                <div key={item.id} className="p-6 flex flex-col sm:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-black mb-1">{item.title}</h3>
                        <p className="text-lg font-semibold text-black">R${item.price.toFixed(2)}</p>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center border border-gray-200 rounded-lg">
                          <Button
                            variant="primary"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-10 w-10 p-0 hover:bg-gray-100"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="primary"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-10 w-10 p-0 hover:bg-gray-100"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="secondary"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-600">Subtotal:</span>
                      <span className="text-lg font-semibold text-black">
                        R${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-96 space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-4 flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Opções de Envio
                </h3>
                <div className="space-y-3">
                  {["free", "standard", "express"].map((method) => (
                    <label key={method} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center">
                        <input
                          type="radio"
                          name="shipping"
                          value={method}
                          checked={shippingMethod === method}
                          onChange={(e) => setShippingMethod(e.target.value)}
                          className="mr-3"
                        />
                        <div>
                          <div className="font-medium text-black">
                            {method === "free" ? "Entrega Gratis" : method === "standard" ? "Envio Padrão" : "Envio Express"}
                          </div>
                          <div className="text-sm text-gray-600">
                            {method === "free" ? "5-7 Dias Úteis" : method === "standard" ? "3-5 Dias Úteis" : "1-2 Dias Úteis"}
                          </div>
                        </div>
                      </div>
                      <span className="font-medium text-black">
                        {method === "free" ? "Gratis" : method === "standard" ? "R$5.99" : "R$15.99"}
                      </span>
                    </label>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-4 flex items-center">
                  <Gift className="h-5 w-5 mr-2" />
                  Código Promocional
                </h3>
                <div className="flex space-x-3 items-center justify-center">
                  <InputForm
                    placeholder="Insira o código promocional"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    disabled={isPromoApplied}
                    className="flex-1"
                  />
                  <Button disabled={isPromoApplied || !promoCode} className="w-32 hover:text-white bg-transparent">
                    Aplicar
                  </Button>
                </div>
                {isPromoApplied && (
                  <div className="mt-2 text-sm text-green-600 flex items-center">
                    <Gift className="h-4 w-4 mr-1" />
                    Código promocional aplicado
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-black mb-4">Resumo do Pedido</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({itemCount} items)</span>
                    <span>R${total.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto</span>
                      <span>-R${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span>Envio</span>
                    <span>{shippingMethod === "express" ? "R$15.99" : shippingMethod === "standard" ? "R$5.99" : "Gratis"}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax</span>
                    <span>R$0.00</span>
                  </div>
                  <div className="flex justify-between text-lg font-semibold text-black">
                    <span>Total</span>
                    <span>R${(total + (shippingMethod === "express" ? 15.99 : shippingMethod === "standard" ? 5.99 : 0) - discount).toFixed(2)}</span>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-black text-white hover:bg-gray-800 h-12 text-lg font-medium">
                  <div className="flex items-center justify-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  <span>Finalizar Compra</span>
                  </div>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
