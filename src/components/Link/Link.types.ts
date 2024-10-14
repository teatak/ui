import React from 'react'
import { StyleOverridesProps, StyledCommonProps, ControlCommonProps } from '@/types'
import { ColorName } from '@/style'
export interface LinkProps extends LinkOptionsProps, Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
}

export interface LinkOptionsProps extends Omit<ControlCommonProps, 'variant' | 'outlined' | 'elevation' | 'shape'>, StyledCommonProps, StyleOverridesProps<LinkOptionsProps> {
    component?: React.ElementType
}
