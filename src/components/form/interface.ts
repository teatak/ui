import { CSSProperties, ReactNode, HTMLProps } from 'react'

export interface FormContextProps {
    size?: 'tiny' | 'small' | 'medium' | 'large'
}

export interface FormProps {
    style?: CSSProperties;
    className?: string | string[];
    layout?: 'horizontal' | 'vertical'
    size?: 'tiny' | 'small' | 'medium' | 'large'
    labelCol: { span: number, offset: number }
    labelAlign: 'right'
    wrapperCol: { span: number, offset: number }
    requiredSymbol: boolean
    disabled: boolean
    onSubmit?: (e: Event) => void
    children?: ReactNode
}