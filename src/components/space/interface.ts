import { CSSProperties, ReactNode } from 'react'

export interface SpaceProps {
    style?: CSSProperties;
    className?: string | string[];
    itemClassName?: string | string[];
    direction?: 'horizontal' | 'vertical'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    align?: 'center' | 'start' | 'end' | 'baseline' | 'stretch'
    children?: ReactNode
}

