import { Container } from "@/design-system/layout/Container";
import { Section } from "@/design-system/layout/Section";
import { Skeleton } from "@/design-system/layout/Skeleton";
import { Stack } from "@/design-system/layout/Stack";
import { Grid } from "@av-digital/components";

export default function ProductsSkeleton() {
  return (
    <Container>
      <Section>
        <Grid>
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col gap-3">
              <Skeleton className="w-full h-60 rounded-xl animate-pulse" />
              <Skeleton className="h-4 w-7/10 animate-pulse" />
              <Skeleton className="h-4 w-5/10 animate-pulse" />
              <Stack align="center">
              <Skeleton className="h-10 w-5/10 rounded-lg animate-pulse" />
              </Stack>
            </div>
          ))}
        </Grid>
      </Section>
    </Container>
  );
}
