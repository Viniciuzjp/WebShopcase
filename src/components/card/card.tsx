import CardProps from "./interface";
import { SpacingMap } from "./interface";

export default function Card({ children, className, spacing = "md" }: CardProps) {
  return (
    <div
      className={`${className} ${SpacingMap[spacing]} bg-white shadow-sm p-4 flex flex-col`}
    >
      {children}
    </div>
  );
}
