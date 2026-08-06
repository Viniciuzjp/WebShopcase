import { Typography } from "@/design-system/tokens/Typography"

export type TextProps = {
    variant?: keyof typeof Typography
    children?: React.ReactNode
    classname?: string 
}