import { ButtonOptionsProps as ButtonOptionsProps$1, GridOptionsProps as GridOptionsProps$1, GridItemOptionsProps as GridItemOptionsProps$1, BoxOptionsProps as BoxOptionsProps$1, ButtonGroupOptionsProps as ButtonGroupOptionsProps$1, InputOptionsProps as InputOptionsProps$1, TextareaOptionsProps as TextareaOptionsProps$1, CheckboxOptionsProps as CheckboxOptionsProps$1, SwitchOptionsProps as SwitchOptionsProps$1, RadioOptionsProps as RadioOptionsProps$1, ControlLabelOptionsProps as ControlLabelOptionsProps$1, LinkOptionsProps as LinkOptionsProps$1, ChipOptionsProps as ChipOptionsProps$1, ChipDeleteOptionsProps as ChipDeleteOptionsProps$1 } from '@/components';
import { StyledObject, RuleSet } from 'styled-components';
import * as React from 'react';
import React__default, { ReactNode } from 'react';
import { StyledCommonProps as StyledCommonProps$1, StyleOverridesProps as StyleOverridesProps$1, ControlCommonProps as ControlCommonProps$1 } from '@/types';
import { RecursivePartial as RecursivePartial$1 } from '@/helper/common';
import * as styled_components_dist_types from 'styled-components/dist/types';
import { ColorName as ColorName$1, Size as Size$1 } from '@/style';

type ExcludeValue<T, V> = {
    [K in keyof T]: T[K] extends V ? never : K;
}[keyof T];
type IncludeValue<T, V> = {
    [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];
type OverridableUnion<T extends string | number | symbol, U = {}> = ExcludeValue<U, false> | Exclude<T, IncludeValue<U, false>>;
/**
 * The new type will be overridable by the provided `Overrides`
 * ```ts
 *  declare module "@teatak/styles" {
 *    interface ColorOverrides {
 *      primary: false      //remove key
 *      customerA: true     //override key with DefaultValue
 *      customerB: string   //override key use string
 *    }
 *  }
 * ```
 * @template DefaultRecord, Overrides, Value
 * @param {DefaultRecord} defaultInterface - The default structure
 * @param {Overrides} overrideInterface - The interface that users will interact with to extend or remove keys
 * @param {DefaultValue} value - The value of the extended keys
 */
type OverridableRecord<DefaultRecord extends Record<string, any>, Overrides = {}, DefaultValue = any> = {
    [k in OverridableUnion<keyof DefaultRecord, Overrides>]: k extends keyof Overrides ? Overrides[k] extends true ? DefaultValue : Overrides[k] : k extends keyof DefaultRecord ? DefaultRecord[k] : never;
};

declare const DefaultColorNames: readonly ["primary", "neutral", "danger", "success", "warning"];
type DefaultColorName = typeof DefaultColorNames[number];
interface ColorNameOverrides {
}
type ColorName = OverridableUnion<DefaultColorName, ColorNameOverrides>;
declare const DefaultColorTones: readonly [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
type DefaultColorTone = typeof DefaultColorTones[number];
interface ColorTone extends Record<DefaultColorTone, string> {
}
interface BaseColor extends Record<ColorName, string> {
}
interface Color extends Record<ColorName, ColorTone> {
}
declare const DefaultVariants: readonly ["filled", "tonal", "text"];
type DefaultVariant = typeof DefaultVariants[number];
interface DefaultColorVariant {
    dark: string;
    onDark: string;
    main: string;
    onMain: string;
    container: string;
    onContainer: string;
    light: string;
    onLight: string;
}
interface ColorVariantOverrides {
}
interface ColorVariant extends OverridableRecord<DefaultColorVariant, ColorVariantOverrides, string> {
}
interface DefaultPaletteSurface {
    dark: string;
    onDark: string;
    main: string;
    onMain: string;
    container: string;
    onContainer: string;
    body: string;
    onBody: string;
    inverseMain: string;
    inverseOnMain: string;
}
interface PaletteSurfaceOverrides {
}
interface PaletteSurface extends OverridableRecord<DefaultPaletteSurface, PaletteSurfaceOverrides, string> {
}
interface DefaultPaletteCommon {
    white: string;
    black: string;
}
interface PaletteCommonOverrides {
}
interface PaletteCommon extends OverridableRecord<DefaultPaletteCommon, PaletteCommonOverrides, string> {
}
interface DefaultPalette extends Record<ColorName, ColorTone & ColorVariant> {
    surface: PaletteSurface;
    common: PaletteCommon;
}
interface PaletteOverrides {
}
interface Palette extends OverridableRecord<DefaultPalette, PaletteOverrides, ColorTone & ColorVariant> {
    mode: 'light' | 'dark';
}

interface DefaultLineHeight extends Record<Size, string> {
}
interface LineHeightOverrides {
}
interface LineHeight extends OverridableRecord<DefaultLineHeight, LineHeightOverrides, string> {
}

interface DefaultShadow extends Record<Size, string> {
}
interface ShadowOverrides {
}
interface Shadow extends OverridableRecord<DefaultShadow, ShadowOverrides, string> {
}

interface DefaultFontSize extends Record<BigSize, string> {
}
interface FontSizeOverrides {
}
interface FontSize extends OverridableRecord<DefaultFontSize, FontSizeOverrides, string> {
}
interface DefaultFontFamily {
    body: string;
    display: string;
    code: string;
    fallback: string;
}
interface FontFamilyOverrides {
}
interface FontFamily extends OverridableRecord<DefaultFontFamily, FontFamilyOverrides, string> {
}

/**
 * From lowest to highest value
 */
interface DefaultZIndex {
    badge: number;
    /**
     * For sticky `th` cells
     */
    table: number;
    /**
     * Including `Menu`, `Autocomplete`, `Select`
     */
    popup: number;
    modal: number;
    tooltip: number;
    snackbar: number;
}
interface ZIndexOverrides {
}
interface ZIndex extends OverridableRecord<DefaultZIndex, ZIndexOverrides, number> {
}

type StyleOverrides<ComponentOwnerState = Record<string, unknown>> = StyledObject | ((ownerState: ComponentOwnerState) => StyledObject | RuleSet<object>);
interface Components {
    TuiButton?: {
        styleOverrides?: StyleOverrides<ButtonOptionsProps$1>;
    };
    TuiGrid?: {
        styleOverrides?: StyleOverrides<GridOptionsProps$1>;
    };
    TuiGridItem?: {
        styleOverrides?: StyleOverrides<GridItemOptionsProps$1>;
    };
    TuiBox?: {
        styleOverrides?: StyleOverrides<BoxOptionsProps$1>;
    };
    TuiButtonGroup?: {
        styleOverrides?: StyleOverrides<ButtonGroupOptionsProps$1>;
    };
    TuiInput?: {
        styleOverrides?: StyleOverrides<InputOptionsProps$1>;
    };
    TuiTextarea?: {
        styleOverrides?: StyleOverrides<TextareaOptionsProps$1>;
    };
    TuiCheckbox?: {
        styleOverrides?: StyleOverrides<CheckboxOptionsProps$1>;
    };
    TuiSwitch?: {
        styleOverrides?: StyleOverrides<SwitchOptionsProps$1>;
    };
    TuiRadio?: {
        styleOverrides?: StyleOverrides<RadioOptionsProps$1>;
    };
    TuiControlLabel?: {
        styleOverrides?: StyleOverrides<ControlLabelOptionsProps$1>;
    };
    TuiLink?: {
        styleOverrides?: StyleOverrides<LinkOptionsProps$1>;
    };
    TuiChip?: {
        styleOverrides?: StyleOverrides<ChipOptionsProps$1>;
    };
    TuiChipDelete?: {
        styleOverrides?: StyleOverrides<ChipDeleteOptionsProps$1>;
    };
}

type DefaultColorScheme = 'light' | 'dark';
type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type BigSize = Size | 'xl2' | 'xl3' | 'xl4';
interface Breakpoint extends Record<Size, number> {
}
interface ThemeScales {
    breakpoint: Breakpoint;
    fontFamily: FontFamily;
    fontSize: FontSize;
    lineHeight: LineHeight;
    radius: Radius;
    shadow: Shadow;
    zIndex: ZIndex;
    components?: Components;
}
interface ColorSystemVars extends Omit<Palette, 'mode'> {
}
interface ThemeVars extends ThemeScales {
    palette: ColorSystemVars;
}
interface EntriesScales extends ThemeScales {
    defaultColorScheme: DefaultColorScheme;
    colorSchemes: Record<DefaultColorScheme, Palette>;
    color: Color;
    baseColor: BaseColor;
}
interface Theme {
    entries: EntriesScales;
    vars: ThemeVars;
    css: {
        root: Record<string, string>;
        light: Record<string, string>;
        dark: Record<string, string>;
    };
}

interface DefaultRadius extends Record<Size, string> {
}
interface RadiusOverrides {
}
interface Radius extends OverridableRecord<DefaultRadius, RadiusOverrides, string> {
}

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};
type Partial2Level<T> = {
    [K in keyof T]?: T[K] extends Record<any, any> ? {
        [J in keyof T[K]]?: T[K][J];
    } : T[K];
};
type Partial3Level<T> = {
    [K in keyof T]?: {
        [J in keyof T[K]]?: T[K][J] extends Record<any, any> ? {
            [P in keyof T[K][J]]?: T[K][J][P];
        } : T[K][J];
    };
};

type ColorSystemOptions = Partial3Level<Palette>;
type ColorOptions = Partial3Level<Color>;
interface ThemeOptions extends Partial2Level<ThemeScales> {
    cssVarPrefix?: string;
    colorSchemes?: Partial<Record<DefaultColorScheme, ColorSystemOptions>>;
    baseColor?: Partial<BaseColor>;
    color?: ColorOptions;
}
type Mode = 'system' | 'light' | 'dark';
declare const themeChanged: (themeOptions?: ThemeOptions) => boolean;
declare const mergeStyleOverrides: (name: string, options: any) => RuleSet<object>;
declare function createTheme(themeOptions?: ThemeOptions, defaultColorScheme?: DefaultColorScheme): Theme;
declare const getMode: () => string;
declare const detectMode: () => string;
declare const setMode: (scheme: Mode) => void;
declare const restoreMode: () => void;
declare const reflectMode: () => void;
declare const prerenderStyle: (defaultMode?: Mode, customCss?: any) => void;

interface Spacing {
    xs: number[] | number;
    sm: number[] | number;
    md: number[] | number;
    lg: number[] | number;
    xl: number[] | number;
}
interface SpacingArray {
    xs: number[];
    sm?: number[];
    md?: number[];
    lg?: number[];
    xl?: number[];
}
interface Column {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
}
interface Span {
    xs: number | boolean;
    sm: number | boolean;
    md: number | boolean;
    lg: number | boolean;
    xl: number | boolean;
}
interface GridProps extends GridOptionsProps, Omit<React__default.HTMLAttributes<HTMLElement>, ''> {
}
interface GridOptionsProps extends StyledCommonProps$1, StyleOverridesProps$1<GridOptionsProps> {
    autoWrap?: boolean;
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    columns?: number | RecursivePartial$1<Column>;
    spacing?: number | RecursivePartial$1<Spacing>;
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
}
interface GridItemProps extends GridItemOptionsProps, Omit<React__default.HTMLAttributes<HTMLElement>, ''> {
    span?: number | boolean | RecursivePartial$1<Span>;
    offset?: number | RecursivePartial$1<Column>;
}
interface GridItemOptionsProps extends StyledCommonProps$1, StyleOverridesProps$1<GridItemOptionsProps> {
    span?: number | boolean | RecursivePartial$1<Span>;
    offset?: number | RecursivePartial$1<Column>;
}

declare const Grid: (inProps: GridProps) => React__default.JSX.Element;

declare const GridItem: (props: GridItemProps) => React__default.JSX.Element;

interface GridContextType {
    columns: number | RecursivePartial<Breakpoint>;
}
declare const GridContext: React.Context<GridContextType>;

declare const StyledGrid: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $options: GridOptionsProps;
}>> & string;
declare const StyledGridItem: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $options: GridItemOptionsProps;
}>> & string;

interface BoxProps extends BoxOptionsProps, Omit<React__default.HTMLAttributes<HTMLElement>, ''> {
}
interface BoxOptionsProps extends StyledCommonProps$1, StyleOverridesProps$1<BoxOptionsProps> {
    component?: React__default.ElementType;
}

declare const Box: (inProps: BoxProps) => React__default.JSX.Element;

declare const StyledBox: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $options: BoxOptionsProps;
}>> & string;

type Shape = 'round' | 'square';
interface StyleOverridesProps<T> {
    styleOverrides?: StyleOverrides<T>;
}
interface ControlCommonProps {
    variant?: DefaultVariant;
    color?: ColorName;
    outlined?: boolean;
    elevation?: [number, number, number];
    shape?: Shape;
    size?: Size;
    disabled?: boolean;
}
interface StyledCommonProps {
    prefixClass?: string;
}

interface ButtonGroupProps extends ButtonGroupOptionsProps, Omit<React__default.HTMLAttributes<HTMLDivElement>, 'color'> {
}
interface ButtonGroupOptionsProps extends ControlCommonProps, StyledCommonProps, StyleOverridesProps<ButtonGroupOptionsProps> {
    direction?: 'row' | 'column';
    disabled?: boolean;
}

declare const _default: (inProps: ButtonGroupProps) => React__default.JSX.Element;

interface ButtonProps extends ButtonOptionsProps, Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
}
interface ButtonOptionsProps extends ControlCommonProps$1, StyledCommonProps$1, StyleOverridesProps$1<ButtonOptionsProps> {
    loading?: boolean;
    icon?: boolean;
    loadingPosition?: 'start' | 'center' | 'end';
    href?: string;
    startDecorator?: React__default.ReactNode;
    endDecorator?: React__default.ReactNode;
}

declare const Button: React__default.ForwardRefExoticComponent<ButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

declare const StyledButton: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    $options: ButtonOptionsProps;
}>> & string;

interface InputProps extends InputOptionsProps, Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'color' | 'size'> {
}
interface InputOptionsProps extends ControlCommonProps$1, StyledCommonProps$1, StyleOverridesProps$1<InputOptionsProps> {
    prefix?: React__default.ReactNode;
    suffix?: React__default.ReactNode;
    startDecorator?: React__default.ReactNode;
    endDecorator?: React__default.ReactNode;
    component?: React__default.ElementType;
}

declare const Input: React__default.ForwardRefExoticComponent<InputProps & React__default.RefAttributes<HTMLInputElement>>;

declare const StyledInputRoot: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $options: InputOptionsProps;
}>> & string;

interface TextareaProps extends TextareaOptionsProps, Omit<React__default.TextareaHTMLAttributes<HTMLTextAreaElement>, 'prefix' | 'color' | 'size'> {
}
interface TextareaOptionsProps extends ControlCommonProps$1, StyledCommonProps$1, StyleOverridesProps$1<TextareaOptionsProps> {
    startDecorator?: React__default.ReactNode;
    endDecorator?: React__default.ReactNode;
    component?: React__default.ElementType;
    minRows?: number;
    maxRows?: number;
}

declare const Textarea: React__default.ForwardRefExoticComponent<TextareaProps & React__default.RefAttributes<HTMLTextAreaElement>>;

declare const StyledTextareaRoot: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $options: TextareaOptionsProps;
}>> & string;

interface CheckboxProps extends CheckboxOptionsProps, Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'children'> {
}
interface CheckboxOptionsProps extends Omit<ControlCommonProps$1, 'elevation'>, StyledCommonProps$1, StyleOverridesProps$1<CheckboxOptionsProps> {
    icon?: React__default.ReactNode;
    indeterminate?: boolean;
    children?: React__default.ReactNode | ((checked: boolean, indeterminate: boolean) => React__default.ReactNode);
}

declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<HTMLInputElement>>;

declare const StyledCheckbox: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {
    $options: CheckboxOptionsProps;
}>> & string;

interface SwitchProps extends SwitchOptionsProps, Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'children'> {
}
interface SwitchOptionsProps extends Omit<ControlCommonProps$1, 'elevation'>, StyledCommonProps$1, StyleOverridesProps$1<SwitchOptionsProps> {
    thinTrack?: boolean;
    icon?: React__default.ReactNode;
    checkedIcon?: React__default.ReactNode;
    children?: React__default.ReactNode | ((checked: boolean) => React__default.ReactNode);
}

declare const Switch: React__default.ForwardRefExoticComponent<SwitchProps & React__default.RefAttributes<HTMLInputElement>>;

declare const StyledSwitch: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {
    $options: SwitchOptionsProps;
}>> & string;

interface RadioProps extends RadioOptionsProps, Omit<React__default.InputHTMLAttributes<HTMLInputElement>, 'color' | 'size' | 'children'> {
}
interface RadioOptionsProps extends Omit<ControlCommonProps$1, 'elevation'>, StyledCommonProps$1, StyleOverridesProps$1<RadioOptionsProps> {
    icon?: React__default.ReactNode;
    children?: React__default.ReactNode | ((checked: boolean) => React__default.ReactNode);
}

declare const Radio: React__default.ForwardRefExoticComponent<RadioProps & React__default.RefAttributes<HTMLInputElement>>;

declare const StyledRadio: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {
    $options: RadioOptionsProps;
}>> & string;

interface LinkProps extends LinkOptionsProps, Omit<React__default.AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
}
interface LinkOptionsProps extends Omit<ControlCommonProps$1, 'variant' | 'outlined' | 'elevation' | 'shape'>, StyledCommonProps$1, StyleOverridesProps$1<LinkOptionsProps> {
    component?: React__default.ElementType;
}

declare const Link: React__default.ForwardRefExoticComponent<LinkProps & React__default.RefAttributes<HTMLLinkElement>>;

interface ChipProps extends ChipOptionsProps, Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
}
interface ChipOptionsProps extends ControlCommonProps$1, StyledCommonProps$1, StyleOverridesProps$1<ChipOptionsProps> {
    loading?: boolean;
    icon?: boolean;
    loadingPosition?: 'start' | 'center' | 'end';
    href?: string;
    startDecorator?: React__default.ReactNode;
    endDecorator?: React__default.ReactNode;
}
interface ChipDeleteProps extends ChipDeleteOptionsProps, Omit<React__default.ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
}
interface ChipDeleteOptionsProps extends StyledCommonProps$1, StyleOverridesProps$1<ChipDeleteOptionsProps> {
    color?: ColorName$1;
}

declare const Chip: React__default.ForwardRefExoticComponent<ChipProps & React__default.RefAttributes<HTMLButtonElement>>;

declare const ChipDelete: React__default.ForwardRefExoticComponent<ChipProps & React__default.RefAttributes<HTMLButtonElement>>;

declare const StyledChip: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $options: ChipOptionsProps;
}>> & string;
declare const StyledChipDelete: styled_components_dist_types.IStyledComponentBase<"web", styled_components_dist_types.Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    $options: ChipDeleteOptionsProps;
}>> & string;

declare const ControlContext: React__default.Context<ControlCommonProps>;

interface Option {
    label: ReactNode;
    value: string | number;
    disabled?: boolean;
}
interface ControlGroupProps {
    disabled?: boolean;
    single?: boolean;
    options?: Option[];
    defaultValue?: string[] | number[] | boolean[] | string | number | boolean;
    value?: string[] | number[] | boolean[] | string | number | boolean;
    onChange?: (value: string[] | number[] | boolean[] | string | number | boolean) => void;
    render?: (options: SelectItemProps[]) => React__default.ReactNode;
}
interface SelectItemProps {
    label: ReactNode;
    value: string | number;
    disabled?: boolean;
    selected?: boolean;
    onChange: (e: any) => void;
}
interface ControlLabelProps extends ControlLabelOptionsProps, React__default.LabelHTMLAttributes<HTMLLabelElement> {
}
interface ControlLabelOptionsProps extends StyledCommonProps$1, StyleOverridesProps$1<ControlLabelProps> {
    size?: Size$1;
    disabled?: boolean;
    required?: boolean;
}

declare const ControlGroup: (props: ControlGroupProps) => React.ReactNode;

declare const ControlLabel: (inProps: ControlLabelProps) => React__default.JSX.Element;

export { type BaseColor, type BigSize, Box, type BoxOptionsProps, type BoxProps, type Breakpoint, Button, _default as ButtonGroup, type ButtonGroupOptionsProps, type ButtonGroupProps, type ButtonOptionsProps, type ButtonProps, Checkbox, type CheckboxOptionsProps, type CheckboxProps, Chip, ChipDelete, type ChipDeleteOptionsProps, type ChipDeleteProps, type ChipOptionsProps, type ChipProps, type Color, type ColorName, type ColorNameOverrides, type ColorOptions, type ColorSystemOptions, type ColorTone, type ColorVariant, type ColorVariantOverrides, type Column, type Components, type ControlCommonProps, ControlContext, ControlGroup, type ControlGroupProps, ControlLabel, type ControlLabelOptionsProps, type ControlLabelProps, type DefaultColorName, DefaultColorNames, type DefaultColorScheme, type DefaultColorTone, DefaultColorTones, type DefaultColorVariant, type DefaultFontFamily, type DefaultFontSize, type DefaultRadius, type DefaultShadow, type DefaultVariant, DefaultVariants, type DefaultZIndex, type EntriesScales, type FontFamily, type FontFamilyOverrides, type FontSize, type FontSizeOverrides, Grid, GridContext, GridItem, type GridItemOptionsProps, type GridItemProps, type GridOptionsProps, type GridProps, Input, type InputOptionsProps, type InputProps, Link, type LinkOptionsProps, type LinkProps, type Mode, type Palette, type PaletteCommon, type PaletteCommonOverrides, type PaletteOverrides, type PaletteSurface, type PaletteSurfaceOverrides, Radio, type RadioOptionsProps, type RadioProps, type Radius, type RadiusOverrides, type SelectItemProps, type Shadow, type ShadowOverrides, type Shape, type Size, type Spacing, type SpacingArray, type Span, type StyleOverrides, type StyleOverridesProps, StyledBox, StyledButton, StyledCheckbox, StyledChip, StyledChipDelete, type StyledCommonProps, StyledGrid, StyledGridItem, StyledInputRoot, StyledRadio, StyledSwitch, StyledTextareaRoot, Switch, type SwitchOptionsProps, type SwitchProps, Textarea, type TextareaOptionsProps, type TextareaProps, type Theme, type ThemeOptions, type ThemeScales, type ThemeVars, type ZIndex, type ZIndexOverrides, createTheme, detectMode, getMode, mergeStyleOverrides, prerenderStyle, reflectMode, restoreMode, setMode, themeChanged };
