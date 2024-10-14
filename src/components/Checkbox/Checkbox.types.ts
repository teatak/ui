import React from 'react'
import { ControlCommonProps, StyleOverridesProps, StyledCommonProps } from '@/types'

export interface CheckboxProps extends CheckboxOptionsProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'children'> {
}

export interface CheckboxOptionsProps extends Omit<ControlCommonProps, 'elevation'>, StyledCommonProps, StyleOverridesProps<CheckboxOptionsProps> {
    icon?: React.ReactNode
    indeterminate?: boolean
    children?: React.ReactNode | ((checked: boolean, indeterminate: boolean) => React.ReactNode)
}