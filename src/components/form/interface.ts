import { CSSProperties, ReactNode, HTMLProps } from 'react'

export interface FormContextProps {
    size?: 'tiny' | 'small' | 'medium' | 'large'
    disabled?: boolean
}

export interface FormProps {
    style?: CSSProperties;
    className?: string | string[];
    layout?: 'horizontal' | 'vertical' | 'inline'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    labelCol?: { span: number, offset: number }
    labelAlign?: 'right'
    wrapperCol?: { span: number, offset: number }
    requiredSymbol?: boolean
    disabled?: boolean
    onSubmit?: (value: any, e: Event) => void
    children?: ReactNode
}
