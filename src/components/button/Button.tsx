import ButtonProps from "./interface";
import style from "./style.module.scss";

export default function Button({children, className, onClick, variant, disabled, ...rest}: ButtonProps) {
    const variantValidate = variant || 'primary';
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            data-variant={variantValidate}
            className={`${className} ${style.btn} ${style.root} font-normal rounded-2xl disabled:opacity-40 disabled:cursor-not-allowed`}
            {...rest}
        >
            {children}
        </button>
    );
}