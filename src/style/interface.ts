export interface Radius extends Record<string, string> {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
}

export interface Shadow extends Record<string, string> {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
}

export interface FontFamily extends Record<string, string> {
    body: string
    display: string
    code: string
    fallback: string
}

export interface FontSize extends Record<string, string> {
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xl2: string
    xl3: string
    xl4: string
}

export interface ZIndex extends Record<string, number> {
    badge: number
    table: number
    popup: number
    modal: number
    tooltip: number
    snackbar: number
}

export interface BaseColor extends Record<string, string> {
    primary: string
    neutral: string
    red: string
    orange: string
    yellow: string
    green: string
    mint: string
    cyan: string
    blue: string
    indigo: string
    purple: string
    pink: string
    gray: string
}

export interface Breakpoint extends Record<string, number> {
    xs: number
    sm: number
    md: number
    lg: number
    xl: number
}

export interface BaseScales {
    baseColor: BaseColor,
    radius: Radius
    shadow: Shadow
    fontFamily: FontFamily
    fontSize: FontSize
    zIndex: ZIndex
    breakpoint: Breakpoint
}

export interface ColorSchemes {
    light: ColorSystem
    dark: ColorSystem
}

export interface EntriesScales extends BaseScales {
    colorSchemes: ColorSchemes
}

export interface VarsScales extends BaseScales {
    scheme: ColorSystem
}

type DefaultVariant = 'text' | 'outlined' | 'soft' | 'solid'
type DefaultProperty = 'Color' | 'ColorDisabled' |
    'BorderWidth' | 'Border' | 'BorderHover' | 'BorderActive' | 'BorderDisabled' |
    'Background' | 'BackgroundHover' | 'BackgroundActive' | 'BackgroundDisabled' |
    'BoxShadow' | 'BoxShadowHover' | 'BoxShadowActive' | 'BoxShadowDisabled'

export interface PaletteVariant
    extends Record<
        `${DefaultVariant}${DefaultProperty}`,
        string
    >, Record<string, string> { }

export interface PaletteRange extends Record<string, string> {
    1: string
    2: string
    3: string
    4: string
    5: string
    6: string
    7: string
    8: string
    9: string
    10: string
}

export interface PaletteRangeVariant extends PaletteRange, PaletteVariant { }

export interface Common {
    white: string
    black: string
    shadowRing: string
    shadowChannel: string
    shadowOpacity: string
}

export interface Text {
    primary: string
    secondary: string
    tertiary: string
    icon: string
    revert: string
}

export interface Background {
    body: string
    surface: string
    popup: string
    level1: string
    level2: string
    level3: string
    tooltip: string
}

export interface ColorSystem {
    mode: string
    primary: PaletteRangeVariant
    neutral: PaletteRangeVariant
    danger: PaletteRangeVariant
    success: PaletteRangeVariant
    warning: PaletteRangeVariant
    red: PaletteRange
    orange: PaletteRange
    yellow: PaletteRange
    green: PaletteRange
    cyan: PaletteRange
    blue: PaletteRange
    indigo: PaletteRange
    purple: PaletteRange
    pink: PaletteRange
    gray: PaletteRange
    common: Common
    shadow: Shadow
    text: Text
    background: Background
}

export interface Theme {
    entries: EntriesScales
    css: {
        root: Record<string, string>
        light: Record<string, string>
        dark: Record<string, string>
    },
    vars: VarsScales,
}
