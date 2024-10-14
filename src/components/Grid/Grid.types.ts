import React from 'react'
import { StyleOverridesProps, StyledCommonProps } from '@/types'
import { RecursivePartial } from '@/helper/common'

export interface Spacing {
    xs: number[] | number
    sm: number[] | number
    md: number[] | number
    lg: number[] | number
    xl: number[] | number
}

export interface SpacingArray {
    xs: number[]
    sm?: number[]
    md?: number[]
    lg?: number[]
    xl?: number[]
}

export interface Column {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
}

export interface Span {
    xs: number | boolean
    sm: number | boolean
    md: number | boolean
    lg: number | boolean
    xl: number | boolean
}

export interface GridProps extends GridOptionsProps, Omit<React.HTMLAttributes<HTMLElement>, ''> {
}

export interface GridOptionsProps extends StyledCommonProps, StyleOverridesProps<GridOptionsProps> {
    autoWrap?: boolean
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse'
    columns?: number | RecursivePartial<Column>
    spacing?: number | RecursivePartial<Spacing>
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'
}

export interface GridItemProps extends GridItemOptionsProps, Omit<React.HTMLAttributes<HTMLElement>, ''> {
    span?: number | boolean | RecursivePartial<Span>
    offset?: number | RecursivePartial<Column>
}

export interface GridItemOptionsProps extends StyledCommonProps, StyleOverridesProps<GridItemOptionsProps> {
    span?: number | boolean | RecursivePartial<Span>
    offset?: number | RecursivePartial<Column>
}
