import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getProducts } from "@/lib/shopify";
import type { Products } from "@/ui/shopifyinterface/interface";
import { Text } from "@/components/text/Text";
import { ProductGrid } from "@/design-system/layout/Productgrid";
import { Container } from "@/design-system/layout/Container";
import { Section } from "@/design-system/layout/Section";
import ProductCard from "@/design-system/layout/ProductCard";

export default async function OffersSection() {
  const datashopify: Products[] = await getProducts(50);

  return (
    <Container>
      <Section>
        <div className="mb-12 lg:mb-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex-1">
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest mb-3">
                Seleção Especial
              </p>
              <Text variant="h1">Ofertas em Destaque</Text>
            </div>
            <Link
              href="/products"
              className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mt-2"
            >
              <Text variant="body">Ver Tudo</Text>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <Text variant="body">
            Descubra nossa curadoria de produtos com as melhores ofertas do
            momento.
          </Text>
        </div>

        <ProductGrid>
          {datashopify.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductGrid>
      </Section>
    </Container>
  );
}
