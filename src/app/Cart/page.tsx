"use client";
import { Container } from "@av-digital/components";
import Conclude from "./ui/Conclude/conclude";
import Product from "./ui/products/product";
import Shipping from "./ui/Shipping/shipping";

export default function Cart() {
  return (
    <Container size="xl">
      <main className="min-h-screen xl:p-5 xl:flex gap-10">
        <div className="xl:flex xl:w-1/2">
          <Product />
        </div>
        <div className="xl:flex-col xl:w-1/2">
          <Shipping />
          <Conclude />
        </div>
      </main>
    </Container>
  );
}
