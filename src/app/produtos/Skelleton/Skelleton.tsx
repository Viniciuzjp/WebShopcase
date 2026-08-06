import { Skeleton } from "@/design-system/layout/Skeleton";
import { Container } from "@av-digital/components";

export const PorductSkelleton = () => {
  return (
    <>
      <Container>
        <section className="flex xl:px-10 max-lg:flex-col w-full">
          <section className="flex lg:sticky xl:px-10 lg:top-15 lg:h-fit py-10 gap-2 lg:px-3 lg:w-7/10 ">
            <div className="flex gap-2 py-2 max-lg:w-2/10 max-xl:w-2/10 xl:w-1/6 flex-col">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="w-full h-30" />
                </div>
              ))}
            </div>
            <div className="w-full">
              {Array.from({ length: 1 }).map((_, i) => (
                <div key={i}>
                  <Skeleton className="w-full h-160" />
                </div>
              ))}
            </div>
          </section>
          <section className="flex lg:p-8 gap-10 flex-col lg:w-7/10 w-full py-5">
            <div className="space-y-2">
              <Skeleton className="w-9/10 h-10" />
              <Skeleton className="w-7/10 h-10" />
              <Skeleton className="w-4/10 h-10" />
            </div>
            <Skeleton className="w-3/10 h-10" />

            <Skeleton className="w-full h-15" />

            <div className="flex flex-col gap-2">
              <Skeleton className="full h-10" />
              <div
                className="text-sm font-medium text-neutral-700 space-y-4"

              />
            </div>
          </section>
        </section>
      </Container>
    </>
  );
};
