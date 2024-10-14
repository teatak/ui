import React from 'react'
import ReactDOM from 'react-dom/client'
import { Theme, ThemeScales, Palette, DefaultColorScheme, BaseColor, Color, ColorName, ColorTone, ColorVariant, ThemeVars } from "./types";
import { merge, Partial2Level, Partial3Level } from '../helper/common'
import { generateColor } from "./color";
import { cssVarsParser } from './cssVarsParser'
import { RuleSet, StyledObject, createGlobalStyle, css } from 'styled-components'

export type ColorSystemOptions = Partial3Level<Palette>

export type ColorOptions = Partial3Level<Color>

export interface ThemeOptions extends Partial2Level<ThemeScales> {
    cssVarPrefix?: string
    colorSchemes?: Partial<Record<DefaultColorScheme, ColorSystemOptions>>
    baseColor?: Partial<BaseColor>
    color?: ColorOptions
}

//theme
export type Mode = 'system' | 'light' | 'dark'
const schemeStorageKey = 'color-scheme'
const schemeAttributeKey = 'data-color-scheme'
let loadedColorScheme = false
let loadedThemeOptions: ThemeOptions
let loadedTheme: Theme

export const themeChanged = (themeOptions?: ThemeOptions) => {
    let nextOptions = merge(themeOptions || {}, loadedThemeOptions)
    if (JSON.stringify(nextOptions) == JSON.stringify(loadedThemeOptions)) {
        return false
    } else {
        loadedThemeOptions = nextOptions
        return true
    }
}

export const mergeStyleOverrides = (name: string, options: any): RuleSet<object> => {
    const theme = loadedTheme
    if (theme) {
        let overrides
        if (theme.entries.components) {
            //@ts-ignore
            const component = theme.entries.components[name]
            if (component) {
                overrides = component.styleOverrides
            }
        }
        let themeStyleOverrides = typeof overrides === 'function' ? overrides(options) : overrides
        let comStyleOverrides = typeof options.styleOverrides === 'function' ? options.styleOverrides(options) : options.styleOverrides
        return [...css`${themeStyleOverrides}${comStyleOverrides}`]
    }
    return []
}

export function createTheme(themeOptions?: ThemeOptions, defaultColorScheme: DefaultColorScheme = 'light'): Theme {
    const changed = themeChanged(themeOptions)
    if (!changed) {
        return loadedTheme
    }
    const {
        cssVarPrefix = 'tui',
        ...scalesInput
    } = themeOptions || {};

    const defaultColors = {
        common: {
            white: 'white',
            black: 'black',
        }
    }

    const baseColor = {
        // color
        primary: 'rgb(41, 90, 205)',
        neutral: 'rgb(152, 152, 152)',
        danger: 'rgb(205, 41, 41)',
        success: 'rgb(41, 205, 41)',
        warning: 'rgb(205, 145, 41)',
        ...scalesInput.baseColor
    }

    const makeColors = (dark: boolean) => {
        let o = {} as Color
        Object.keys(baseColor).map((k: ColorName) => {
            let _color = baseColor[k]
            if (_color) {
                const range = {
                    ...generateColor(_color, { dark }),
                }
                o[k] = range
            } else {
                throw new Error(`color ${k} undefined`)
            }
        })
        return o
    }


    const lightColors = makeColors(false)
    const darkColors = makeColors(true)

    const createLightModeVariables = (color: ColorName): ColorTone & ColorVariant => {
        const isLight = true
        return {
            ...lightColors[color] as ColorTone,
            dark: getCssVarColor(`${color}-70`, isLight),
            onDark: getCssVar('common-white', defaultColors.common.white),

            main: getCssVarColor(`${color}-55`, isLight),
            onMain: getCssVar('common-white', defaultColors.common.white),

            container: getCssVarColor(`${color}-10`, isLight),
            onContainer: getCssVarColor(`${color}-90`, isLight),

            light: getCssVarColor(`${color}-5`, isLight),
            onLight: getCssVarColor(`${color}-90`, isLight),
        }
    }

    const createDarkModeVariables = (color: ColorName): ColorTone & ColorVariant => {
        const isLight = false
        return {
            ...darkColors[color] as ColorTone,
            dark: getCssVarColor(`${color}-70`, isLight),
            onDark: getCssVar('common-white', defaultColors.common.white),

            main: getCssVarColor(`${color}-55`, isLight),
            onMain: getCssVar('common-white', defaultColors.common.white),

            container: getCssVarColor(`${color}-10`, isLight),
            onContainer: getCssVarColor(`${color}-90`, isLight),

            light: getCssVarColor(`${color}-5`, isLight),
            onLight: getCssVarColor(`${color}-90`, isLight),
        }
    }

    const loadColorsVariables = (scheme: 'light' | 'dark') => {
        let o = {} as Record<ColorName, ColorTone & ColorVariant>
        Object.keys(baseColor).map((k: ColorName) => {
            if (scheme == 'light') {
                o[k] = {
                    ...createLightModeVariables(k),
                }
            } else {
                o[k] = {
                    ...createDarkModeVariables(k),
                }
            }
        })
        return o
    }

    const getCssVar = (cssVar?: string, fallback?: string) => {
        return `var(--${cssVarPrefix}-${cssVar}${fallback ? `, ${fallback}` : ''})`
    }

    const getCssVarColor = (cssVar: string, light: boolean) => {
        const tokens = cssVar.split('-');
        const color = tokens[0];
        const index = tokens[1];

        // @ts-ignore
        return `rgb(var(--${cssVarPrefix}-${cssVar}, ${light ? lightColors[color]?.[index] : darkColors[color]?.[index]}))`
    }

    const fontFamilyFallback = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';


    const lightColorSystem: Palette = {
        mode: 'light',
        ...loadColorsVariables('light'),
        common: {
            ...defaultColors.common
        },
        surface: {
            //dim
            dark: getCssVarColor('neutral-20', true),
            onDark: getCssVarColor('neutral-95', true),
            //main
            main: getCssVarColor('neutral-10', true),
            onMain: getCssVarColor('neutral-95', true),
            //container
            container: getCssVarColor('neutral-5', true),
            onContainer: getCssVarColor('neutral-95', true),
            //body
            body: getCssVar('common-white', defaultColors.common.white),
            onBody: getCssVarColor('neutral-95', true),
            //inverse
            inverseMain: getCssVarColor('neutral-90', true),
            inverseOnMain: getCssVarColor('neutral-5', true),
        },
    }

    const darkColorSystem: Palette = {
        mode: 'dark',
        ...loadColorsVariables('dark'),
        common: {
            ...defaultColors.common
        },
        surface: {
            //dim
            dark: getCssVarColor('neutral-15', false),
            onDark: getCssVarColor('neutral-95', false),
            //main
            main: getCssVarColor('neutral-10', false),
            onMain: getCssVarColor('neutral-95', false),
            //container
            container: getCssVarColor('neutral-5', false),
            onContainer: getCssVarColor('neutral-95', false),
            //body
            body: getCssVarColor('neutral-0', false),
            onBody: getCssVarColor('neutral-95', false),
            //inverse
            inverseMain: getCssVarColor('neutral-90', false),
            inverseOnMain: getCssVarColor('neutral-5', false),
        },
    }

    const defaultScales = {
        entries: {
            defaultColorScheme: defaultColorScheme,
            baseColor: baseColor,
            color: lightColors,
            colorSchemes: {
                light: lightColorSystem,
                dark: darkColorSystem,
            },
            breakpoint: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
            fontFamily: {
                body: `"Inter", ${getCssVar(`fontFamily-fallback`, fontFamilyFallback)}`,
                display: `"Inter", ${getCssVar(`fontFamily-fallback`, fontFamilyFallback)}`,
                code: 'Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
                fallback: fontFamilyFallback,
            },
            fontSize: {
                xs: '0.625rem', // 10px
                sm: '0.75rem', // 12px
                md: '0.875rem', // 14px
                lg: '1rem', // 16px
                xl: '1.125rem', // 18px
                xl2: '1.25rem', // 20px
                xl3: '1.5rem', // 24px
                xl4: '2rem', //32px
            },
            lineHeight: {
                xs: '1.33334', // largest font sizes: h1, h2
                sm: '1.42858', // normal font sizes
                md: '1.5', // normal font sizes
                lg: '1.55556', // large font sizes for components
                xl: '1.66667', // smallest font sizes
            },
            radius: {
                xs: '2px',
                sm: '4px',
                md: '6px',
                lg: '8px',
                xl: '12px',
            },
            shadow: {
                xs: 'rgba(0, 0, 0, 0.08) 0px 1px 2px 0px',
                sm: 'rgba(0, 0, 0, 0.08) 0px 1px 2px 0px, rgba(0, 0, 0, 0.08) 0px 2px 4px 0px',
                md: 'rgba(0, 0, 0, 0.08) 0px 2px 8px -2px, rgba(0, 0, 0, 0.08) 0px 6px 12px -2px',
                lg: 'rgba(0, 0, 0, 0.08) 0px 2px 8px -2px, rgba(0, 0, 0, 0.08) 0px 12px 16px -4px',
                xl: 'rgba(0, 0, 0, 0.08) 0px 2px 8px -2px, rgba(0, 0, 0, 0.08) 0px 20px 24px -4px ',
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
    } as unknown as Theme

    const { colorSchemes, ...mergedScales } = scalesInput
        ? merge(defaultScales.entries, scalesInput)
        : defaultScales.entries;

    const { vars: themeVars, css: themeCss } = prepareCssVars({ colorSchemes, ...mergedScales }, {
        prefix: cssVarPrefix,
        shouldSkipGeneratingVar: (keys: string[]) => {
            //skip mode
            return keys[0] === 'breakpoints' || keys[0] === 'mode'
        }
    })

    let theme: Theme = {
        entries: {
            colorSchemes,
            ...mergedScales
        },
        vars: themeVars,
        css: themeCss,
    }
    // theme.vars.palette.warning

    return loadedTheme = theme
}

function prepareCssVars(theme: any, parserConfig: any) {
    const { colorSchemes = {}, color, baseColor, components, defaultColorScheme = 'light', ...otherTheme } = theme;
    let { vars, css, varsWithDefaults } = cssVarsParser(otherTheme, parserConfig)
    let themeVars = varsWithDefaults as ThemeVars
    const colorSchemesMap: any = { root: css }
    let palette: any = {}

    const { [defaultColorScheme]: light, ...otherColorSchemes } = colorSchemes;
    Object.entries(otherColorSchemes || {}).forEach(([key, _scheme]) => {
        //let  _scheme = Object.assign({},scheme)
        const { vars, css, varsWithDefaults } = cssVarsParser(_scheme, parserConfig);
        palette = merge(palette, varsWithDefaults);
        colorSchemesMap[key] = css
    });
    if (light) {
        // default color scheme vars should be merged last to set as default
        const { vars, css, varsWithDefaults } = cssVarsParser(light, parserConfig);
        palette = merge(palette, varsWithDefaults);
        colorSchemesMap[defaultColorScheme] = css
    }
    themeVars = merge(themeVars, { palette })
    return {
        vars: themeVars,
        css: colorSchemesMap,
    }
}
let _defaultMode: Mode = 'system'

const GlobalColorScheme = createGlobalStyle<{ $defaultMode: Mode, $root: any, $light: any, $dark: any, $customCss: any }>`
  ${props => {
        return css`
            :root {
                ${props.$root}
            }
            ${props.$defaultMode === 'dark' ?
                css`
                    [${schemeAttributeKey}='light'] {
                        color-scheme: light;
                        ${props.$light}
                    }
                    :root, [${schemeAttributeKey}='dark'] {
                        color-scheme: dark;
                        ${props.$dark}
                    }
                ` :
                css`
                    :root, [${schemeAttributeKey}='light'] {
                        color-scheme: light;
                        ${props.$light}
                    }
                    [${schemeAttributeKey}='dark'] {
                        color-scheme: dark;
                        ${props.$dark}
                    }
                `}
            [${schemeAttributeKey}='system'] {
                @media (prefers-color-scheme: light) {
                    color-scheme: light;
                    ${props.$light}
                }
                @media (prefers-color-scheme: dark) {
                    color-scheme: dark;
                    ${props.$dark}
                }
            }
            ${props.$customCss}
        `
    }}
`

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

// 获取用户倾向样式
export const getMode = () => {
    const scheme = localStorage.getItem(schemeStorageKey)
    if (scheme) {
        return scheme
    } else {
        return _defaultMode
    }
}

export const detectMode = () => {
    const scheme = localStorage.getItem(schemeStorageKey)
    if (scheme === "system" || scheme === null) {
        let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        return isDark ? 'dark' : 'light'
    } else {
        return scheme
    }

}
// 设置用户倾向样式
export const setMode = (scheme: Mode) => {
    localStorage.setItem(schemeStorageKey, scheme)
    reflectMode()
}
// 设置用户倾向样式
export const restoreMode = () => {
    localStorage.removeItem(schemeStorageKey)
    reflectMode()
}
// 应用用户倾向样式
export const reflectMode = () => {
    const scheme = localStorage.getItem(schemeStorageKey)
    if (scheme) {
        document.firstElementChild?.setAttribute(schemeAttributeKey, scheme)
    } else {
        if (_defaultMode == 'system') {
            document.firstElementChild?.setAttribute(schemeAttributeKey, _defaultMode)
        }
    }
}

export const prerenderStyle = (defaultMode: Mode = 'system', customCss?: any) => {
    if (!loadedColorScheme) {
        if (defaultMode) {
            _defaultMode = defaultMode
        }
        reflectMode()
        loadedColorScheme = true
        ReactDOM.createRoot(document.createElement('div')).render(
            <GlobalColorScheme
                $defaultMode={_defaultMode}
                $root={css`
                    ${loadedVars('root')}
                `}
                $light={css`
                    ${loadedVars('light')}
                `}
                $dark={css`
                    ${loadedVars('dark')}
                `}
                $customCss={customCss}
            />
        )
    }
}