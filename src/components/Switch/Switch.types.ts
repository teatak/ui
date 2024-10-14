import React from 'react'
import { ControlCommonProps, StyleOverridesProps, StyledCommonProps } from '@/types'

export interface SwitchProps extends SwitchOptionsProps, Omit<React.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'children'> {
}

export interface SwitchOptionsProps extends Omit<ControlCommonProps, 'elevation'>, StyledCommonProps, StyleOverridesProps<SwitchOptionsProps> {
    thinTrack?: boolean
    icon?: React.ReactNode
    checkedIcon?: React.ReactNode
    children?: React.ReactNode | ((checked: boolean) => React.ReactNode)
}