import React from 'react'
import { ControlCommonProps, StyleOverridesProps, StyledCommonProps } from '@/types'

export interface TextareaProps extends TextareaOptionsProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix' | 'color' | 'size'> {
}

export interface TextareaOptionsProps extends ControlCommonProps, StyledCommonProps, StyleOverridesProps<TextareaOptionsProps> {
    startDecorator?: React.ReactNode
    endDecorator?: React.ReactNode
    component?: React.ElementType
    minRows?: number
    maxRows?: number
}