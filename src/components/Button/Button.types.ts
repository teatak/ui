import React from 'react'
import { ControlCommonProps, StyleOverridesProps, StyledCommonProps } from '@/types'

export interface ButtonProps extends ButtonOptionsProps, Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
}

export interface ButtonOptionsProps extends ControlCommonProps, StyledCommonProps, StyleOverridesProps<ButtonOptionsProps> {
    loading?: boolean
    icon?: boolean
    loadingPosition?: 'start' | 'center' | 'end'
    href?: string
    startDecorator?: React.ReactNode
    endDecorator?: React.ReactNode
}
