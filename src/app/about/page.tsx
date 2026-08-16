import StaticPage from "@/components/static-page/StaticPage";
import { Text } from "@/components/text/Text";

export const metadata = {
  title: "Sobre Nós | Hygg",
};

export default function AboutPage() {
  return (
    <StaticPage title="Sobre a Hygg">
      <Text variant="body">
        A Hygg nasceu com um objetivo simples: tornar a compra online mais
        fácil, rápida e agradável. Selecionamos produtos com cuidado e
        cuidamos de cada etapa da compra, do carrinho até a entrega na sua
        porta.
      </Text>
      <Text variant="body">
        Somos uma loja em crescimento, e estamos sempre ajustando nosso
        catálogo e nossos processos para oferecer a melhor experiência
        possível para quem compra com a gente.
      </Text>
    </StaticPage>
  );
}
