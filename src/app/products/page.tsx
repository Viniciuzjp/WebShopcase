"use client";

import { useEffect, useMemo, useState } from "react";

import Button from "@/components/button/Button";
import InputForm from "@/components/Input/InputForm";

import { Container } from "@/design-system/layout/Container";
import { ProductGrid } from "@/design-system/layout/Productgrid";
import ProductCard from "@/design-system/layout/ProductCard";
import { Skeleton } from "@/design-system/layout/Skeleton";
import { Stack } from "@/design-system/layout/Stack";

import { Text } from "@/components/text/Text";
import { Section } from "@av-digital/components";

import { getProducts } from "@/lib/shopify";
import type { Products } from "@/ui/shopifyinterface/interface";

type SortOption = "featured" | "price-asc" | "price-desc";

export default function Products() {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortOption>("featured");

  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts(50);
        setProducts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let list = [...products];

    if (search.trim()) {
      list = list.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    switch (sort) {
      case "price-asc":
        list.sort(
          (a, b) =>
            Number(a.variants[0].price.amount) -
            Number(b.variants[0].price.amount),
        );
        break;

      case "price-desc":
        list.sort(
          (a, b) =>
            Number(b.variants[0].price.amount) -
            Number(a.variants[0].price.amount),
        );
        break;
    }

    return list;
  }, [products, search, sort]);

  return (
    <Container>
      <Section>
        <Stack spacing="xl">

          <div className="flex w-full items-end justify-between border-b border-neutral-200 pb-6">
            <Stack spacing="xs">
              <Text variant="h1">Produtos</Text>

              <Text variant="body" classname="text-neutral-500">
                {filteredProducts.length} produtos
              </Text>
            </Stack>

            <Button
              className="xl:hidden"
              onClick={() => setFiltersOpen(!filtersOpen)}
            >
              Filtros
            </Button>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-12">

            <aside
              className={`
                ${filtersOpen ? "block" : "hidden"}
                xl:block
              `}
            >
              <Stack spacing="lg" className="sticky top-28">
                <Text variant="h3">Filtros</Text>

                <Stack spacing="xs">
                  <Text variant="label">Buscar</Text>

                  <InputForm
                    type="text"
                    placeholder="Nome do produto"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </Stack>

                <hr className="border-neutral-200" />

                <Stack spacing="sm">
                  <Text variant="label">Ordenar</Text>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={sort === "featured"}
                      onChange={() => setSort("featured")}
                    />

                    <Text variant="body">Relevância</Text>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={sort === "price-asc"}
                      onChange={() => setSort("price-asc")}
                    />

                    <Text variant="body">Menor preço</Text>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      checked={sort === "price-desc"}
                      onChange={() => setSort("price-desc")}
                    />

                    <Text variant="body">Maior preço</Text>
                  </label>
                </Stack>

                <Button
                  variant="secondary"
                  onClick={() => {
                    setSearch("");
                    setSort("featured");
                  }}
                >
                  Limpar filtros
                </Button>
              </Stack>
            </aside>

            <ProductGrid className="gap-x-8 gap-y-14">
              {loading
                ? Array.from({ length: 8 }).map((_, index) => (
                    <Stack key={index} spacing="sm">
                      <Skeleton className="aspect-[4/5]" />

                      <Skeleton className="h-5 w-3/4" />

                      <Skeleton className="h-5 w-24" />
                    </Stack>
                  ))
                : filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
            </ProductGrid>
          </div>
        </Stack>
      </Section>
    </Container>
  );
}
