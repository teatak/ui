import React from 'react'
import { ControlCommonProps, StyleOverridesProps, StyledCommonProps } from '@/types'
import { ColorName } from '@/style'

export interface ChipProps extends ChipOptionsProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
}

export interface ChipOptionsProps extends ControlCommonProps, StyledCommonProps, StyleOverridesProps<ChipOptionsProps> {
    loading?: boolean
    icon?: boolean
    loadingPosition?: 'start' | 'center' | 'end'
    href?: string
    startDecorator?: React.ReactNode
    endDecorator?: React.ReactNode
}

export interface ChipDeleteProps extends ChipDeleteOptionsProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
}

export interface ChipDeleteOptionsProps extends StyledCommonProps, StyleOverridesProps<ChipDeleteOptionsProps> {
    color?: ColorName
}
