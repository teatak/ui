import { DefaultLineHeight, LineHeight } from './typography';
import { DefaultRadius, Radius } from './radius';
import { DefaultShadow, Shadow } from './shadow';
import {
    DefaultFontFamily,
    DefaultFontSize,
    FontFamily,
    FontSize,
} from './font';
import { DefaultZIndex, ZIndex } from './zIndex';
import { Palette, Color, BaseColor } from './palette';
import { Components } from './component';
export type DefaultColorScheme = 'light' | 'dark';

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type BigSize = Size | 'xl2' | 'xl3' | 'xl4'

export interface Breakpoint extends Record<Size, number> { }

export interface ThemeScales {
    breakpoint: Breakpoint
    fontFamily: FontFamily
    fontSize: FontSize
    lineHeight: LineHeight;
    radius: Radius
    shadow: Shadow
    zIndex: ZIndex
    components?: Components
}

interface ColorSystemVars extends Omit<Palette, 'mode'> { }
export interface ThemeVars extends ThemeScales {
    palette: ColorSystemVars
}

export interface EntriesScales extends ThemeScales {
    defaultColorScheme: DefaultColorScheme
    colorSchemes: Record<DefaultColorScheme, Palette>
    color: Color
    baseColor: BaseColor
}

export interface Theme {
    entries: EntriesScales
    vars: ThemeVars
    css: {
        root: Record<string, string>
        light: Record<string, string>
        dark: Record<string, string>
    },
}