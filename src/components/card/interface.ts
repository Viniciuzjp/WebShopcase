interface CardProps {
  children?: React.ReactNode;
  className?: string;
  spacing?: keyof typeof SpacingMap;
}

export const SpacingMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;

export default CardProps;
