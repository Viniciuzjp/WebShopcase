"use client";

import { useCart } from "@/CartContext/Context";
import Button from "@/components/button/Button";
export default function CartProduct() {
  const { cart, total } = useCart();

  if (cart.length === 0) {
    return (
      <section className="flex flex-col items-center justify-center gap-5 w-full p-10">
        <p className="text-xl text-muted-foreground">Seu carrinho está vazio</p>
      </section>
    );
  }

  async function HandleCheckout() {
    const lineItems = [
      {
        id: cart[0].variantId,
        quantity: cart[0].quantity,
      },
    ];
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lineItems }),
      });
      if (!response.ok) {
        console.log("erro na requisição");
      }
      const data = await response.json();
      window.location.href = data.checkoutUrl;[


        
      ]
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <>
      <section className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-4 p-6 bg-muted/50 rounded-lg">
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium">Total do Carrinho:</p>
            <span className="text-2xl font-bold">R${total.toFixed(2)}</span>
          </div>
          <Button onClick={HandleCheckout}>Finalizar Compra</Button>
        </div>
      </section>
    </>
  );
}
