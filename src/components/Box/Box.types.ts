import React from 'react'
import { StyleOverridesProps, StyledCommonProps } from '@/types'


export interface BoxProps extends BoxOptionsProps, Omit<React.HTMLAttributes<HTMLElement>, ''> {
}

export interface BoxOptionsProps extends StyledCommonProps, StyleOverridesProps<BoxOptionsProps> {
    component?: React.ElementType
}
