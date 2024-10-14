import { OverridableUnion, OverridableRecord } from './utils';

//color name
export const DefaultColorNames = ['primary', 'neutral', 'danger', 'success', 'warning'] as const
export type DefaultColorName = typeof DefaultColorNames[number]
export interface ColorNameOverrides { }
export type ColorName = OverridableUnion<
    DefaultColorName,
    ColorNameOverrides
>

//tone
export const DefaultColorTones = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100] as const
export type DefaultColorTone = typeof DefaultColorTones[number];
export interface ColorTone
    extends Record<DefaultColorTone, string> { }

export interface BaseColor
    extends Record<ColorName, string> { }

export interface Color
    extends Record<ColorName, ColorTone> { }

export const DefaultVariants = ['filled', 'tonal', 'text'] as const
export type DefaultVariant = typeof DefaultVariants[number]

export interface DefaultColorVariant {
    //dim
    dark: string
    onDark: string
    //main
    main: string
    onMain: string
    //container
    container: string
    onContainer: string
    //light
    light: string
    onLight: string
}

export interface ColorVariantOverrides { }
export interface ColorVariant
    extends OverridableRecord<DefaultColorVariant, ColorVariantOverrides, string> { }

interface DefaultPaletteSurface {
    //dim
    dark: string
    onDark: string
    //main
    main: string
    onMain: string
    //container
    container: string
    onContainer: string
    //body
    body: string
    onBody: string
    //inverse
    inverseMain: string
    inverseOnMain: string
}
export interface PaletteSurfaceOverrides { }
export interface PaletteSurface
    extends OverridableRecord<DefaultPaletteSurface, PaletteSurfaceOverrides, string> { }

interface DefaultPaletteCommon {
    white: string
    black: string
}
export interface PaletteCommonOverrides { }
export interface PaletteCommon
    extends OverridableRecord<DefaultPaletteCommon, PaletteCommonOverrides, string> { }

interface DefaultPalette extends Record<ColorName, ColorTone & ColorVariant> {
    surface: PaletteSurface
    common: PaletteCommon
}
export interface PaletteOverrides { }
export interface Palette
    extends OverridableRecord<DefaultPalette, PaletteOverrides, ColorTone & ColorVariant> {
    mode: 'light' | 'dark';
}