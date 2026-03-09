import ButtonProps from "./interface";
import style from "./style.module.scss";

export default function Button({children, className, onClick, variant}: ButtonProps) {
    const variantValidate = variant || 'primary';
    return (
        <button onClick={onClick}  data-variant={variantValidate} className={`${className} ${style.btn} ${style.root} font-normal rounded-2xl`}>
            {children}
        </button>
    );
}