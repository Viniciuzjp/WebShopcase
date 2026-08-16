"use client";

import { useState } from "react";
import Button from "@/components/button/Button";
import InputForm from "@/components/Input/InputForm";
import { Container, Section, Stack } from "@av-digital/components";
import { Text } from "@/components/text/Text";

type Status = "idle" | "loading" | "success" | "error";

export default function Send() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error || "Não foi possível concluir a inscrição.");
        return;
      }

      setStatus("success");
      setMessage(
        data.alreadySubscribed
          ? "Esse e-mail já está cadastrado."
          : "Inscrição confirmada! Fique de olho na sua caixa de entrada."
      );
      setEmail("");
    } catch (err) {
      console.error("Erro ao cadastrar na newsletter:", err);
      setStatus("error");
      setMessage("Não foi possível concluir a inscrição. Tente novamente.");
    }
  }

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

          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 sm:flex-row"
          >
            <InputForm
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={status === "loading"}
            />

            <Button
              type="submit"
              className="sm:w-auto px-8 whitespace-nowrap"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando..." : "Inscrever-se"}
            </Button>
          </form>

          {message && (
            <Text
              variant="bodySm"
              classname={status === "error" ? "text-red-400" : "text-neutral-300"}
            >
              {message}
            </Text>
          )}

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