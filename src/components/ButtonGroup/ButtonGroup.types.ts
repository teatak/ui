import React from 'react'
import { ControlCommonProps, StyleOverridesProps, StyledCommonProps } from '../../types'

export interface ButtonGroupProps extends ButtonGroupOptionsProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> {
}

export interface ButtonGroupOptionsProps extends ControlCommonProps, StyledCommonProps, StyleOverridesProps<ButtonGroupOptionsProps> {
    direction?: 'row' | 'column'
    disabled?: boolean
}