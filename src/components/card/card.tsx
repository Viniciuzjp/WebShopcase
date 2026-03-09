import CardProps from "./interface";

export default function Card({children, className}: CardProps) {
    return (
        <div className={`${className} w-full bg-white shadow-sm p-2`}>{children}</div>
    );
}