
import { OverridableRecord } from './utils';
import { BigSize } from './theme'

export interface DefaultFontSize extends Record<BigSize, string> { }
export interface FontSizeOverrides { }
export interface FontSize extends OverridableRecord<DefaultFontSize, FontSizeOverrides, string> { }

export interface DefaultFontFamily {
    body: string;
    display: string;
    code: string;
    fallback: string;
}
export interface FontFamilyOverrides { }
export interface FontFamily
    extends OverridableRecord<DefaultFontFamily, FontFamilyOverrides, string> { }
