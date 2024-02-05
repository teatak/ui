import { CSSProperties, ReactNode } from 'react'

export interface ButtonProps {
    style?: CSSProperties;
    className?: string | string[];
    type?: 'filled' | 'outlined' | 'standard'
    long?: boolean
    rounded?: boolean
    circle?: boolean
    color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    htmlType?: 'submit' | 'button' | 'reset'
    children?: ReactNode
}