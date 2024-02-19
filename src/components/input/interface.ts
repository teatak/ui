import { CSSProperties, ReactNode, HTMLProps } from 'react'

export interface InputProps {
    style?: CSSProperties
    className?: string | string[]
    value?: string
    defaultValue?: string
    disabled?: boolean
    size?: 'tiny' | 'small' | 'medium' | 'large'
    startIcon?: ReactNode,
    endIcon?: ReactNode,
    htmlType?: 'input' | 'password'
}