"use client";

import Button from "@/components/button/Button";
import InputForm from "@/components/Input/InputForm";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import Tag from "@/components/tag/tag";
import { ProductProps } from "@/app/produtos/[id]/interface";

export default function Products() {
  const [categoria, setCategoria] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState<ProductProps[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3004/api/produtos")
      .then((res) => res.data)
      .then((data) => {
        setCategoria(data);
        setSearch(data);
      });
  }, []);

  function parsePrice(price: string) {
    const [min, max] = price.split("--").map((v) => parseFloat(v.trim()));
    return { min, max: max || min };
  }

  function formatBRL(price: number) {
    const exchangeRate = 5;
    return (price * exchangeRate).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const handleFilterMax = () => {
    const sorted = [...categoria].sort(
      (a, b) => parsePrice(b.sellPrice).max - parsePrice(a.sellPrice).max
    );
    setCategoria(sorted);
  };

  const handleFilterMin = () => {
    const sorted = [...categoria].sort(
      (a, b) => parsePrice(b.sellPrice).min - parsePrice(a.sellPrice).min
    );
    setCategoria(sorted);
  };

  const handleFilterAll = () => setCategoria(search);

const handleShowModal = () => {
  const modal = document.getElementById("modal");
  const products = document.getElementById("products");

  if (modal) {
    modal.classList.toggle("hidden");
  }

  if (products) {
    products.classList.toggle("xl:grid-cols-5");
  }
};

  return (
    <>
      <main>
        <div className="flex w-full h-20 items-center border-b border-neutral-200">
          <Button
            variant="primary"
            className="xl:w-1/10 m-5 top-5 left-1"
            onClick={handleShowModal}
          >
            FILTRAR
          </Button>
        </div>
        <div className="flex max-md:flex-col md:flex-col lg:flex-col xl:flex-row gap-4">
          <section id="modal" className="flex flex-col px-5 xl:w-3/10 gap-10">
            <div className="flex mt-15 flex-col gap-3">
              <span className="font-semibold text-3xl">FILTRAR PRODUTOS</span>
              <ul className="flex flex-col gap-5">
                <li className="flex flex-col gap-5">
                  <div className="flex justify-between items-center border-b-2 border-neutral-200 p-2">
                    <span className="font-normal text-xl">MOSTRAR TODOS</span>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        onClick={handleFilterAll}
                        className="peer absolute opacity-0 w-6 h-6"
                        name="filter"
                      />
                      <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-neutral-700">
                        <div className="w-1 h-1 rounded-full peer-checked:border-neutral-700 bg-gray-400 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                    </label>
                  </div>
                </li>
                <li className="flex flex-col gap-5">
                  <div className="flex justify-between items-center border-neutral-200 p-2">
                    <span className="font-normal text-xl">MAIOR PREÇO</span>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        onClick={handleFilterMax}
                        className="peer absolute opacity-0 w-6 h-6"
                        name="filter"
                      />
                      <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-neutral-700">
                        <div className="w-1 h-1 rounded-full peer-checked:border-neutral-700 bg-gray-400 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                    </label>
                  </div>
                </li>
                <li className="flex flex-col gap-5">
                  <div className="flex justify-between items-center border-neutral-200 p-2">
                    <span className="font-normal text-xl">MENOR PREÇO</span>

                    <label className="relative cursor-pointer">
                      <input
                        type="radio"
                        onClick={handleFilterMin}
                        className="peer absolute opacity-0 w-6 h-6"
                        name="filter"
                      />
                      <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center peer-checked:border-neutral-700">
                        <div className="w-1 h-1 rounded-full peer-checked:border-neutral-700 bg-gray-400 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                    </label>
                  </div>
                </li>
              </ul>
              <InputForm
                className="w-full h-12"
                type="text"
                placeholder="Buscar..."
                name="search"
                id="search"
              />
            </div>
          </section>

          <section id="products" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 sm:p-10 lg:grid-cols-2 xl:grid-cols-3 w-full gap-4">
            {categoria.map((produto) => {
              const { min, max } = parsePrice(produto.sellPrice);

              return (
                <Link href={`/produtos/${produto.pid}`} key={produto.pid}>
                  <div className="flex flex-col w-full p-2">
                    <div className="flex bg-neutral-100 justify-center items-center h-7/10">
                      <img
                        src={produto.productImage.split(",")[0]}
                        alt={produto.productNameEn}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-2 h-3/10 text-xl">
                      <span className="font-normal mt-3">{produto.productNameEn}</span>
                      <div className="flex justify-between">
                        <span className="font-medium">
                          {min === max
                            ? formatBRL(min)
                            : `${formatBRL(min)} - ${formatBRL(max)}`}
                        </span>
                        <span className="text-lg text-gray-600 font-normal">
                          <Tag variant="primary">{produto.listingCount}</Tag>
                        </span>
                      </div>
                      <span className="text-lg font-normal text-gray-600">
                        {produto.categoryName}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}
