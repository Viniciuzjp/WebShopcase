"use client";

import { User } from "lucide-react";
import InputForm from "@/components/Input/InputForm";
import CustomizedBadges from "@/components/badge/Badge";
import { useCart } from "@/components/CartContext/CartContext";
import Image from "next/image";

export default function Header() {
  const { cartValue } = useCart();
  return (
    <header className="flex w-full justify-between border-b-2 border-neutral-200 gap-10 px-4 py-8 bg-[#ffffff]">
      <div className="flex items-center h-10 w-100">
        <h1 className="lg:text-3xl xl:text-3xl md:text-xl font-bold text-[##002d18]">
          <Image
            src="/images/image.png"
            alt="logo"
            width={200}
            height={20}
          />
        </h1>
      </div>
      <div className="flex items-center">
        <ul className="flex gap-8 text-black font-normal lg:text-xl xl:text-xl md:text-sm sm:text-sm max-md:hidden max-sm:hidden">
          <li>
            <a href="#">PÀGINA INICIAL</a>
          </li>
          <span>|</span>
          <li>
            <a href="#">SOBRE</a>
          </li>
          <span>|</span>
          <li>
            <a href="#">CONTATOS</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-4 md:hidden max-sm:hidden">
        <InputForm
          type="text"
          className="lg:w-110 xl:w-110 md:w-100"
          placeholder="Encontre Seu Produto"
          name="search"
          id="search"
        />
      </div>
      <div className="flex items-center text-2xl gap-4">
        <div onClick={() => {}} className="flex items-center">
          <CustomizedBadges cartValue={cartValue} />
          <div className="relative z-1 border border-white right-3 rounded-full h-5 w-5 bg-neutral-900">
            <span className="absolute font-bold text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              {cartValue}
            </span>
          </div>
        </div>
        <div className="bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center">
          <User className="text-neutral-600" />
        </div>
      </div>
    </header>
  );
}
