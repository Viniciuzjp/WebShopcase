"use client";

import { useCart } from "@/app/Cart/ui/CartContext/Context";
import { Button, Stack } from "@av-digital/components";
import Card from "@/components/card/card";
import { Flex } from "@av-digital/components";
import { Ban, Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";
import { Text } from "@/components/text/Text";
import { formatPrice } from "@/lib/currency";

export default function CartProduct() {
  const {
    cart,
    handleDeleteProduct,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    total,
  } = useCart();

  const calculateSubtotal = (price: string, quantity: number) => {
    return (Number(price) * quantity).toFixed(2);
  };

  if (cart.length === 0) {
    return (
      <Flex direction="column" className="w-full" justify="center">
        <Text variant="h2">SEU CARRINHO ESTÁ VAZIO</Text>
        <Ban size={56} strokeWidth={3} />
      </Flex>
    );
  }

  return (
    <>
      <Stack>
        {cart.map((p) => (
          <Card key={p.id}>
            <Flex
              gap="md"
              justify="between"
              className="max-md:flex-col max-md:items-start"
            >
              <Flex gap="md">
                {p.image?.src && (
                  <Image
                    src={p.image.src || "/placeholder.svg"}
                    alt={p.image.altText || p.title}
                    width={80}
                    height={80}
                    className="rounded object-cover"
                  />
                )}
                <Flex direction="column" align="start">
                  <Text variant="bodyLg">{p.title}</Text>
                  <Text variant="body">{formatPrice(p.price, p.currencyCode)}</Text>
                </Flex>
              </Flex>

              <Flex className="w-full">
                <Button
                  onClick={() => decreaseQuantity(p.id)}
                  className="px-40"
                >
                  <Minus color="white" />
                </Button>
                <input
                  type="number"
                  min="1"
                  value={p.quantity}
                  onChange={(e) => {
                    const value = Number.parseInt(e.target.value) || 1;
                    updateQuantity(p.id, value);
                  }}
                  className="outline-0 h-14 text-center border-b border-neutral-400 text-neutral-600"
                />
                <Button
                  variant="secondary"
                  onClick={() => increaseQuantity(p.id)}
                >
                  <Plus color="black" />
                </Button>
                <Button onClick={() => handleDeleteProduct(p.id)}>
                  <Trash color="white" />
                </Button>
              </Flex>
            </Flex>

            <Flex justify="between">
              <Text variant="label">
                Subtotal ({p.quantity} {p.quantity === 1 ? "item" : "itens"}):
              </Text>
              <Text variant="bodyLg">
                {formatPrice(calculateSubtotal(p.price, p.quantity), p.currencyCode)}
              </Text>
            </Flex>
          </Card>
        ))}
      </Stack>
    </>
  );
}
