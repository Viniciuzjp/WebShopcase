import { useEffect, useState } from "react";
import Link from "next/link";
import { Products } from "@/ui/shopifyinterface/interface";
import Card from "../card/card";
import { getProducts } from "@/lib/shopify";

export default function Suggestions() {
  const [product, setProuct] = useState<Products[] | null>(null);
  useEffect(() => {
    async function GET() {
      const datashopify: Products[] = await getProducts(4);
      setProuct(datashopify);
    }
    GET();
  }, []);

  return (
    <>
    <div className="flex max-lg:grid max-lg:grid-cols-2 gap-2 mb-5">
      {product?.map((p) => (
        <Card key={p.id} className="flex flex-col gap-2">
          <Link href={`/produtos/${encodeURIComponent(p.id)}`}>
          <img src={p.images[0].src} alt={p.images[0].src} />
          <div className="flex flex-col items-center justify-center gap-5">
          <span className="text-md font-light">{p.title}</span>
          <span className="text-3xl font-normal">R$ {p.variants[0].price.amount}</span>
          </div>
          </Link>
        </Card>
      ))}
      </div>
    </>
  );
}
