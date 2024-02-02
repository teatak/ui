import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom/client'
import { generateColor } from './palette'
import { createGlobalStyle, css } from 'styled-components';
import { baseTheme, mergeBaseTheme } from "./base"

//匹配样式
const matchTheme = (key, theme, index) => {
    if (index !== undefined) {
        return key[theme] ? key[theme][index] : key["base"][index]
    } else {
        return key[theme] ? key[theme] : key["base"]
    }
}

//生成基础样式
const generateStyles = (dark = false) => {
    let lines = []
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

//theme
const storageKey = 'color-scheme'
const attributeKey = 'data-tui-color-scheme'
let loadedColorScheme = false
let loadedVariable = false

const renderSize = () => {
    let lines = []
    for (let i = 1; i <= 50; i++) {
        let str = `--tui-size-${i}: ${i * 4}px;\n`
        if (baseTheme.size[i]) {
            str = `--tui-size-${i}: ${baseTheme.size[i]};\n`
        }
        lines.push(str)
    }

    lines.push(`--tui-size-mini: ${baseTheme.size["mini"] ? baseTheme.size["mini"] : "var(--tui-size-6)"};\n`)
    lines.push(`--tui-size-small: ${baseTheme.size["small"] ? baseTheme.size["small"] : "var(--tui-size-7)"};\n`)
    lines.push(`--tui-size-medium: ${baseTheme.size["medium"] ? baseTheme.size["medium"] : "var(--tui-size-8)"};\n`)
    lines.push(`--tui-size-large: ${baseTheme.size["large"] ? baseTheme.size["large"] : "var(--tui-size-9)"};\n`)

    //空隙
    lines.push(`--tui-size-gap-mini: ${baseTheme.size["gapMini"] ? baseTheme.size["gapMini"] : "var(--tui-size-1)"};\n`)
    lines.push(`--tui-size-gap-small: ${baseTheme.size["gapSmall"] ? baseTheme.size["gapSmall"] : "var(--tui-size-2)"};\n`)
    lines.push(`--tui-size-gap-medium: ${baseTheme.size["gapMedium"] ? baseTheme.size["gapMedium"] : "var(--tui-size-4)"};\n`)
    lines.push(`--tui-size-gap-large: ${baseTheme.size["gapLarge"] ? baseTheme.size["gapLarge"] : "var(--tui-size-6)"};\n`)

    //距离，按钮，输入框，padding
    lines.push(`--tui-size-space-mini: ${baseTheme.size["spaceMini"] ? baseTheme.size["spaceMini"] : "var(--tui-size-2)"};\n`)
    lines.push(`--tui-size-space-small: ${baseTheme.size["spaceSmall"] ? baseTheme.size["spaceSmall"] : "var(--tui-size-3)"};\n`)
    lines.push(`--tui-size-space-medium: ${baseTheme.size["spaceMedium"] ? baseTheme.size["spaceMedium"] : "var(--tui-size-4)"};\n`)
    lines.push(`--tui-size-space-large: ${baseTheme.size["spaceLarge"] ? baseTheme.size["spaceLarge"] : "var(--tui-size-5)"};\n`)

    //填充
    lines.push(`--tui-size-padding-mini: ${baseTheme.size["paddingMini"] ? baseTheme.size["paddingMini"] : "var(--tui-size-2)"};\n`)
    lines.push(`--tui-size-padding-small: ${baseTheme.size["paddingSmall"] ? baseTheme.size["paddingSmall"] : "var(--tui-size-4)"};\n`)
    lines.push(`--tui-size-padding-medium: ${baseTheme.size["paddingMedium"] ? baseTheme.size["paddingMedium"] : "var(--tui-size-6)"};\n`)
    lines.push(`--tui-size-padding-large: ${baseTheme.size["paddingLarge"] ? baseTheme.size["paddingLarge"] : "var(--tui-size-8)"};\n`)

    return lines.join('')
}

const base = () => {
    return css`
        --tui-border-radius-none: ${baseTheme.borderRadius.none};
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

const GlobalVariable = createGlobalStyle`
    :root {
        ${props => (props.$light)}
        ${props => (props.$base)}
    }
`

const GlobalColorScheme = createGlobalStyle`
    [data-tui-color-scheme="light"] {
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

// 获取用户倾向样式
const getColorPreference = () => {
    return localStorage.getItem(storageKey) || "auto"
}

// 应用用户倾向样式
const reflectPreference = () => {
    let theme = getColorPreference()
    document.firstElementChild?.setAttribute(attributeKey, theme)
}

// 提前加载全局变量
export const prerenderVariable = (theme) => {
    if (!loadedVariable) {
        if (theme) {
            mergeBaseTheme(theme)
        }
        loadedVariable = true
        ReactDOM.createRoot(document.createElement("div")).render(
            <GlobalVariable $base={base()} $light={light()} />
        )
    }
}

// 提前加载全局颜色模式
export const prerenderColorScheme = (theme) => {
    if (!loadedColorScheme) {
        if (theme) {
            mergeBaseTheme(theme)
        }
        reflectPreference()
        loadedColorScheme = true
        ReactDOM.createRoot(document.createElement("div")).render(
            <GlobalColorScheme $light={light()} $dark={dark()} />
        )
    }
}

// 提前加载全局样式，在DOM渲染之前加载
export const prerenderGlobalStyle = (theme) => {
    prerenderVariable(theme)
    prerenderColorScheme(theme)
}

export const withGlobalVariable = (WrappedComponent) => {
    prerenderVariable()
    return forwardRef((props, ref) => {
        return <WrappedComponent {...props} ref={ref} />
    })
}