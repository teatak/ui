import ReactDOM from 'react-dom/client'
import { generateColor } from './palette'
import { createGlobalStyle, css } from 'styled-components';
import merge from 'deepmerge'
import React from 'react';

//基础样式
export const baseStyle: any = {
    base: {
        // color
        primary: "rgb(0, 122, 255)",
        red: "rgb(255, 59, 48)",
        orange: "rgb(255, 149, 0)",
        yellow: "rgb(255, 204, 0)",
        green: "rgb(52, 199, 89)",
        mint: "rgb(0, 199, 190)",
        cyan: "rgb(50, 173, 230)",
        blue: "rgb(0, 122, 255)",
        indigo: "rgb(88, 86, 214)",
        purple: "rgb(175, 82, 222)",
        pink: "rgb(255, 45, 85)",
        gray: "rgb(130, 130, 130)",
    },
    backgroundColor: {
        base: {
            0: "rgb(255, 255, 255)",
            1: "rgb(var(--tui-gray-9))",
            2: "rgb(var(--tui-gray-8))",
            3: "rgb(var(--tui-gray-6))",
            4: "rgb(var(--tui-gray-4))",
        },
        light: {
            0: "rgb(255, 255, 255)",
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
        dark: {
            0: "rgb(30, 30, 30)",
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
    },
    textColor: {
        base: {
            1: "rgb(var(--tui-gray-10))",
            2: "rgb(var(--tui-gray-8))",
            3: "rgb(var(--tui-gray-6))",
            4: "rgb(var(--tui-gray-4))",
        },
        light: {
            1: "rgb(var(--tui-gray-10))",
            2: "rgb(var(--tui-gray-8))",
            3: "rgb(var(--tui-gray-6))",
            4: "rgb(var(--tui-gray-4))",
        },
        dark: {
            1: "rgb(var(--tui-gray-10))",
            2: "rgb(var(--tui-gray-8))",
            3: "rgb(var(--tui-gray-6))",
            4: "rgb(var(--tui-gray-4))",
        },
    },
    borderColor: {
        base: {
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
        light: {
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
        dark: {
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
    },
    borderRadius: {
        none: 0,
        small: "2px",
        medium: "4px",
        large: "8px",
        circle: "50%",
    },
    size: {
        mini: "24px",
        small: "28px",
        medium: "32px",
        large: "36px",
    }
}

//合并基础样式
export const mergeBaseStyle = (style: any) => {
    if (style) {
        merge(baseStyle, style)
    }
    return baseStyle
}

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
    Object.keys(baseStyle.base).map((k) => {
        let v = baseStyle.base[k]
        let rgbs = generateColor(v, { dark: dark })
        for (let i = 1; i <= 10; i++) {
            console.log(rgbs[i])
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
        if (baseStyle.size[i]) {
            str = `--tui-size-${i}: ${baseStyle.size[i]};\n`
        }
        lines.push(str)
    }

    lines.push(`--tui-size-mini: ${baseStyle.size["mini"] ? baseStyle.size["mini"] : "var(--tui-size-6)"};\n`)
    lines.push(`--tui-size-small: ${baseStyle.size["small"] ? baseStyle.size["small"] : "var(--tui-size-7)"};\n`)
    lines.push(`--tui-size-medium: ${baseStyle.size["medium"] ? baseStyle.size["medium"] : "var(--tui-size-8)"};\n`)
    lines.push(`--tui-size-large: ${baseStyle.size["large"] ? baseStyle.size["large"] : "var(--tui-size-9)"};\n`)

    return lines.join('')
}

export const base = () => {
    return css`
        --tui-border-radius-none: ${baseStyle.borderRadius.none};
        --tui-border-radius-small: ${baseStyle.borderRadius.small};
        --tui-border-radius-medium: ${baseStyle.borderRadius.medium};
        --tui-border-radius-large: ${baseStyle.borderRadius.large};
        --tui-border-radius-circle: ${baseStyle.borderRadius.circle};

        ${renderSize()}
    `
}
export const light = () => {
    const theme = "light"
    return css`
        color-scheme: ${theme};

        ${generateStyles(false)}

        /* text */
        --tui-text-color-1: ${matchTheme(baseStyle.textColor, theme, 1)};
        --tui-text-color-2: ${matchTheme(baseStyle.textColor, theme, 2)};
        --tui-text-color-3: ${matchTheme(baseStyle.textColor, theme, 3)};
        --tui-text-color-4: ${matchTheme(baseStyle.textColor, theme, 4)};

        /* background */
        --tui-background-color: ${matchTheme(baseStyle.backgroundColor, theme, 0)};
        --tui-background-color-1: ${matchTheme(baseStyle.backgroundColor, theme, 1)};
        --tui-background-color-2: ${matchTheme(baseStyle.backgroundColor, theme, 2)};
        --tui-background-color-3: ${matchTheme(baseStyle.backgroundColor, theme, 3)};
        --tui-background-color-4: ${matchTheme(baseStyle.backgroundColor, theme, 4)};

        /* border */
        --tui-border-color-1: ${matchTheme(baseStyle.borderColor, theme, 1)};
        --tui-border-color-2: ${matchTheme(baseStyle.borderColor, theme, 2)};
        --tui-border-color-3: ${matchTheme(baseStyle.borderColor, theme, 3)};
        --tui-border-color-4: ${matchTheme(baseStyle.borderColor, theme, 4)};
    `
}

export const dark = () => {
    const theme = "dark"
    return css`
        color-scheme: ${theme};

        /* text */
        --tui-text-color-1: ${matchTheme(baseStyle.textColor, theme, 1)};
        --tui-text-color-2: ${matchTheme(baseStyle.textColor, theme, 2)};
        --tui-text-color-3: ${matchTheme(baseStyle.textColor, theme, 3)};
        --tui-text-color-4: ${matchTheme(baseStyle.textColor, theme, 4)};

        /* background */
        --tui-background-color: ${matchTheme(baseStyle.backgroundColor, theme, 0)};
        --tui-background-color-1: ${matchTheme(baseStyle.backgroundColor, theme, 1)};
        --tui-background-color-2: ${matchTheme(baseStyle.backgroundColor, theme, 2)};
        --tui-background-color-3: ${matchTheme(baseStyle.backgroundColor, theme, 3)};
        --tui-background-color-4: ${matchTheme(baseStyle.backgroundColor, theme, 4)};

        /* border */
        --tui-border-color-1: ${matchTheme(baseStyle.borderColor, theme, 1)};
        --tui-border-color-2: ${matchTheme(baseStyle.borderColor, theme, 2)};
        --tui-border-color-3: ${matchTheme(baseStyle.borderColor, theme, 3)};
        --tui-border-color-4: ${matchTheme(baseStyle.borderColor, theme, 4)};
    `
}

export const Global = () => {
    let _base = base()
    let _light = light()
    let _dark = dark()
    const G = createGlobalStyle`
        :root {
            ${_base}
        }
        :root, [data-tui-color-scheme="light"] {
            ${_light}
        }
        [data-tui-color-scheme="dark"] {
            ${_dark}
        }
        [data-tui-color-scheme="auto"] {
            @media (prefers-color-scheme: light) {
                ${_light}
            }
            @media (prefers-color-scheme: dark) {
                ${_dark}
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
    return <G />
}

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
export const prerenderGlobalStyle = (style?: any) => {
    if (!loaded) {
        if (style) {
            mergeBaseStyle(style)
        }
        ReactDOM.createRoot(document.createElement("div")).render(
            <Global />
        )
        reflectPreference()
        loaded = true
    }
}

// 全局样式
export const GlobalStyle = (props: any) => {
    if (!loaded) {
        const { style } = props
        if (style) {
            mergeBaseStyle(style)
        }
        reflectPreference()
        loaded = true
        return <Global />
    } else {
        return null
    }
}
