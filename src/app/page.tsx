import Cat from "@/ui/Main/Cat/Cat";
import Hero from "@/ui/Main/Hero/Hero";
import Info from "@/ui/Main/Info/Info";
import Offer from "@/ui/Main/Offer/Offers";
import ProductsSkeleton from "@/design-system/layout/ProductsSkeleton";
import Releases from "@/ui/Main/Release/Release";
import Send from "@/ui/Main/Send/Send";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-neutral-50">
        <Hero />
        <Info />
        <Suspense fallback={<ProductsSkeleton />}>
          <Offer />
        </Suspense>
        <Cat />
        <Suspense fallback={<ProductsSkeleton />}>
          <Releases />
        </Suspense>
        <Send />
      </main>
    </>
  );
}
