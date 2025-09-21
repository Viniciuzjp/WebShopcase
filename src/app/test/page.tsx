import Image from "next/image";
import { getProducts } from "@/lib/shopify";

export default async function ProductsPage() {
  const products = await getProducts(50);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Produtos da Loja</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((p: any) => (
          <div
            key={p.id}
            className="border rounded-lg shadow hover:shadow-lg transition-shadow duration-200 overflow-hidden"
          >
            {p.images[0]?.src && (
              <Image
                src={p.images[0].src}
                alt={p.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{p.description}</p>
              <ul className="text-gray-500 text-xs space-y-1">
                {p.variants?.edges?.map((v: any) => (
                  <li key={v.node.id}>
                    {v.node.title} - ${v.node.price}
                  </li>
                ))}
              </ul>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
