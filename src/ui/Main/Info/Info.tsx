import { ShieldCheck, Truck, Headset, BadgeCheck } from "lucide-react";

import { Container } from "@/design-system/layout/Container";
import { Section } from "@/design-system/layout/Section";
import { Stack } from "@/design-system/layout/Stack";
import { Text } from "@/components/text/Text";

export default function StoreBenefits() {
  return (
    <Section className="border-y border-neutral-200 bg-white">
      <Container>
        <div className="grid gap-10 py-16 md:grid-cols-2 xl:grid-cols-4">
          <Stack
            spacing="md"
            align="center"
            className="group transition-colors"
          >
            <div className="rounded-full border border-neutral-200 p-3 transition-colors group-hover:border-black">
              <ShieldCheck size={35} className="text-neutral-800" />
            </div>

            <Stack spacing="xs" align="center">
              <Text variant="h3">Compra Segura</Text>

              <Text variant="body" classname="leading-7 text-neutral-600 text-center">
                Seus dados são protegidos por plataformas de pagamento
                confiáveis para garantir uma compra tranquila.
              </Text>
            </Stack>
          </Stack>

          <Stack spacing="md" align="center" className="group">
            <div className="rounded-full border border-neutral-200 p-3 transition-colors group-hover:border-black">
              <Truck size={35} className="text-neutral-800" />
            </div>

            <Stack spacing="xs" align="center">
              <Text variant="h3">Entrega Nacional</Text>

              <Text variant="body" classname="leading-7 text-neutral-600 text-center">
                Enviamos para todo o Brasil com rastreamento para acompanhar
                cada etapa do seu pedido.
              </Text>
            </Stack>
          </Stack>

          <Stack spacing="md" align="center" className="group">
            <div className="rounded-full border border-neutral-200 p-3 transition-colors group-hover:border-black">
              <BadgeCheck size={35} className="text-neutral-800" />
            </div>

            <Stack spacing="xs" align="center">
              <Text variant="h3">Qualidade Garantida</Text>

              <Text variant="body" classname="leading-7 text-neutral-600 text-center">
                Selecionamos cuidadosamente cada produto para oferecer
                qualidade, conforto e excelente acabamento.
              </Text>
            </Stack>
          </Stack>

          <Stack spacing="md" align="center" className="group">
            <div className="rounded-full border border-neutral-200 p-3 transition-colors group-hover:border-black">
              <Headset size={35} className="text-neutral-800" />
            </div>

            <Stack spacing="xs" align="center">
              <Text variant="h3" classname="text-center">Atendimento Especializado</Text>

              <Text variant="body" classname="leading-7 text-neutral-600 text-center">
                Nossa equipe está pronta para ajudar antes, durante e após sua
                compra sempre que necessário.
              </Text>
            </Stack>
          </Stack>
        </div>
      </Container>
    </Section>
  );
}
