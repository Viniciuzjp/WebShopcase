
import Card from "@/components/card/card";
import Image from "next/image";
import Button from "@/components/button/Button";
import Tag from "@/components/tag/tag";
import { Zap } from "lucide-react";
import Link from "next/link";
import { getProducts } from "@/lib/shopify";
import { Products } from "@/ui/shopifyinterface/interface";


export default async function Offer() {
    const datashopify: Products[] = await getProducts(50);

  return (
    <>
      <section className="container mx-auto bg-red-50 space-y-5 xl:p-10 max-lg:p-5">
        <div className="flex items-center gap-4">
        <Zap className="w-10 h-10 text-red-600" />
        <div className="flex flex-col">
        <h1 className="text-3xl font-bold text-red-600">Ofertas Especiais</h1>
        <span className="text-md text-neutral-950">Encontre as Melhores Ofertas - Não Perca Essa</span>
        </div>
        </div>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
          {datashopify.slice(0, 6).map((produtos) => (
            <Card key={produtos.id} className="border-3 border-red-300 hover:border-red-600">
              <Link href={`/produtos/${encodeURIComponent(produtos.id)}`}>
              <div className="flex flex-col gap-3">
                <div className="relative">
                  <Image
                    src={produtos.images[0].src}
                    alt={produtos.images[0].altText || produtos.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Tag  className="absolute top-3 left-3 bg-red-600 text-white text-sm">
                    - R${parseInt(produtos.variants[0].price.amount) * 0.08} Desconto
                  </Tag>
                </div>
                <span className="font-medium">{produtos.title}</span>
                <div className="flex gap-3 items-center">
                  <span className="font-extrabold text-2xl text-red-600">
                    R${produtos.variants[0].price.amount}
                  </span>
                  <span className="font-light text-lg line-through text-neutral-400">
                    R$ {parseInt(produtos.variants[0].price.amount) + parseInt(produtos.variants[0].price.amount) * 0.08}
                  </span>
                </div>
                <div className="w-full h-1 bg-red-600 m-auto rounded-md"></div>
                <Button variant="primary">Comprar</Button>
              </div>
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
