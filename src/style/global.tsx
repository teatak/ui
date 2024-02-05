import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom/client'
import { generateColor } from './palette'
import { createGlobalStyle, css } from 'styled-components';
import { baseTheme, mergeBaseTheme } from "./base"

//匹配样式
const matchTheme = (key: any, theme: string, index?: number) => {
    if (index !== undefined) {
        return key[theme] ? key[theme][index] : key["base"][index]
    } else {
        return key[theme] ? key[theme] : key["base"]
    }
}

//生成基础样式
const generateStyles = (dark: boolean = false) => {
    let lines: string[] = []
    Object.keys(baseTheme.base).map((k) => {
        let v = baseTheme.base[k]
        let rgbs = generateColor(v, { dark: dark })
        for (let i = 1; i <= 10; i++) {
            let str = `--tui-${k}-${i}: ${rgbs[i]};\n`
            lines.push(str)
        }
    })
    return lines.join('')
}

const renderSize = () => {
    let lines = []
    for (let i = 1; i <= 50; i++) {
        let str = `--tui-size-${i}: ${i * 4}px;\n`
        if (baseTheme.size[i]) {
            str = `--tui-size-${i}: ${baseTheme.size[i]};\n`
        }
        lines.push(str)
    }

    lines.push(`--tui-size-tiny: ${baseTheme.size["tiny"] ? baseTheme.size["tiny"] : "var(--tui-size-6)"};\n`)
    lines.push(`--tui-size-small: ${baseTheme.size["small"] ? baseTheme.size["small"] : "var(--tui-size-7)"};\n`)
    lines.push(`--tui-size-medium: ${baseTheme.size["medium"] ? baseTheme.size["medium"] : "var(--tui-size-8)"};\n`)
    lines.push(`--tui-size-large: ${baseTheme.size["large"] ? baseTheme.size["large"] : "var(--tui-size-9)"};\n`)

    //空隙
    lines.push(`--tui-size-gap-tiny: ${baseTheme.size["gapTiny"] ? baseTheme.size["gapTiny"] : "var(--tui-size-1)"};\n`)
    lines.push(`--tui-size-gap-small: ${baseTheme.size["gapSmall"] ? baseTheme.size["gapSmall"] : "var(--tui-size-2)"};\n`)
    lines.push(`--tui-size-gap-medium: ${baseTheme.size["gapMedium"] ? baseTheme.size["gapMedium"] : "var(--tui-size-4)"};\n`)
    lines.push(`--tui-size-gap-large: ${baseTheme.size["gapLarge"] ? baseTheme.size["gapLarge"] : "var(--tui-size-6)"};\n`)

    //距离，按钮，输入框，padding
    lines.push(`--tui-size-space-tiny: ${baseTheme.size["spaceTiny"] ? baseTheme.size["spaceTiny"] : "var(--tui-size-2)"};\n`)
    lines.push(`--tui-size-space-small: ${baseTheme.size["spaceSmall"] ? baseTheme.size["spaceSmall"] : "var(--tui-size-3)"};\n`)
    lines.push(`--tui-size-space-medium: ${baseTheme.size["spaceMedium"] ? baseTheme.size["spaceMedium"] : "var(--tui-size-4)"};\n`)
    lines.push(`--tui-size-space-large: ${baseTheme.size["spaceLarge"] ? baseTheme.size["spaceLarge"] : "var(--tui-size-5)"};\n`)

    //填充
    lines.push(`--tui-size-padding-tiny: ${baseTheme.size["paddingTiny"] ? baseTheme.size["paddingTiny"] : "var(--tui-size-2)"};\n`)
    lines.push(`--tui-size-padding-small: ${baseTheme.size["paddingSmall"] ? baseTheme.size["paddingSmall"] : "var(--tui-size-4)"};\n`)
    lines.push(`--tui-size-padding-medium: ${baseTheme.size["paddingMedium"] ? baseTheme.size["paddingMedium"] : "var(--tui-size-6)"};\n`)
    lines.push(`--tui-size-padding-large: ${baseTheme.size["paddingLarge"] ? baseTheme.size["paddingLarge"] : "var(--tui-size-8)"};\n`)

    return lines.join('')
}

const base = () => {
    return css`
        --tui-border-radius-none: ${baseTheme.borderRadius.none};
        --tui-border-radius-tiny: ${baseTheme.borderRadius.small};
        --tui-border-radius-small: ${baseTheme.borderRadius.small};
        --tui-border-radius-medium: ${baseTheme.borderRadius.medium};
        --tui-border-radius-large: ${baseTheme.borderRadius.large};
        --tui-border-radius-circle: ${baseTheme.borderRadius.circle};

        ${renderSize()}
    `
}

const light = () => {
    const theme = "light"
    return css`
        ${generateStyles(false)}

        /* text */
        --tui-text-color-1: ${matchTheme(baseTheme.textColor, theme, 1)};
        --tui-text-color-2: ${matchTheme(baseTheme.textColor, theme, 2)};
        --tui-text-color-3: ${matchTheme(baseTheme.textColor, theme, 3)};
        --tui-text-color-4: ${matchTheme(baseTheme.textColor, theme, 4)};

        /* background */
        --tui-background-color: ${matchTheme(baseTheme.backgroundColor, theme, 0)};
        --tui-background-color-1: ${matchTheme(baseTheme.backgroundColor, theme, 1)};
        --tui-background-color-2: ${matchTheme(baseTheme.backgroundColor, theme, 2)};
        --tui-background-color-3: ${matchTheme(baseTheme.backgroundColor, theme, 3)};
        --tui-background-color-4: ${matchTheme(baseTheme.backgroundColor, theme, 4)};

        /* border */
        --tui-border-color-1: ${matchTheme(baseTheme.borderColor, theme, 1)};
        --tui-border-color-2: ${matchTheme(baseTheme.borderColor, theme, 2)};
        --tui-border-color-3: ${matchTheme(baseTheme.borderColor, theme, 3)};
        --tui-border-color-4: ${matchTheme(baseTheme.borderColor, theme, 4)};
    `
}

const dark = () => {
    const theme = "dark"
    return css`
        ${generateStyles(true)}

        /* text */
        --tui-text-color-1: ${matchTheme(baseTheme.textColor, theme, 1)};
        --tui-text-color-2: ${matchTheme(baseTheme.textColor, theme, 2)};
        --tui-text-color-3: ${matchTheme(baseTheme.textColor, theme, 3)};
        --tui-text-color-4: ${matchTheme(baseTheme.textColor, theme, 4)};

        /* background */
        --tui-background-color: ${matchTheme(baseTheme.backgroundColor, theme, 0)};
        --tui-background-color-1: ${matchTheme(baseTheme.backgroundColor, theme, 1)};
        --tui-background-color-2: ${matchTheme(baseTheme.backgroundColor, theme, 2)};
        --tui-background-color-3: ${matchTheme(baseTheme.backgroundColor, theme, 3)};
        --tui-background-color-4: ${matchTheme(baseTheme.backgroundColor, theme, 4)};

        /* border */
        --tui-border-color-1: ${matchTheme(baseTheme.borderColor, theme, 1)};
        --tui-border-color-2: ${matchTheme(baseTheme.borderColor, theme, 2)};
        --tui-border-color-3: ${matchTheme(baseTheme.borderColor, theme, 3)};
        --tui-border-color-4: ${matchTheme(baseTheme.borderColor, theme, 4)};
    `
}

const GlobalVariable = createGlobalStyle<{ $base: any, $light: any }>`
    :root {
        ${props => (props.$light)}
        ${props => (props.$base)}
    }
`

const GlobalColorScheme = createGlobalStyle<{ $light: any, $dark: any }>`
    :root, [data-tui-color-scheme="light"] {
        color-scheme: light;
        ${props => (props.$light)}
    }
    [data-tui-color-scheme="dark"] {
        color-scheme: dark;
        ${props => (props.$dark)}
    }
    [data-tui-color-scheme="auto"] {
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
//theme
const storageKey = 'color-scheme'
const attributeKey = 'data-tui-color-scheme'
let loadedColorScheme = false
// let loadedVariable = false
let loadedTheme = {}

// 获取用户倾向样式
const getColorPreference = () => {
    return localStorage.getItem(storageKey) || "auto"
}

// 应用用户倾向样式
const reflectPreference = () => {
    let theme = getColorPreference()
    document.firstElementChild?.setAttribute(attributeKey, theme)
}

const themeChange = (theme?: any) => {
    let nextTheme = theme
    if (JSON.stringify(nextTheme) == JSON.stringify(loadedTheme)) {
        return false
    } else {
        loadedTheme = theme
        return true
    }
}
// 提前加载全局变量
export const prerenderVariable = (theme?: any) => {
    if (themeChange()) {
        mergeBaseTheme(theme)
        ReactDOM.createRoot(document.createElement("div")).render(
            <GlobalVariable $base={base()} $light={light()} />
        )
    }
}

// 提前加载全局颜色模式
export const prerenderColorScheme = (theme?: any) => {
    if (!loadedColorScheme) {
        mergeBaseTheme(theme)
        reflectPreference()
        loadedColorScheme = true
        ReactDOM.createRoot(document.createElement("div")).render(
            <GlobalColorScheme $light={light()} $dark={dark()} />
        )
    }
}

// 提前加载全局样式，在DOM渲染之前加载
export const prerenderGlobalStyle = (theme?: any) => {
    if (!loadedColorScheme) {
        prerenderVariable(theme)
        prerenderColorScheme(theme)
    }
}

export function withGlobalVariable<P>(WrappedComponent: React.ComponentType<P>) {
    prerenderVariable()
    return forwardRef((props: P, ref) => {
        return <WrappedComponent {...props} ref={ref} />
    })
}