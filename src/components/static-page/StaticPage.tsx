import { Container, Section, Stack } from "@av-digital/components";
import { Text } from "@/components/text/Text";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function StaticPage({ title, subtitle, children }: Props) {
  return (
    <Container size="xl">
      <Section>
        <Stack gap="lg" classname="py-12 max-w-3xl mx-auto">
          <Stack gap="sm">
            <Text variant="h1">{title}</Text>
            {subtitle && (
              <Text variant="bodyLg" classname="text-neutral-600">
                {subtitle}
              </Text>
            )}
          </Stack>

          <Stack gap="md" classname="text-neutral-700 [&_a]:underline">
            {children}
          </Stack>
        </Stack>
      </Section>
    </Container>
  );
}
