import TagProps from "./interface";
import style from "./style.module.scss";

export default function Tag({ children, variant, className }: TagProps) {
    const dataValidate = variant || 'primary';
    return (
        <span data-variant={dataValidate} className={`${className} ${style.root} ${style.tag}`}>
            {children}
        </span>
    );
}