import { CSSProperties, ReactNode, HTMLProps } from 'react'

export interface ButtonProps {
    style?: CSSProperties;
    className?: string | string[]
    type?: 'text' | 'filled' | 'outlined'
    long?: boolean
    shape?: 'circle' | 'round' | 'square'
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    htmlType?: 'submit' | 'button' | 'reset'
    loading?: boolean
    loadingPosition?: 'start' | 'center' | 'end'
    disabled?: boolean
    href?: string
    onClick?: (e: Event) => void
    startIcon?: ReactNode
    endIcon?: ReactNode
    children?: ReactNode
}