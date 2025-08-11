interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    name?: string
    id?: string
    type?: string
    placeholder?: string
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default InputProps