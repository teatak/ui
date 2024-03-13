import { CSSProperties, ReactNode, HTMLProps } from 'react'
import { SizeType } from '../types'

export interface FormContextProps {
    size?: SizeType
    disabled?: boolean
}

export interface FormProps {
    style?: CSSProperties;
    className?: string | string[];
    layout?: 'horizontal' | 'vertical' | 'inline'
    size?: SizeType
    labelCol?: { span: number, offset: number }
    labelAlign?: 'right'
    wrapperCol?: { span: number, offset: number }
    requiredSymbol?: boolean
    disabled?: boolean
    onSubmit?: (value: any, e: Event) => void
    children?: ReactNode
}
