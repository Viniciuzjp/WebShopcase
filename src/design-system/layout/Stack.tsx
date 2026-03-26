import React from "react";

const spacingMap = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6",
  xl: "gap-8",
} as const;

const alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
} as const;

type StackProps = {
  children?: React.ReactNode;
  spacing?: keyof typeof spacingMap;
  align?: keyof typeof alignMap;
  className?: string;
};

export const Stack = ({
  children,
  spacing = "md",
  align = "start",
  className = "",
}: StackProps) => {
  return (
    <div
      className={[
        "flex flex-col",
        spacingMap[spacing],
        alignMap[align],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
};
