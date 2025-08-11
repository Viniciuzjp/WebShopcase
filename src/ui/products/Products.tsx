'use client'

import Button from "@/components/button/Button";
import InputForm from "@/components/Input/InputForm";
import { Filter } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export default function Products() {
    const produtos = [
  {
    id: 1,
    nome: "Fone de Ouvido Bluetooth JBL Tune 510BT",
    preco: 249.90,
    avaliacao: 4.7,
    categoria: "Áudio",
    estoque: 35,
    descricao: "Fone de ouvido sem fio com até 40 horas de bateria e carregamento rápido.",
    imagem: "/imagens/jbl-tune-510bt.jpg"
  },
  {
    id: 2,
    nome: "Mouse Gamer Logitech G203 Lightsync",
    preco: 159.90,
    avaliacao: 4.8,
    categoria: "Periféricos",
    estoque: 50,
    descricao: "Mouse gamer RGB com sensor de alta precisão e 6 botões programáveis.",
    imagem: "/imagens/logitech-g203.jpg"
  },
  {
    id: 3,
    nome: "Teclado Mecânico Redragon Kumara K552",
    preco: 219.90,
    avaliacao: 4.6,
    categoria: "Periféricos",
    estoque: 20,
    descricao: "Teclado mecânico compacto com switches Outemu Blue e iluminação RGB.",
    imagem: "/imagens/redragon-kumara.jpg"
  },
  {
    id: 4,
    nome: "Caixa de Som Bluetooth Anker Soundcore 2",
    preco: 299.90,
    avaliacao: 4.9,
    categoria: "Áudio",
    estoque: 15,
    descricao: "Caixa de som portátil com som estéreo e resistência à água IPX7.",
    imagem: "/imagens/anker-soundcore2.jpg"
  },
  {
    id: 5,
    nome: "Monitor Gamer AOC 24G2 24” 144Hz",
    preco: 1299.90,
    avaliacao: 4.8,
    categoria: "Monitores",
    estoque: 10,
    descricao: "Monitor Full HD com taxa de atualização de 144Hz e painel IPS.",
    imagem: "/imagens/aoc-24g2.jpg"
  },
  {
    id: 6,
    nome: "Headset Gamer HyperX Cloud Stinger",
    preco: 299.90,
    avaliacao: 4.5,
    categoria: "Áudio",
    estoque: 25,
    descricao: "Headset leve e confortável com microfone giratório e drivers de 50mm.",
    imagem: "/imagens/hyperx-cloud-stinger.jpg"
  },
  {
    id: 7,
    nome: "Smartwatch Xiaomi Mi Band 8",
    preco: 349.90,
    avaliacao: 4.6,
    categoria: "Wearables",
    estoque: 40,
    descricao: "Pulseira inteligente com tela AMOLED, monitoramento de saúde e bateria de longa duração.",
    imagem: "/imagens/mi-band-8.jpg"
  },
  {
    id: 8,
    nome: "Carregador Portátil Anker PowerCore 10000mAh",
    preco: 199.90,
    avaliacao: 4.7,
    categoria: "Acessórios",
    estoque: 30,
    descricao: "Power bank compacto com carregamento rápido e proteção contra sobrecarga.",
    imagem: "/imagens/anker-powercore.jpg"
  }
];

const [categoria, setCategoria] = useState(produtos);
const [list] = useState(produtos);
const handleFilter =() => {   
    const FilterValue = [...list].sort((a, b) => b.preco - a.preco);
    setCategoria(FilterValue)
}
const handleFilterAll = () => {
    setCategoria(list)
}
console.log(categoria)
  return (
    <>
      <main className="flex max-md:flex-col gap-4">
        <section className="flex flex-col px-5 md:w-3/10 max-md:w-full gap-10">
          <span>Filtrar Por</span>
          <div className="flex flex-col gap-5">
            <ul>
              <li className="flex flex-col gap-5">
                <Button variant="primary" onClick={handleFilterAll}>Mostrar Todos</Button>
                <Button variant="secondary" onClick={handleFilter}>Preço: Maior para Menor</Button>
                <Button variant="secondary">Preço: Menor para maior</Button>
                <Button variant="secondary">Mais Vendidos</Button>
                <Button variant="secondary">Mais Avaliados</Button>
              </li>
            </ul>
            <InputForm
              className="w-full h-12 md:w-64"
              type="text"
              placeholder="Buscar..."
              name="search"
              id="search"
            />
          </div>
        </section>
        <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 sm:p-10 lg:grid-cols-2 xl:grid-cols-3 gap-15 w-full">
        {categoria.map((produto) => ( 
            <Link href={`/produtos/${produto.id}`}>
            <div key={produto.id} className="flex flex-col h-100 w-full">
                <div className="flex bg-neutral-100 justify-center items-center h-7/10">
                    <img src={produto.imagem} alt={produto.nome} className="w-full h-10/10" />
                </div>
                <div className="flex flex-col gap-2 h-3/10">
                    <span className="text-2xl font-normal">{produto.nome}</span>
                    <span className="text-lg text-gray-600 font-normal">{produto.categoria}</span>
                    <span className="text-lg font-normal ">R$ {produto.preco.toFixed(2)}</span>
                    <span className="text-lg font-normal text-gray-600">{produto.avaliacao}</span>
                </div>
            </div>
            </Link>
        ))}
        </section>
            
      </main>
    </>
  );
}
