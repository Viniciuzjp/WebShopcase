"use client";
import Button from "@/components/button/Button";
import Input from "@mui/material/Input";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Products } from "@/ui/shopifyinterface/interface";
import { Check } from "lucide-react";
import { Text } from "@/components/text/Text";
import ProductCard from "@/design-system/layout/ProductCard";
import { Stack } from "@/design-system/layout/Stack";
import { ProductGrid } from "@/design-system/layout/Productgrid";
import { Container } from "@/design-system/layout/Container";
import { getProducts } from "@/lib/shopify";
import { Skeleton } from "@/design-system/layout/Skeleton";
import { Section } from "@av-digital/components";

export default function Products() {
  const [produtos, setProdutos] = useState<Products[]>([]);
  const [categoria, setCategoria] = useState<Products[]>([]);
  const [search, setSearch] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const dataShopify: Products[] = await getProducts(50);
        setProdutos(dataShopify);
        setCategoria(dataShopify);
        setSearch(dataShopify);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const parsePrice = (price: string) => {
    if (price.includes("-")) {
      const [min, max] = price.split("-");
      return { min: Number(min), max: Number(max) };
    }
    const value = Number(price);
    return { min: value, max: value };
  };

  const handleFilterAll = () => {
    setCategoria(search);
  };

  const handleFilterMax = () => {
    const sorted = [...categoria].sort(
      (a, b) =>
        parsePrice(b.variants[0].price.amount).max -
        parsePrice(a.variants[0].price.amount).max,
    );
    setCategoria(sorted);
  };

  const handleFilterMin = () => {
    const sorted = [...categoria].sort(
      (a, b) =>
        parsePrice(a.variants[0].price.amount).min -
        parsePrice(b.variants[0].price.amount).min,
    );
    setCategoria(sorted);
  };

  const handleShowModal = () => {
    const modal = document.getElementById("modal");
    const products = document.getElementById("products");

    modal?.classList.toggle("hidden");
    products?.classList.toggle("xl:grid-cols-5");
  };

  const [filter, setFilter] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <Container>
      <Section>
        <Button
          variant="primary"
          className="xl:w-1/10 m-5 top-5 left-1"
          onClick={handleShowModal}
        >
          FILTRAR
        </Button>

        <div className="flex flex-col gap-4">
          <section id="modal" className="flex gap-10">
            <div className="flex w-full mt-15 flex-col  gap-5">
              <Text variant="h1">FILTROS</Text>
              <ul className="flex max-lg:flex-col gap-5">
                <Input
                  className="w-5/10 max-lg:w-full h-12"
                  type="text"
                  placeholder="Buscar..."
                  onChange={handleSearch}
                  name="search"
                  id="search"
                />
                {["MOSTRAR TODOS", "MAIOR PREÇO", "MENOR PREÇO"].map(
                  (label, index) => {
                    const onClick =
                      index === 0
                        ? handleFilterAll
                        : index === 1
                          ? handleFilterMax
                          : handleFilterMin;
                    return (
                      <Stack key={index}>
                        <div className="flex items-center gap-3 cursor-pointer">
                          <div>
                            <input
                              type="radio"
                              name="options"
                              onClick={onClick}
                              id={label}
                              className="peer hidden"
                            />
                          </div>
                          <label
                            htmlFor={label}
                            className="font-semibold text-gray-700 cursor-pointer"
                          >
                            {label}
                          </label>
                          <Text variant="label">({categoria.length})</Text>
                        </div>
                      </Stack>
                    );
                  },
                )}
              </ul>
            </div>
          </section>

          <ProductGrid id="products">
            {loading ? (
              <>
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <Skeleton className="w-full h-60 rounded-xl" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                  </div>
                ))}
              </>
            ) : (
              categoria
                .filter((product) =>
                  product.title.toLowerCase().includes(filter.toLowerCase()),
                )
                .map((produto) => (
                  <ProductCard key={produto.id} product={produto} />
                ))
            )}
          </ProductGrid>
        </div>
      </Section>
    </Container>
  );
}
