import { ColorName, DefaultVariant, Size, StyleOverrides } from './style/types'

export type Shape = 'round' | 'square'

//默认 props
export interface StyleOverridesProps<T> {
    styleOverrides?: StyleOverrides<T>
}

export interface ControlCommonProps {
    variant?: DefaultVariant
    color?: ColorName
    outlined?: boolean
    elevation?: [number, number, number]
    shape?: Shape
    size?: Size
    disabled?: boolean
}

export interface StyledCommonProps {
    prefixClass?: string
}