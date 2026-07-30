"use client";

import { useCart } from "@/app/Cart/ui/CartContext/Context";
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

      // 1. Se a requisição falhar (ex: 400, 404, 500), interrompe o fluxo antes do .json()
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erro no servidor:", response.status, errorText);
        alert(`Erro ao iniciar checkout (${response.status}). Verifique o console da API.`);
        return; // Parar aqui!
      }

      // 2. Agora é seguro ler o JSON
      const data = await response.json();
      console.log("Sucesso:", data);

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        console.error("checkoutUrl não retornado pela API", data);
      }
    } catch (err) {
      console.error("Erro na requisição:", err);
    }
  }

  return (
    <section className="flex flex-col gap-5 w-full">
      <div className="flex flex-col gap-4 p-6 bg-muted/50 rounded-lg">
        <div className="flex justify-between items-center">
          <p className="text-lg font-medium">Total do Carrinho:</p>
          <h1 className="text-2xl font-bold">R${total.toFixed(2)}</h1>
        </div>
        <Button onClick={HandleCheckout}>Finalizar Compra</Button>
      </div>
    </section>
  );
}