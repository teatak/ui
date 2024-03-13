import React, { ReactNode } from 'react'
import { SizeType, VariantType, ColorType, ShapeType, CommonProps } from '../types'

export interface InputProps extends CommonProps, Omit<React.HTMLAttributes<HTMLInputElement>, ''> {
    variant?: VariantType
    color?: ColorType
    shape?: ShapeType
    size?: SizeType
    loading?: boolean
    loadingPosition?: 'start' | 'end'
    disabled?: boolean
    startIcon?: ReactNode
    endIcon?: ReactNode
}