import Button from "@/components/button/Button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <main className="min-h-screen">
        <section className="lg:flex lg:items-center w-full bg-black p-10 space-y-5 space-x-5">
          <div className="container mx-auto flex flex-col gap-2">
            <h1 className="text-3xl font-extralight text-white">
              Descubra Produtos Premium
            </h1>
            <span className="text-md font-semilight text-neutral-400">
              Produtos de qualidade excepcional, desenvolvidos com tecnologia de
              ponta.
            </span>

            <div className="flex gap-2">
              <Link href="/products">
                <Button className="mt-5 w-full" type="button">
                  Explorar
                </Button>
              </Link>
            </div>
          </div>
          <div className="container mx-auto flex">
            <Image
              src="/images/new-products-showcase-black-and-white.jpg"
              width={1000}
              height={400}
              alt="image"
            />
          </div>
        </section>
      </main>
    </>
  );
}
