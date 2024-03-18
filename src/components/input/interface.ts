import React, { ReactNode } from 'react'
import { SizeType, VariantType, ColorType, ShapeType, CommonProps } from '../types'

export interface InputProps extends CommonProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: VariantType
    color?: ColorType
    shape?: Exclude<ShapeType, 'circle'>
    size?: SizeType
    disabled?: boolean
    startDecorator?: ReactNode
    endDecorator?: ReactNode
    htmlType?: 'text' | 'password'
}