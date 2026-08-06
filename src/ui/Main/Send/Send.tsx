import Button from "@/components/button/Button";
import InputForm from "@/components/Input/InputForm";
import { Container, Section, Stack } from "@av-digital/components";
import { Text } from "@/components/text/Text";

export default function Send() {
  return (
    <Section classname="bg-neutral-950 border-t border-neutral-800">
      <Container classname="py-20">
        <Stack
          spacing="lg"
          align="center"
          className="mx-auto max-w-2xl text-center"
        >
          <Text
            variant="label"
          >
            Newsletter
          </Text>

          <Text
            variant="h2"
            classname="text-white"
          >
            Receba nossas novidades
          </Text>

          <Text
            variant="body"
            classname="max-w-xl text-neutral-400"
          >
            Cadastre seu e-mail para receber lançamentos, promoções exclusivas e
            novidades da coleção.
          </Text>

          <form className="flex w-full flex-col gap-3 sm:flex-row">
            <InputForm
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1"
            />

            <Button
              type="submit"
              className="sm:w-auto px-8 whitespace-nowrap"
            >
              Inscrever-se
            </Button>
          </form>

          <Text
            variant="label"
            classname="text-sm text-neutral-500"
          >
            Ao se cadastrar, você concorda em receber comunicações da loja. Você
            pode cancelar sua inscrição a qualquer momento.
          </Text>
        </Stack>
      </Container>
    </Section>
  );
}