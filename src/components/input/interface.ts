import { CSSProperties, ReactNode, InputHTMLAttributes } from 'react'

export interface InputProps extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'onChange' | 'prefix' | 'className' | 'size' | 'height' | 'maxLength'
> {
    style?: CSSProperties
    className?: string | string[]
    type?: 'text' | 'filled' | 'outlined'
    value?: string
    defaultValue?: string
    placeholder?: string
    disabled?: boolean
    size?: 'tiny' | 'small' | 'medium' | 'large'
    startIcon?: ReactNode
    endIcon?: ReactNode
    htmlType?: 'text' | 'password'
    onChange?: (value: string, e: React.ChangeEvent<HTMLInputElement>) => void
}