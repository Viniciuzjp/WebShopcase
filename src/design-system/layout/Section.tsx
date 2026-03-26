import { layoutProps } from "./interface/Layout";

export const Section = ({ children }: layoutProps) => {
  return <section className="py-12 space-y-5">{children}</section>;
};