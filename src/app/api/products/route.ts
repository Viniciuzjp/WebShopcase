import { NextResponse } from "next/server";
import { getProducts } from "@/lib/shopify";
import type { Products } from "@/ui/shopifyinterface/interface";

export async function GET() {
  try {
    const products: Products[] = await getProducts(50);
    return NextResponse.json(Array.isArray(products) ? products : []);
  } catch (err) {
    console.error("Erro ao buscar produtos da Shopify:", err);
    return NextResponse.json({ error: "Erro ao buscar produtos" }, { status: 500 });
  }
}
