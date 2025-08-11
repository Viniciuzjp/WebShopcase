interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode
    className?: string
    variant?: 'primary' | 'secondary'
    onClick?: () => void
}
export default ButtonProps