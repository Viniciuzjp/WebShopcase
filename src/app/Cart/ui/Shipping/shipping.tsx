import { useCart } from "@/CartContext/Context";
import Button from "@/components/button/Button";
import Card from "@/components/card/card";
import { Truck } from "lucide-react";

export default function Shipping() {
  const { cart } = useCart();
  return (
    <>
      <section className="m-5
      ">
        <Card className="flex flex-col gap-3">
          <div className="flex w-full gap-5">
            <Truck />
            <span className="text-lg">Opções de Envio</span>
          </div>

          <div className="flex w-full">
            <Button
              className="flex justify-between items-center w-full hover:bg-neutral-50 h-15 rounded-md"
              variant="secondary"
            >
              <div className="flex gap-3">
                <input type="radio" />
                <div className="flex items-start flex-col">
                  <span className="font-semibold">Entrega</span>
                  <span>5-7 Dias Úteis</span>
                </div>
              </div>
              <span>R$ -----</span>
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}
