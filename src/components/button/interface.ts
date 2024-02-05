import { CSSProperties, ReactNode } from 'react'

export interface ButtonProps {
    style?: CSSProperties;
    className?: string | string[];
    type?: 'standard' | 'filled' | 'outlined'
    long?: boolean
    rounded?: boolean
    circle?: boolean
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    htmlType?: 'submit' | 'button' | 'reset'
    disabled?: boolean
    onClick?: (e: Event) => void
    children?: ReactNode
}