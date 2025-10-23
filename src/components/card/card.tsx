import CardProps from "./interface";

export default function Card({children, className}: CardProps) {
    return (
        <div className={`${className} bg-white shadow-sm p-5`}>{children}</div>
    );
}