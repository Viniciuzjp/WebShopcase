import { TextProps } from "./interface";
import { Typography } from "@/design-system/tokens/Typography";

export const Text = ({
  variant = "body",
  children,
  classname = "",
}: TextProps) => {
  return <h1 className={`${Typography[variant]} ${classname}`}>{children}</h1>;
};
