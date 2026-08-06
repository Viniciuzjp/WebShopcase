import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Products } from "@/ui/shopifyinterface/interface";
import { getProducts } from "@/lib/shopify";
import { Text } from "@/components/text/Text";
import { Flex, Grid, Section, Stack } from '@av-digital/components';
import ProductCard from "@/design-system/layout/ProductCard";

export default async function Releases() {
  const datashopify: Products[] = await getProducts(50);
  return (
    <>
      <Section spacing="lg">
        <Stack gap="lg">
        <Flex justify="between" className="mb-15">
          <Stack>
            <Text variant="bodyLg">Seleção Especial</Text>
            <Text variant="h2">Lançamentos em Destaque</Text>
            <Text variant="bodyLg">
              Fique de olho e observe de perto um catálogo diverso de novidades
            </Text>
          </Stack>
          <Link
            href="/products"
            className="group flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors mt-2"
          >
            <Text variant="bodyLg">Ver Tudo</Text>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Flex>

        <Grid gap="sm" classname="grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {datashopify.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
        </Stack>
      </Section>
    </>
  );
}
