import { StyledObject } from 'styled-components'

//尺寸
export type SizeType = 'xs' | 'sm' | 'md' | 'lg'

//变种
export type VariantType = 'solid' | 'soft' | 'outlined' | 'text'

//颜色
export type ColorType = 'primary' | 'neutral' | 'success' | 'danger' | 'warning'

//形状
export type ShapeType = 'circle' | 'round' | 'square'

export interface Styles {
    common: StyledObject
    xs: StyledObject
    sm: StyledObject
    md: StyledObject
    lg: StyledObject
    xl: StyledObject
}

//默认 props
export interface CommonProps {
    styleOverrides?: Partial<Styles>,
}

//默认 styled props
export interface StyledCommonProps extends CommonProps {
    prefixClass: string,
}