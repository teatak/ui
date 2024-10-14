import React, { ReactNode } from 'react'
import { StyledCommonProps, StyleOverridesProps } from '@/types'
import { Size } from '@/style'

interface Option {
    label: ReactNode
    value: string | number
    disabled?: boolean
}

export interface ControlGroupProps {
    disabled?: boolean
    single?: boolean
    options?: Option[]
    defaultValue?: string[] | number[] | boolean[] | string | number | boolean;
    value?: string[] | number[] | boolean[] | string | number | boolean;
    onChange?: (value: string[] | number[] | boolean[] | string | number | boolean) => void;
    render?: (options: SelectItemProps[]) => React.ReactNode
}

export interface SelectItemProps {
    label: ReactNode
    value: string | number
    disabled?: boolean
    selected?: boolean
    onChange: (e: any) => void;
}

export interface ControlLabelProps extends ControlLabelOptionsProps, React.LabelHTMLAttributes<HTMLLabelElement> {
}

export interface ControlLabelOptionsProps extends StyledCommonProps, StyleOverridesProps<ControlLabelProps> {
    size?: Size
    disabled?: boolean
    required?: boolean
}