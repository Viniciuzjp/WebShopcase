import { useCart } from "@/app/Cart/ui/CartContext/Context";
import Button from "@/components/button/Button";
import Card from "@/components/card/card";
import { Truck } from "lucide-react";
import { Text } from "@/components/text/Text";
import { Flex, Stack } from "@av-digital/components";

export default function Shipping() {
  const { cart } = useCart();
  if (cart.length === 0) {
    return <></>;
  }
  return (
    <>
      <Card className="flex flex-col gap-3 max-lg:mt-5">
        <Flex>
          <Truck />
          <Text variant="h3">Opções de Envio</Text>
        </Flex>

        <Flex>
          <Button
            className="flex justify-between items-center w-full hover:bg-neutral-50 h-15 rounded-md"
            variant="secondary"
          >
            <Flex>
              <input type="radio" />
              <Flex direction="column" align="start" gap="xs">
                <Text variant="body">Entrega</Text>
                <Text variant="label">5-7 Dias Úteis</Text>
              </Flex>
            </Flex>
            <Text variant="body">Calculado no checkout</Text>
          </Button>
        </Flex>
      </Card>
    </>
  );
}
