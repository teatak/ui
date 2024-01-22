import { css } from '@emotion/react'
import { generateColor } from './color'
import { mergeDeep } from '../helper/common'

//基础样式
export const baseStyle = {
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
const matchTheme = (key, theme, index) => {
    if (index !== undefined) {
        return key[theme] ? key[theme][index] : key["base"][index]
    } else {
        return key[theme] ? key[theme] : key["base"]
    }
}
//合并基础样式
export const mergeBaseStyle = (style) => {
    if (style) {
        mergeDeep(baseStyle, style)
    }
    return baseStyle
}

//生成样式
const generateStyle = (key, { dark = false, gray = false }) => {
    //option = Object.assign({ dark: false, gray: false }, option)
    let lines = []
    let color = {}
    const option = { dark, gray }
    switch (key) {
        case "primary":
            color = generateColor(baseStyle.base.primary, option)
            break
        case "red":
            color = generateColor(baseStyle.base.red, option)
            break
        case "orange":
            color = generateColor(baseStyle.base.orange, option)
            break
        case "yellow":
            color = generateColor(baseStyle.base.yellow, option)
            break
        case "green":
            color = generateColor(baseStyle.base.green, option)
            break
        case "mint":
            color = generateColor(baseStyle.base.mint, option)
            break
        case "cyan":
            color = generateColor(baseStyle.base.cyan, option)
            break
        case "blue":
            color = generateColor(baseStyle.base.blue, option)
            break
        case "indigo":
            color = generateColor(baseStyle.base.indigo, option)
            break
        case "purple":
            color = generateColor(baseStyle.base.purple, option)
            break
        case "pink":
            color = generateColor(baseStyle.base.pink, option)
            break
        case "gray":
            color = generateColor(baseStyle.base.gray, option)
            break
        default:
            color = generateColor(baseStyle.base.blue, option)
            break
    }

    for (let i = 1; i <= 10; i++) {
        let str = `--tui-${key}-${i}: ${color[i]};\n`
        lines.push(str)
    }
    return lines.join('')
}

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
//浅色模式
export const light = () => {
    const theme = "light"
    return css`
        color-scheme: ${theme};
        ${generateStyle("primary", {})}
        ${generateStyle("red", {})}
        ${generateStyle("orange", {})}
        ${generateStyle("yellow", {})}
        ${generateStyle("green", {})}
        ${generateStyle("mint", {})}
        ${generateStyle("cyan", {})}
        ${generateStyle("blue", {})}
        ${generateStyle("indigo", {})}
        ${generateStyle("purple", {})}
        ${generateStyle("pink", {})}
        ${generateStyle("gray", { gray: true })}

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

//深色模式
export const dark = () => {
    const theme = "dark"
    return css`
        color-scheme: ${theme};
        ${generateStyle("primary", { dark: true })}
        ${generateStyle("red", { dark: true })}
        ${generateStyle("orange", { dark: true })}
        ${generateStyle("yellow", { dark: true })}
        ${generateStyle("green", { dark: true })}
        ${generateStyle("mint", { dark: true })}
        ${generateStyle("cyan", { dark: true })}
        ${generateStyle("blue", { dark: true })}
        ${generateStyle("indigo", { dark: true })}
        ${generateStyle("purple", { dark: true })}
        ${generateStyle("pink", { dark: true })}
        ${generateStyle("gray", { dark: true, gray: true })}
        
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

//全局样式
export const globalStyle = () => {
    let _light = light()
    let _dark = dark()
    let _base = base()
    return css`
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
        /* Make clicks pass-through */
        #nprogress {
            pointer-events: none;
        }
        #nprogress .bar {
            background: rgb(var(--tui-blue-6));
            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
        }
        /* Fancy blur effect */
        #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px rgb(var(--tui-blue-6)), 0 0 5px rgb(var(--tui-blue-6));
            opacity: 1;
            transform: rotate(3deg) translate(0px, -4px);
        }
        .tui-content-page {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            .tui-spinner {
                width: 2em;
                height: 2em;
                animation: spinner 1s linear infinite; 
                circle {
                    :first-of-type {
                        fill: none;
                        stroke: var(--tt-color-icon-primary);
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-opacity: 0.35;
                    }
                    :last-of-type {
                        fill: none;
                        stroke: var(--tt-color-icon-primary);;
                        stroke-width: 2;
                        stroke-linecap: round;
                        stroke-dasharray: 10, 100;
                    }
                }
            }
        }
        @keyframes spinner {
            100% {
                transform: rotate(360deg);
            }
        }
    `
}
