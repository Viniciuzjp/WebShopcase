import { useCart } from "@/app/Cart/ui/CartContext/Context";
import Button from "@/components/button/Button";
import Card from "@/components/card/card";
import { Truck } from "lucide-react";
import { Text } from "@/components/text/Text";
import { Flex } from "@av-digital/components";

export default function Shipping() {
  const { cart } = useCart();
  if (cart.length === 0) {
    return <></>;
  }
  return (
    <Card className="flex flex-col gap-3 max-xl:mt-5">
      <Flex align="center" gap="sm">
        <Truck size={20} className="shrink-0" />
        <Text variant="h3">Opções de Envio</Text>
      </Flex>

      <Button
        className="flex min-h-15 w-full flex-wrap items-center justify-between gap-2 rounded-md px-4 py-3 text-left hover:bg-neutral-50"
        variant="secondary"
      >
        <Flex align="center" gap="sm">
          <input
            type="radio"
            name="shipping"
            defaultChecked
            className="shrink-0 accent-black"
          />
          <Flex direction="column" align="start" gap="xs">
            <Text variant="body">Entrega</Text>
            <Text variant="label">5-7 Dias Úteis</Text>
          </Flex>
        </Flex>
        <Text variant="body" classname="whitespace-nowrap text-neutral-500">
          Calculado no checkout
        </Text>
      </Button>
    </Card>
  );
}
