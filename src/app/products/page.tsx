"use client";
import Button from "@/components/button/Button";
import InputForm from "@/components/Input/InputForm";
import Link from "next/link";
import Image from "next/image";
import { use, useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import type { Products } from "@/ui/shopifyinterface/interface";
import { Check } from "lucide-react";

function ProductCard({
  produto,

}: {
  produto: Products;
}) {

  return (
    <Link href={`/produtos/${encodeURIComponent(produto.id)}`}>
      <div key={produto.id} className="flex flex-col w-full p-2">
        <div className="flex bg-neutral-100 justify-center items-center h-7/10 relative">
          <Image
            src={produto.images[0].src.split(",")[0] || "/placeholder.svg"}
            alt={produto.title}
            width={400}
            height={400}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-2 h-3/10 text-lg text-neutral-700">
          <span className="font-normal mt-3">{produto.title}</span>
          <div className="flex justify-between">
            <Stack spacing={1}>
              <Rating
                name="half-rating-read"
                size="small"
                defaultValue={produto.variants[0].availableForSale ? 5 : 0}
                precision={0.5}
                readOnly
              />
            </Stack>
            <span>{produto.variants[0].availableForSale ? "Disponível" : "Indisponível"}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semilibold text-neutral-900">
              {produto.variants[0].price.amount}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Products() {
  const [produtos, setProdutos] = useState<Products[]>([]);
  const [categoria, setCategoria] = useState<Products[]>([]);
  const [search, setSearch] = useState<Products[]>([]);

useEffect(() => {
  fetch("/api/products")
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setProdutos(data);
        setCategoria(data);
        setSearch(data);
      } else {
        console.error("API retornou algo diferente de um array:", data);
        setProdutos([]);
        setCategoria([]);
        setSearch([]);
      }
    })
    .catch((err) => console.error(err));
}, []);


  const parsePrice = (price: string) => {
    const [min, max] = price.split("-");
    return { min: Number(min), max: Number(max) };
  };

  const handleFilterMax = () => {
    const sorted = [...categoria].sort(
      (a, b) => parsePrice(b.variants[0].price.amount).max - parsePrice(a.variants[0].price.amount).max
    );
    setCategoria(sorted);
  };

  const handleFilterMin = () => {
    const sorted = [...categoria].sort(
      (a, b) => parsePrice(a.variants[0].price.amount).min - parsePrice(b.variants[0].price.amount).min
    );
    setCategoria(sorted);
  };
console.log(categoria)
  const handleFilterAll = () => setCategoria(search);

  const handleShowModal = () => {
    const modal = document.getElementById("modal");
    const products = document.getElementById("products");

    modal?.classList.toggle("hidden");
    products?.classList.toggle("xl:grid-cols-5");
  };

  const [filter, setFilter] = useState("")

  const handleSearch = (e:any) => {
      setFilter(e.target.value)
  }

  return (
    <main className="overflow-hidden xl:px-15 lg:px-15">
      <div className="flex w-[90%] flex-col justify-between max-md:flex-col md:flex-col lg:flex-col xl:flex-row">
        <Button
          variant="primary"
          className="xl:w-1/10 m-5 top-5 left-1"
          onClick={handleShowModal}
        >
          FILTRAR
        </Button>
      </div>
      <div className="ml-5">
        <Breadcrumbs
          linkfirst="Home"
          linksecond="Produtos"
          linkthird="Power-Banks"
          hreffirst="/"
          hrefsecond="/Produtos"
          hrefthird="/Power-Banks"
          separator="›"
        />
      </div>
      <div className="flex max-md:flex-col md:flex-col lg:flex-col xl:flex-row gap-4">
        <section id="modal" className="flex flex-col px-5 xl:w-3/11 gap-10">
          <div className="flex mt-15 flex-col gap-5">
            <span className="font-semibold text-2xl">FILTROS</span>
            <ul className="flex flex-col gap-5">
              <InputForm
              className="w-full h-12"
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
                    <li key={index} className="flex flex-col gap-5">
                      <div className="flex items-center gap-3 cursor-pointer">
                        <div>
                        <input
                          type="radio"
                          name="options"
                          onClick={onClick}
                          id={label}
                          className="peer hidden"
                        />
                        <Check className="relative hidden peer-checked:flex peer-checked:left-8.5 peer-checked:h-4" />
                        </div>
                        <span
                          className="w-5 h-5 flex items-center justify-center border-2 border-gray-400 rounded-md 
               peer-checked:bg-neutral-900 peer-checked:border-neutral-900"
                        >
                          <svg
                            className="w-3 h-3 text-white hidden peer-checked:block"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            
                          </svg>
                        </span>
                        <label
                          htmlFor={label}
                          className="font-semibold text-gray-700 cursor-pointer"
                        >
                          {label}
                        </label>
                        <span className="font-light text-neutral-500">({categoria.length})</span>
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </div>
        </section>

        <section
          id="products"
          className="grid grid-cols-1 max-sm:grid-cols-2 max-md:grid-cols-2 sm:p-10 lg:grid-cols-2 xl:grid-cols-3 w-full gap-4"
        >
          {categoria.filter((product) => 
          product.title.toLowerCase().includes(filter.toLowerCase())).map((produto) => (
            <ProductCard
              key={produto.id}
              produto={produto}

            />
          ))}
        </section>
      </div>
    </main>
  );
}
