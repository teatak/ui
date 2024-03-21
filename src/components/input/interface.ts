import React from 'react'
import { SizeType, VariantType, ColorType, ShapeType, CommonProps } from '../types'

export interface InputProps extends CommonProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    variant?: VariantType
    color?: ColorType
    shape?: Exclude<ShapeType, 'circle'>
    size?: SizeType
    disabled?: boolean
    inputRef?: React.RefObject<HTMLInputElement>
    startDecorator?: React.ReactNode
    endDecorator?: React.ReactNode
    type?: 'text' | 'password'
}