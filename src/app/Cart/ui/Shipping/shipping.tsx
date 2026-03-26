import { useCart } from "@/app/Cart/ui/CartContext/Context";
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
            <h2 className="text-lg">Opções de Envio</h2>
          </div>

          <div className="flex w-full">
            <Button
              className="flex justify-between items-center w-full hover:bg-neutral-50 h-15 rounded-md"
              variant="secondary"
            >
              <div className="flex gap-3">
                <input type="radio" />
                <div className="flex items-start flex-col">
                  <h2 className="font-semibold">Entrega</h2>
                  <p>5-7 Dias Úteis</p>
                </div>
              </div>
              <span>R$ ----- </span>
            </Button>
          </div>
        </Card>
      </section>
    </>
  );
}
