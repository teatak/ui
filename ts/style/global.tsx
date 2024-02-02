import React from 'react';
import ReactDOM from 'react-dom/client'
import { generateColor } from './palette'
import { createGlobalStyle, css } from 'styled-components';
import { baseTheme, mergeBaseTheme } from "./base"
import e from 'express';

//匹配样式
const matchTheme = (key: any, theme: string, index: number | undefined) => {
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

//theme
const storageKey = 'color-scheme'
const attributeKey = 'data-tui-color-scheme'
let loaded = false

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
        color-scheme: ${theme};

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
        color-scheme: ${theme};

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

const Global = createGlobalStyle<{ $base: any; $light: any; $dark: any }>`
    :root {
        ${props => (props.$base)}
    }
    :root, [data-tui-color-scheme="light"] {
        ${props => (props.$light)}
    }
    [data-tui-color-scheme="dark"] {
        ${props => (props.$dark)}
    }
    [data-tui-color-scheme="auto"] {
        @media (prefers-color-scheme: light) {
            ${props => (props.$light)}
        }
        @media (prefers-color-scheme: dark) {
            ${props => (props.$dark)}
        }
    }
    body {
        font-size: 14px;
        background-color: var(--tui-background-color);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
    }
    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
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

// 提前加载全局样式，在DOM渲染之前加载
export const prerenderGlobalStyle = (theme?: any) => {
    if (!loaded) {
        if (theme) {
            mergeBaseTheme(theme)
        }
        ReactDOM.createRoot(document.createElement("div")).render(
            <Global $base={base()} $light={light()} $dark={dark()} />
        )
        reflectPreference()
        loaded = true
    }
}

// 全局样式
export const GlobalStyle = (props: any) => {
    if (!loaded) {
        const { theme } = props
        if (theme) {
            mergeBaseTheme(theme)
        }
        reflectPreference()
        loaded = true
        return <Global $base={base()} $light={light()} $dark={dark()} />
    } else {
        return null
    }
}
