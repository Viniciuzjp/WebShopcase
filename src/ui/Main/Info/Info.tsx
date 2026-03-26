import {
  Truck,
  Shield,
  RefreshCw,
  Clock,
} from "lucide-react";
import { Text } from "@/components/text/Text";
import { Stack } from "@/design-system/layout/Stack";
import { Container } from "@/design-system/layout/Container";
import { Section } from "@/design-system/layout/Section";

export default function Info() {
  return (
    <>
      <Container >
        <Section>
        <Stack align="center">
          <Truck className="w-10 h-10" />
          <div>
            <Text variant="body">
              Envio para todo o Brasil
            </Text>
              <Text variant="bodySm">
                Em Compras Acima de R$ 299
              </Text>
          </div>
        </Stack>

        <Stack align="center">
          <Shield className="w-10 h-10" />
          <div>
            <Text variant="body">
              Pagamento Seguro
            </Text>
              <Text variant="bodySm">
                100% Seguro e Protegido
              </Text>
          </div>
        </Stack>

        <Stack align="center">
          <RefreshCw className="w-10 h-10" />
          <div>
            <Text variant="body">
              Trocas e Devoluções
            </Text>
              <Text variant="bodySm">
                30 dias para trocas e devoluções
              </Text>
          </div>
        </Stack>

        <Stack align="center">
          <Clock className="w-10 h-10" />
          <div>
            <Text variant="body">
              Atendimento ao Cliente
            </Text>
              <Text variant="bodySm">
                Atendimento 24h
              </Text>
          </div>
        </Stack>
        </Section>
      </Container>
    </>
  );
}
