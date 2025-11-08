
import Card from "@/components/card/card";
import Image from "next/image";
import Button from "@/components/button/Button";
import Tag from "@/components/tag/tag";
import { Heart, Star} from "lucide-react";
import Link from "next/link";
import { Products } from "@/ui/shopifyinterface/interface";
import { getProducts } from "@/lib/shopify";

export default async function Releases() {
  const datashopify: Products[] = await getProducts(50);
  return (
    <>
      <section className="container mx-auto bg-neutral-50 space-y-5 xl:p-10 max-lg:p-5">
        <div className="flex flex-col items-center justify-center gap-4">
          <span className="text-3xl font-bold text-neutral-950">
            Lançamentos
          </span>
          <span className="text-md font-light text-neutral-950">
            Produtos em Lançamento que Podem te Interessar
          </span>
        </div>
          <div className="grid sm:grid-cols-1 lg:grid-cols-4 gap-2">
            {datashopify.slice(4, 18).map((produtos) => (
              <Card key={produtos.id} className="group cursor-pointer overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                <Link href={`/produtos/${encodeURIComponent(produtos.id)}`}>
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={produtos.images[0].src}
                    alt={produtos.images[0].altText || produtos.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {produtos.variants[0].availableForSale && (
                    <Tag className="absolute top-3 left-3 bg-black text-white">
                      {produtos.variants[0].availableForSale}
                    </Tag>
                  )}
                  <Button
                    variant="secondary"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-gray-100"
                  >
                    <Heart className="h-4 w-4 text-gray-700" />
                  </Button>
                </div>

                <div className="p-1 space-y-1">
                  <h4 className="font-medium text-black text-balance line-clamp-2">
                    {produtos.title}
                  </h4>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-black">
                        4
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      ({produtos.variants.length} Avaliações)
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold text-black">
                     R$ {produtos.variants[0].price.amount}
                    </span>
                  </div>

                  <Button type="button" className="w-full">
                    Comprar
                  </Button>
                </div>
                </Link>
              </Card>
            ))}
          </div>
      </section>
    </>
  );
}

// "use client";

// import { ProductProps } from "@/app/produtos/[id]/interface";
// import Card from "@/components/card/card";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Button from "@/components/button/Button";
// import Tag from "@/components/tag/tag";
// import { Heart, Star} from "lucide-react";
// import Link from "next/link";
// import { getProducts } from "@/lib/shopify";

// export default async function Releases() {
//   useEffect(() => {
//     axios
//       .get("https://webshopcase-api.onrender.com/api/produtos")
//       .then((res) => setProducts(res.data));
//   }, []);

//   const [products, setProducts] = useState<ProductProps[]>([]);

//   interface ImageType {
//   src: string;
//   altText: string;
//   width: number;
//   height: number;
// }

// interface Variant {
//   id: string;
//   title: string;
//   price: {
//     amount: string;
//     currencyCode: string;
//   };
//   availableForSale: boolean;
// }

// interface Product {
//   id: string;
//   handle: string;
//   title: string;
//   description: string;
//   images: ImageType[];
//   variants: Variant[];
// }

//   const produtos: Product[] = await getProducts();
//   return (
//     <>
//       <section className="container mx-auto bg-neutral-50 space-y-5 p-10">
//         <div className="flex flex-col items-center justify-center gap-4">
//           <span className="text-3xl font-bold text-neutral-950">
//             Lançamentos
//           </span>
//           <span className="text-md font-light text-neutral-950">
//             Produtos em Lançamento que Podem te Interessar
//           </span>
//         </div>
//         <Card>
//           <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
//             {produtos.slice(0, 3).map((produtos) => (
//               <Card key={produtos.id} className="group cursor-pointer overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
//                 <Link href={`/produtos/${produtos.id}`}>
//                 <div className="relative aspect-square overflow-hidden">
//                   <Image
//                     src={produtos.images[0].src}
//                     alt={produtos.images[0].altText || produtos.title}
//                     fill
//                     className="object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   {produtos.variants.length && (
//                     <Tag className="absolute top-3 left-3 bg-black text-white">
//                       {produtos.variants[0].title}
//                     </Tag>
//                   )}
//                   <Button
//                     variant="secondary"
//                     className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white hover:bg-gray-100"
//                   >
//                     <Heart className="h-4 w-4 text-gray-700" />
//                   </Button>
//                 </div>

//                 <div className="p-4 space-y-3">
//                   <h4 className="font-medium text-black text-balance line-clamp-2">
//                     {produtos.title}
//                   </h4>

//                   <div className="flex items-center gap-2">
//                     <div className="flex items-center gap-1">
//                       <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
//                       <span className="text-sm font-medium text-black">
//                         4
//                       </span>
//                     </div>
//                     <span className="text-sm text-gray-500">
//                       ({produtos.variants.length})
//                     </span>
//                   </div>

//                   <div className="flex items-center gap-2">
//                     <span className="text-lg font-semibold text-black">
//                       {produtos.variants[0].price.amount}
//                     </span>
//                     {produtos.variants[0].price && (
//                       <span className="text-sm text-gray-500 line-through">
//                         {produtos.variants[0].price.amount}
//                       </span>
//                     )}
//                   </div>

//                   <Button type="button" className="w-full">
//                     Comprar
//                   </Button>
//                 </div>
//                 </Link>
//               </Card>
//             ))}
//           </div>
//         </Card>
//       </section>
//     </>
//   );
// }

