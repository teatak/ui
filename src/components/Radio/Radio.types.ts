import React from 'react'
import { ControlCommonProps, StyleOverridesProps, StyledCommonProps } from '@/types'

export interface RadioProps extends RadioOptionsProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'children'> {
}

export interface RadioOptionsProps extends Omit<ControlCommonProps, 'elevation'>, StyledCommonProps, StyleOverridesProps<RadioOptionsProps> {
    icon?: React.ReactNode
    children?: React.ReactNode | ((checked: boolean) => React.ReactNode)
}