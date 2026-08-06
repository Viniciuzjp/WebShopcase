import { Card } from "@av-digital/components";
import { Products } from "@/ui/shopifyinterface/interface";
import Link from "next/link";
import Image from "next/image";
import { Text } from "@/components/text/Text";
import { Stack } from "./Stack";

type Props = {
  product: Products;
};

export default function ProductCard({ product }: Props) {
  return (
    <Card className="group overflow-hidden bg-white border border-neutral-200 transition-colors hover:border-neutral-400">
      <Link
        href={`/produtos/${encodeURIComponent(product.id)}`}
        className="flex flex-col h-full"
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
          <Image
            src={product.images[0].src || "/placeholder.svg"}
            alt={product.images[0].altText || product.title}
            fill
            sizes="(max-width:768px) 50vw, (max-width:1280px) 33vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <Stack spacing="xs" align="start" className="px-4 py-5">
          <Text
            variant="productTitle"
            classname="line-clamp-2 text-[15px] font-normal leading-snug text-neutral-800"
          >
            {product.title}
          </Text>

          <Text
            variant="productPrice"
            classname="text-lg font-semibold tracking-tight text-neutral-900"
          >
            R$ {product.variants[0].price.amount}
          </Text>
        </Stack>
      </Link>
    </Card>
  );
}
