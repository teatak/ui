import React from 'react'
import { ControlCommonProps, StyleOverridesProps, StyledCommonProps } from '@/types'

export interface InputProps extends InputOptionsProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'color' | 'size'> {
}

export interface InputOptionsProps extends ControlCommonProps, StyledCommonProps, StyleOverridesProps<InputOptionsProps> {
    prefix?: React.ReactNode,
    suffix?: React.ReactNode
    startDecorator?: React.ReactNode
    endDecorator?: React.ReactNode
    component?: React.ElementType
}