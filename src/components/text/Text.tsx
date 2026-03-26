import { TextProps } from "./interface";
import { Typography } from "@/design-system/tokens/Typography";

export const Text = ({
  variant = "body",
  children,
  classname = "",
}: TextProps) => {
  const variantMap: Record<string, string> = {
    h1: Typography.h1,
    h2: Typography.h2,
    body: Typography.body,
    productTitle: Typography.productTitle,
    productPrice: Typography.productPrice,
    bodySm: Typography.bodySm,
    label: Typography.label,
    caption: Typography.caption,
    badge: Typography.badge,
    button: Typography.button,
  };


  const variantValidate = (variant: string): string => {
    return variantMap[variant] ?? "p";
  };

  return <h1 className={`${variantValidate(variant)} ${classname}`}>{children}</h1>;
};
