import { layoutProps } from "./interface/Layout";

export const ProductGrid = ({ children }: layoutProps) => {
  return <div className="grid gap-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">{children}</div>;
};
