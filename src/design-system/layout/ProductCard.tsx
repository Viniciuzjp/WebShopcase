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
    <Card>
      <Link
        href={`/produtos/${encodeURIComponent(product.id)}`}
        className="group space-y-2"
      >
        <div className="relative w-full overflow-hidden bg-neutral-50 aspect-square">
          <Image
            src={product.images[0].src || "/placeholder.svg"}
            alt={product.images[0].altText || product.title}
            width={400}
            height={400}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <Stack align="start" spacing="lg">
          <Text variant="productTitle" classname="line-clamp-3">{product.title}</Text>

          <Stack>
            <Text variant="productPrice">R$ {product.variants[0].price.amount}</Text>
          </Stack>
        </Stack>
      </Link>
    </Card>

  );
}
