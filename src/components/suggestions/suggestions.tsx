import { useEffect, useState } from "react";
import Link from "next/link";
import { Products } from "@/ui/shopifyinterface/interface";
import Card from "../card/card";
import { getProducts } from "@/lib/shopify";
import { Text } from "../text/Text";
import { ProductGrid } from "@/design-system/layout/Productgrid";

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
    <ProductGrid>
      {product?.map((p) => (
        <Card key={p.id} className="flex flex-col gap-2">
          <Link href={`/produtos/${encodeURIComponent(p.id)}`}>
          <img src={p.images[0].src} alt={p.images[0].src} />
          <div className="flex flex-col items-center justify-center gap-5">
          <Text variant="body">{p.title}</Text>
          <Text variant="h2">R$ {p.variants[0].price.amount}</Text>
          </div>
          </Link>
        </Card>
      ))}
      </ProductGrid>
    </>
  );
}
