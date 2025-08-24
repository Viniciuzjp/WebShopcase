"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CartContextType {
  cartValue: number;
  addToCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartValue, setCartValue] = useState(0);

  const addToCart = () => setCartValue((prev) => prev + 1);

  return (
    <CartContext.Provider value={{ cartValue, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart deve ser usado dentro de CartProvider");
  return context;
}

export default CartProvider;