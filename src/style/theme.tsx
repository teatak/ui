import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom/client'
import { merge, RecursivePartial } from "../helper/common";
import { generateColor } from './palette'
import cssVarsParser from './cssVarsParser';
import { Theme, EntriesScales, PaletteVariant, ColorSystem, VarsScales } from "./interface"
import { createGlobalStyle, css } from 'styled-components';

export interface CssVarsThemeOptions extends RecursivePartial<EntriesScales> {
    cssVarPrefix?: string
}

//theme
export type Scheme = 'system' | 'light' | 'dark'
const schemeStorageKey = 'color-scheme'
const schemeAttributeKey = 'data-color-scheme'
let loadedColorScheme = false
let loadedThemeOptions: CssVarsThemeOptions
let loadedTheme: Theme

const themeChanged = (themeOptions?: CssVarsThemeOptions) => {
    let nextOptions = merge(themeOptions || {}, loadedThemeOptions,)
    console.log('themeChanged', nextOptions, loadedThemeOptions)
    if (JSON.stringify(nextOptions) == JSON.stringify(loadedThemeOptions)) {
        return false
    } else {
        loadedThemeOptions = nextOptions
        return true
    }
}

export function createTheme(themeOptions?: CssVarsThemeOptions): Theme {
    const changed = themeChanged(themeOptions)
    if (!changed) {
        return loadedTheme
    }
    const {
        cssVarPrefix = 'tui',
        ...scalesInput
    } = themeOptions || {};

    const getCssVar = (cssVar?: string, fallback?: string) => {
        return `var(--${cssVarPrefix}-${cssVar}${fallback ? `, ${fallback}` : ''})`
    }

    const getCssVarColor = (cssVar: string, light: boolean) => {
        const tokens = cssVar.split('-');
        const scheme = light ? 'light' : 'dark'
        const color = tokens[0];
        const index = tokens[1];

        // @ts-ignore
        return `rgb(var(--${cssVarPrefix}-${cssVar}, ${defaultColors[scheme][color]?.[index]}))`
    }

    const baseColor = {
        // color
        primary: 'rgb(0, 122, 255)',
        neutral: 'rgb(130, 130, 130)',
        red: 'rgb(255, 59, 48)',
        orange: 'rgb(255, 149, 0)',
        yellow: 'rgb(255, 204, 0)',
        green: 'rgb(52, 199, 89)',
        mint: 'rgb(0, 199, 190)',
        cyan: 'rgb(50, 173, 230)',
        blue: 'rgb(0, 122, 255)',
        indigo: 'rgb(88, 86, 214)',
        purple: 'rgb(175, 82, 222)',
        pink: 'rgb(255, 45, 85)',
        gray: 'rgb(130, 130, 130)',
        ...scalesInput.baseColor
    }

    const defaultColors = {
        light: {
            primary: generateColor(baseColor.primary, { dark: false }),
            neutral: generateColor(baseColor.neutral, { dark: false }),
            danger: generateColor(baseColor.red, { dark: false }),
            success: generateColor(baseColor.green, { dark: false }),
            warning: generateColor(baseColor.orange, { dark: false }),
            red: generateColor(baseColor.red, { dark: false }),
            orange: generateColor(baseColor.orange, { dark: false }),
            yellow: generateColor(baseColor.yellow, { dark: false }),
            green: generateColor(baseColor.green, { dark: false }),
            mint: generateColor(baseColor.mint, { dark: false }),
            cyan: generateColor(baseColor.cyan, { dark: false }),
            blue: generateColor(baseColor.blue, { dark: false }),
            indigo: generateColor(baseColor.indigo, { dark: false }),
            purple: generateColor(baseColor.purple, { dark: false }),
            pink: generateColor(baseColor.pink, { dark: false }),
            gray: generateColor(baseColor.gray, { dark: false }),
            common: {
                white: '255, 255, 255',
                black: '0, 0, 0',
                shadowRing: '0 0 #000',
                shadowChannel: '21 21 21',
                shadowOpacity: '0.08',
            },
        },
        dark: {
            primary: generateColor(baseColor.primary, { dark: true }),
            neutral: generateColor(baseColor.neutral, { dark: true }),
            danger: generateColor(baseColor.red, { dark: true }),
            success: generateColor(baseColor.green, { dark: true }),
            warning: generateColor(baseColor.orange, { dark: true }),
            red: generateColor(baseColor.red, { dark: true }),
            orange: generateColor(baseColor.orange, { dark: true }),
            yellow: generateColor(baseColor.yellow, { dark: true }),
            green: generateColor(baseColor.green, { dark: true }),
            mint: generateColor(baseColor.mint, { dark: true }),
            cyan: generateColor(baseColor.cyan, { dark: true }),
            blue: generateColor(baseColor.blue, { dark: true }),
            indigo: generateColor(baseColor.indigo, { dark: true }),
            purple: generateColor(baseColor.purple, { dark: true }),
            pink: generateColor(baseColor.pink, { dark: true }),
            gray: generateColor(baseColor.gray, { dark: true }),
            common: {
                white: '255, 255, 255',
                black: '0, 0, 0',
                shadowRing: '0 0 #000',
                shadowChannel: '0 0 0',
                shadowOpacity: '0.6',
            },
        }
    }

    const createLightModeVariantVariables = (color: any): PaletteVariant => {
        const isLight = true
        return {
            //定义样式
            textColor: getCssVarColor(`${color}-6`, isLight),
            //border
            textBorderWidth: '0px',
            textBorder: 'transparent',
            textBorderHover: 'transparent',
            textBorderActive: 'transparent',
            textBorderDisabled: 'transparent',
            //background
            textBackground: getCssVarColor(`${color}-2`, isLight),
            textBackgroundHover: getCssVarColor(`${color}-2`, isLight),
            textBackgroundActive: getCssVarColor(`${color}-3`, isLight),
            textBackgroundDisabled: getCssVarColor(`neutral-5`, isLight),
            //boxShadow
            textBoxShadow: 'none',
            textBoxShadowHover: 'none',
            textBoxShadowActive: 'none',
            textBoxShadowDisabled: 'none',

            outlinedColor: getCssVarColor(`common-white`, isLight),
            //border
            outlinedBorderWidth: '0px',
            outlinedBorder: 'transparent',
            outlinedBorderHover: 'transparent',
            outlinedBorderActive: 'transparent',
            outlinedBorderDisabled: 'transparent',
            //background
            outlinedBackground: getCssVarColor(`${color}-6`, isLight),
            outlinedBackgroundHover: getCssVarColor(`${color}-5`, isLight),
            outlinedBackgroundActive: getCssVarColor(`${color}-7`, isLight),
            outlinedBackgroundDisabled: getCssVarColor(`neutral-4`, isLight),
            //boxShadow
            outlinedBoxShadow: 'none',
            outlinedBoxShadowHover: getCssVar('shadow-xs'),
            outlinedBoxShadowActive: 'none',
            outlinedBoxShadowDisabled: 'none',

            //定义样式
            softColor: getCssVarColor(`common-white`, isLight),
            //border
            softBorderWidth: '0px',
            softBorder: 'transparent',
            softBorderHover: 'transparent',
            softBorderActive: 'transparent',
            softBorderDisabled: 'transparent',
            //background
            softBackground: getCssVarColor(`${color}-6`, isLight),
            softBackgroundHover: getCssVarColor(`${color}-5`, isLight),
            softBackgroundActive: getCssVarColor(`${color}-7`, isLight),
            softBackgroundDisabled: getCssVarColor(`neutral-4`, isLight),
            //boxShadow
            softBoxShadow: 'none',
            softBoxShadowHover: getCssVar('shadow-xs'),
            softBoxShadowActive: 'none',
            softBoxShadowDisabled: 'none',

            //定义样式
            solidColor: getCssVarColor(`common-white`, isLight),
            //border
            solidBorderWidth: '0px',
            solidBorder: 'transparent',
            solidBorderHover: 'transparent',
            solidBorderActive: 'transparent',
            solidBorderDisabled: 'transparent',
            //background
            solidBackground: getCssVarColor(`${color}-6`, isLight),
            solidBackgroundHover: getCssVarColor(`${color}-5`, isLight),
            solidBackgroundActive: getCssVarColor(`${color}-7`, isLight),
            solidBackgroundDisabled: getCssVarColor(`neutral-4`, isLight),
            //boxShadow
            solidBoxShadow: 'none',
            solidBoxShadowHover: getCssVar('shadow-xs'),
            solidBoxShadowActive: 'none',
            solidBoxShadowDisabled: 'none',
        }
    }


    const createDarkModeVariantVariables = (color: any): PaletteVariant => {
        const isLight = false
        return {
            //定义样式
            textColor: getCssVarColor(`${color}-6`, isLight),
            //border
            textBorderWidth: '0px',
            textBorder: 'transparent',
            textBorderHover: 'transparent',
            textBorderActive: 'transparent',
            textBorderDisabled: 'transparent',
            //background
            textBackground: getCssVarColor(`${color}-2`, isLight),
            textBackgroundHover: getCssVarColor(`${color}-2`, isLight),
            textBackgroundActive: getCssVarColor(`${color}-3`, isLight),
            textBackgroundDisabled: getCssVarColor(`neutral-5`, isLight),
            //boxShadow
            textBoxShadow: 'none',
            textBoxShadowHover: 'none',
            textBoxShadowActive: 'none',
            textBoxShadowDisabled: 'none',

            outlinedColor: getCssVarColor(`common-white`, isLight),
            //border
            outlinedBorderWidth: '0px',
            outlinedBorder: 'transparent',
            outlinedBorderHover: 'transparent',
            outlinedBorderActive: 'transparent',
            outlinedBorderDisabled: 'transparent',
            //background
            outlinedBackground: getCssVarColor(`${color}-6`, isLight),
            outlinedBackgroundHover: getCssVarColor(`${color}-5`, isLight),
            outlinedBackgroundActive: getCssVarColor(`${color}-7`, isLight),
            outlinedBackgroundDisabled: getCssVarColor(`neutral-4`, isLight),
            //boxShadow
            outlinedBoxShadow: 'none',
            outlinedBoxShadowHover: getCssVar('shadow-xs'),
            outlinedBoxShadowActive: 'none',
            outlinedBoxShadowDisabled: 'none',

            //定义样式
            softColor: getCssVarColor(`common-white`, isLight),
            //border
            softBorderWidth: '0px',
            softBorder: 'transparent',
            softBorderHover: 'transparent',
            softBorderActive: 'transparent',
            softBorderDisabled: 'transparent',
            //background
            softBackground: getCssVarColor(`${color}-6`, isLight),
            softBackgroundHover: getCssVarColor(`${color}-5`, isLight),
            softBackgroundActive: getCssVarColor(`${color}-7`, isLight),
            softBackgroundDisabled: getCssVarColor(`neutral-4`, isLight),
            //boxShadow
            softBoxShadow: 'none',
            softBoxShadowHover: getCssVar('shadow-xs'),
            softBoxShadowActive: 'none',
            softBoxShadowDisabled: 'none',

            //定义样式
            solidColor: getCssVarColor(`common-white`, isLight),
            //border
            solidBorderWidth: '0px',
            solidBorder: 'transparent',
            solidBorderHover: 'transparent',
            solidBorderActive: 'transparent',
            solidBorderDisabled: 'transparent',
            //background
            solidBackground: getCssVarColor(`${color}-6`, isLight),
            solidBackgroundHover: getCssVarColor(`${color}-5`, isLight),
            solidBackgroundActive: getCssVarColor(`${color}-7`, isLight),
            solidBackgroundDisabled: getCssVarColor(`neutral-4`, isLight),
            //boxShadow
            solidBoxShadow: 'none',
            solidBoxShadowHover: getCssVar('shadow-xs'),
            solidBoxShadowActive: 'none',
            solidBoxShadowDisabled: 'none',
        }
    }


    const fontFamilyFallback =
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';

    const fontFamily = {
        body: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
        display: `"Inter", ${getCssVar(`fontFamily-fallback, ${fontFamilyFallback}`)}`,
        code: 'Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
        fallback: fontFamilyFallback,
        ...scalesInput.fontFamily,
    };

    const fontSize = {
        xs: '0.625rem', // 10px
        sm: '0.75rem', // 12px
        md: '0.875rem', // 14px
        lg: '1rem', // 16px
        xl: '1.125rem', // 18px
        xxl: '1.25rem', // 20px
        xxxl: '1.5rem', // 24px
        ...scalesInput.fontSize
    }

    const lightColorSystem: ColorSystem = {
        mode: 'light',
        primary: {
            ...defaultColors.light.primary,
            ...createLightModeVariantVariables('primary'),
        },
        neutral: {
            ...defaultColors.light.neutral,
            ...createLightModeVariantVariables('neutral'),
        },
        danger: {
            ...defaultColors.light.danger,
            ...createLightModeVariantVariables('danger'),
        },
        success: {
            ...defaultColors.light.success,
            ...createLightModeVariantVariables('success'),
        },
        warning: {
            ...defaultColors.light.warning,
            ...createLightModeVariantVariables('warning'),
        },
        red: defaultColors.light.red,
        orange: defaultColors.light.orange,
        yellow: defaultColors.light.yellow,
        green: defaultColors.light.green,
        mint: defaultColors.light.mint,
        cyan: defaultColors.light.cyan,
        blue: defaultColors.light.blue,
        indigo: defaultColors.light.indigo,
        purple: defaultColors.light.purple,
        pink: defaultColors.light.pink,
        gray: defaultColors.light.gray,
        common: {
            ...defaultColors.light.common
        },
        shadow: {
            xs: `${getCssVar('common-shadowRing', defaultColors.light.common.shadowRing)}, 0px 1px 2px 0px rgba(${getCssVar('common-shadowChannel', defaultColors.light.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')})`,
            sm: `${getCssVar('common-shadowRing', defaultColors.light.common.shadowRing)}, 0px 1px 2px 0px rgba(${getCssVar('common-shadowChannel', defaultColors.light.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')}), 0px 2px 4px 0px rgba(${getCssVar('common-shadowChannel', defaultColors.light.common.shadowChannel)} / ${getCssVar('common-shadowOpacity', defaultColors.light.common.shadowOpacity)})`,
            md: `${getCssVar('common-shadowRing', defaultColors.light.common.shadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('common-shadowChannel', defaultColors.light.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')}), 0px 6px 12px -2px rgba(${getCssVar('common-shadowChannel', defaultColors.light.common.shadowChannel)} / ${getCssVar('common-shadowOpacity', defaultColors.light.common.shadowOpacity)})`,
            lg: `${getCssVar('common-shadowRing', defaultColors.light.common.shadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('common-shadowChannel', defaultColors.light.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')}), 0px 12px 16px -4px rgba(${getCssVar('common-shadowChannel', defaultColors.light.common.shadowChannel)} / ${getCssVar('common-shadowOpacity', defaultColors.light.common.shadowOpacity)})`,
            xl: `${getCssVar('common-shadowRing', defaultColors.light.common.shadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('common-shadowChannel', defaultColors.light.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')}), 0px 20px 24px -4px rgba(${getCssVar('common-shadowChannel', defaultColors.light.common.shadowChannel)} / ${getCssVar('common-shadowOpacity', defaultColors.light.common.shadowOpacity)})`,
        },
        text: {
            primary: getCssVarColor('neutral-9', true),
            secondary: getCssVarColor('neutral-8', true),
            tertiary: getCssVarColor('neutral-7', true),
            icon: getCssVarColor('neutral-6', true),
        },
        background: {
            body: getCssVarColor('common-white', true),
            surface: getCssVarColor('neutral-1', true),
            popup: getCssVarColor('common-white', true),
            level1: getCssVarColor('neutral-2', true),
            level2: getCssVarColor('neutral-3', true),
            level3: getCssVarColor('neutral-4', true),
            tooltip: getCssVarColor('neutral-6', true),
        },
    }

    const darkColorSystem: ColorSystem = {
        mode: 'dark',
        primary: {
            ...defaultColors.dark.primary,
            ...createDarkModeVariantVariables('primary'),
        },
        neutral: {
            ...defaultColors.dark.neutral,
            ...createDarkModeVariantVariables('neutral'),
        },
        danger: {
            ...defaultColors.dark.danger,
            ...createDarkModeVariantVariables('danger'),
        },
        success: {
            ...defaultColors.dark.success,
            ...createDarkModeVariantVariables('success'),
        },
        warning: {
            ...defaultColors.dark.warning,
            ...createDarkModeVariantVariables('warning'),
        },
        red: defaultColors.dark.red,
        orange: defaultColors.dark.orange,
        yellow: defaultColors.dark.yellow,
        green: defaultColors.dark.green,
        mint: defaultColors.dark.mint,
        cyan: defaultColors.dark.cyan,
        blue: defaultColors.dark.blue,
        indigo: defaultColors.dark.indigo,
        purple: defaultColors.dark.purple,
        pink: defaultColors.dark.pink,
        gray: defaultColors.dark.gray,
        common: {
            ...defaultColors.dark.common
        },
        shadow: {
            xs: `${getCssVar('common-shadowRing', defaultColors.dark.common.shadowRing)}, 0px 1px 2px 0px rgba(${getCssVar('common-shadowChannel', defaultColors.dark.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')})`,
            sm: `${getCssVar('common-shadowRing', defaultColors.dark.common.shadowRing)}, 0px 1px 2px 0px rgba(${getCssVar('common-shadowChannel', defaultColors.dark.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')}), 0px 2px 4px 0px rgba(${getCssVar('common-shadowChannel', defaultColors.dark.common.shadowChannel)} / ${getCssVar('common-shadowOpacity', defaultColors.dark.common.shadowOpacity)})`,
            md: `${getCssVar('common-shadowRing', defaultColors.dark.common.shadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('common-shadowChannel', defaultColors.dark.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')}), 0px 6px 12px -2px rgba(${getCssVar('common-shadowChannel', defaultColors.dark.common.shadowChannel)} / ${getCssVar('common-shadowOpacity', defaultColors.dark.common.shadowOpacity)})`,
            lg: `${getCssVar('common-shadowRing', defaultColors.dark.common.shadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('common-shadowChannel', defaultColors.dark.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')}), 0px 12px 16px -4px rgba(${getCssVar('common-shadowChannel', defaultColors.dark.common.shadowChannel)} / ${getCssVar('common-shadowOpacity', defaultColors.dark.common.shadowOpacity)})`,
            xl: `${getCssVar('common-shadowRing', defaultColors.dark.common.shadowRing)}, 0px 2px 8px -2px rgba(${getCssVar('common-shadowChannel', defaultColors.dark.common.shadowChannel)} / ${getCssVar('common-shadowOpacity')}), 0px 20px 24px -4px rgba(${getCssVar('common-shadowChannel', defaultColors.dark.common.shadowChannel)} / ${getCssVar('common-shadowOpacity', defaultColors.dark.common.shadowOpacity)})`,
        },
        text: {
            primary: getCssVarColor('neutral-9', true),
            secondary: getCssVarColor('neutral-8', true),
            tertiary: getCssVarColor('neutral-7', true),
            icon: getCssVarColor('neutral-6', true),
        },
        background: {
            body: getCssVarColor('common-black', true),
            surface: getCssVarColor('neutral-1', true),
            popup: getCssVarColor('common-white', true),
            level1: getCssVarColor('neutral-2', true),
            level2: getCssVarColor('neutral-3', true),
            level3: getCssVarColor('neutral-4', true),
            tooltip: getCssVarColor('neutral-6', true),
        },
    }

    const defaultScales = {
        entries: {
            baseColor,
            colorSchemes: {
                light: lightColorSystem,
                dark: darkColorSystem,
            },
            fontSize,
            fontFamily,
            radius: {
                xs: '2px',
                sm: '6px',
                md: '8px',
                lg: '12px',
                xl: '16px',
            },
            zIndex: {
                badge: 1,
                table: 10,
                popup: 1000,
                modal: 1300,
                snackbar: 1400,
                tooltip: 1500,
            },
        }
    }

    const { colorSchemes, ...mergedScales } = scalesInput
        ? merge(defaultScales.entries, scalesInput)
        : defaultScales.entries;


    const { vars: themeVars, css: themeCss } = prepareCssVars({ colorSchemes, ...mergedScales }, {
        prefix: cssVarPrefix,
        shouldSkipGeneratingVar: (keys: string[]) => {
            //skip mode
            return keys[0] === 'mode'
        }
    })

    let theme: Theme = {
        entries: {
            colorSchemes,
            ...mergedScales
        },
        vars: themeVars,
        css: themeCss
    }
    return loadedTheme = theme
}

function prepareCssVars(theme: any, parserConfig: any) {
    const { colorSchemes = {}, components, defaultColorScheme = 'light', ...otherTheme } = theme;
    let { vars, css, varsWithDefaults } = cssVarsParser(otherTheme, parserConfig)
    let themeVars = varsWithDefaults as VarsScales
    const colorSchemesMap: any = { root: css }
    let scheme: any = {}
    const { [defaultColorScheme]: light, ...otherColorSchemes } = colorSchemes;
    Object.entries(otherColorSchemes || {}).forEach(([key, scheme]) => {
        const { vars, css, varsWithDefaults } = cssVarsParser(scheme, parserConfig);
        scheme = merge(scheme, varsWithDefaults);
        colorSchemesMap[key] = css
    });
    if (light) {
        // default color scheme vars should be merged last to set as default
        const { vars, css, varsWithDefaults } = cssVarsParser(light, parserConfig);
        scheme = merge(scheme, varsWithDefaults);
        colorSchemesMap[defaultColorScheme] = css
    }
    themeVars = merge(themeVars, { scheme })
    return {
        vars: themeVars,
        css: colorSchemesMap,
    }
}

const GlobalColorScheme = createGlobalStyle<{ $root: any, $light: any, $dark: any }>`
    :root, [${schemeAttributeKey}='light'] {
        color-scheme: light;
        ${props => (props.$root)}
        ${props => (props.$light)}
    }
    [${schemeAttributeKey}='dark'] {
        color-scheme: dark;
        ${props => (props.$dark)}
    }
    [${schemeAttributeKey}='system'] {
        @media (prefers-color-scheme: light) {
            color-scheme: light;
            ${props => (props.$light)}
        }
        @media (prefers-color-scheme: dark) {
            color-scheme: dark;
            ${props => (props.$dark)}
        }
    }
`

let _defaultScheme: Scheme = 'light'

function loadedVars(vars: 'root' | 'light' | 'dark') {
    if (loadedTheme) {
        let items = loadedTheme.css[vars]
        let lines: string[] = []
        Object.keys(items).map((k) => {
            let str = `${k}: ${items[k]};\n`
            lines.push(str)
        })
        return lines.join('')
    }
    return ""
}
function root() {
    return css`
        ${loadedVars('root')}
    `
}

function light() {
    return css`
        ${loadedVars('light')}
    `
}
function dark() {
    return css`
        ${loadedVars('dark')}
    `
}

// 获取用户倾向样式
export const getColorPreference = () => {
    return localStorage.getItem(schemeStorageKey)
}

// 设置用户倾向样式
export const setColorPreference = (scheme: Scheme) => {
    localStorage.setItem(schemeStorageKey, scheme)
    reflectPreference()
}
// 应用用户倾向样式
export const reflectPreference = () => {
    let scheme = getColorPreference()
    if (scheme) {
        document.firstElementChild?.setAttribute(schemeAttributeKey, scheme)
    } else {
        if (_defaultScheme != 'light') {
            document.firstElementChild?.setAttribute(schemeAttributeKey, _defaultScheme)
        }
    }
}

// 提前加载全局颜色模式
export const prerenderColorScheme = (theme?: Theme, defaultScheme?: Scheme) => {
    if (!loadedColorScheme) {
        console.log(1111)
        _defaultScheme = defaultScheme || 'light'
        reflectPreference()
        loadedColorScheme = true
        ReactDOM.createRoot(document.createElement('div')).render(
            <GlobalColorScheme $root={root()} $light={light()} $dark={dark()} />
        )
    }
}