import { layoutProps } from "./interface/Layout";

export const Container = ({ children, className }: layoutProps) => {
  return <div className={`${className} max-w-7xl mx-auto px-6`}>{children}</div>;
};
