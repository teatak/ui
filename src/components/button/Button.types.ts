import React from 'react'
import { SizeType, VariantType, ColorType, ShapeType, CommonProps } from '../types'

export interface ButtonProps extends CommonProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, ''> {
    variant?: VariantType
    color?: ColorType
    shape?: ShapeType
    size?: SizeType
    long?: boolean
    loading?: boolean
    loadingPosition?: 'start' | 'center' | 'end'
    disabled?: boolean
    href?: string
    startDecorator?: React.ReactNode
    endDecorator?: React.ReactNode
}