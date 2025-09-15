import CardProps from "./interface";

export default function Card({children, className}: CardProps) {
    return (
        <div className={`${className} bg-white rounded-md shadow-sm p-5`}>{children}</div>
    );
}