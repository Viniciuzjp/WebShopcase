import {
  Star,
  ShoppingCart,
  Heart,
  ArrowRight,
  TrendingUp,
  Truck,
  Shield,
  RefreshCw,
  Clock,
  Award,
  Users,
  Zap,
  Eye,
  ThumbsUp,
  Play,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Info() {
  return (
    <>
      <section className="container mx-auto ">
        <div className="lg:flex lg:items-center justify-between
         p-10 w-full space-y-8 space-x-5">
        <div className="flex items-center gap-4">
          <Truck className="w-10 h-10" />
          <div>
            <span className="text-md font-normal text-neutral-950">
              Envio para todo o Brasil
            </span>
            <span>
              <p className="text-md font-light text-neutral-950">
                Em Compras Acima de R$ 299
              </p>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Shield className="w-10 h-10" />
          <div>
            <span className="text-md font-normal text-neutral-950">
              Pagamento Seguro
            </span>
            <span>
              <p className="text-md font-light text-neutral-950">
                100% Seguro e Protegido
              </p>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <RefreshCw className="w-10 h-10" />
          <div>
            <span className="text-md font-normal text-neutral-950">
              Trocas e Devoluções
            </span>
            <span>
              <p className="text-md font-light text-neutral-950">
                30 dias para trocas e devoluções
              </p>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Clock className="w-10 h-10" />
          <div>
            <span className="text-md font-normal text-neutral-950">
              Atendimento ao Cliente
            </span>
            <span>
              <p className="text-md font-light text-neutral-950">
                Atendimento 24h
              </p>
            </span>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
