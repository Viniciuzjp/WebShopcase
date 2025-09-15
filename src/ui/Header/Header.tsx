"use client";

import { Heart, Search, ShoppingCart, User } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container mx-auto space-x-3 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold"><Link href="/">WebShopcase</Link></h1>
            </div>

            <nav className="hidden lg:flex justify-between items-center space-x-8">
              <a href="/categories" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Categorias
              </a>
              <a href="/products" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Produtos
              </a>
              <a href="/Cart" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Carrinho
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/wishlist" className="hover:bg-gray-100">
                <Heart className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="/Cart" className="hover:bg-gray-100">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="/login" className="hover:bg-gray-100">
                <User className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="/search" className="hover:bg-gray-100">
                <Search className="h-5 w-5 text-gray-700" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
