import { useEffect, useState } from "react";
import { Products } from "@/ui/shopifyinterface/interface";
import { getProducts } from "@/lib/shopify";
import { ProductGrid } from "@/design-system/layout/Productgrid";
import ProductCard from "@/design-system/layout/ProductCard";

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
      {product?.map((product)=> (
        <ProductCard key={product.id} product={product}/>
      ))}
      </ProductGrid>
    </>
  );
}
