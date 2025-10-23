"use client";

import { Heart, Search, ShoppingCart, User, UserPlus } from "lucide-react";
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
              <Link href="/products" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
                Produtos
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Link href="/wishlist" className="hidden">
                <Heart className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="/Cart" className="">
                <ShoppingCart className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="/login" className="">
                <User className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="/register" className="">
                <UserPlus className="h-5 w-5 text-gray-700" />
              </Link>
              <Link href="/search" className="">
                <Search className="h-5 w-5 text-gray-700" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
