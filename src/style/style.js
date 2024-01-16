import { css } from '@emotion/react'
import { generateColor } from './color'

//基础样式
export const baseStyle = {
    base: {
        red: "rgb(255, 78, 71)",
        pink: "rgb(255, 71, 126)",
        purple: "rgb(233, 69, 255)",
        deeppurple: "rgb(146, 74, 255)",
        blue: "rgb(56, 118, 209)",
        cyan: "rgb(36, 199, 214)",
        green: "rgb(54, 194, 82)",
        lime: "rgb(209, 219, 66)",
        yellow: "rgb(255, 233, 87)",
        amber: "rgb(199, 165, 44)",
        orange: "rgb(250, 141, 57)",
        deeporange: "rgb(255, 137, 74)",
        gray: "rgb(97,97,97)",
    },
    light: {
        backGround: "rgb(255,255,255)",
    },
    dark: {
        backGround: "rgb(32,34,36)",
    }
}

//合并基础样式
export const mergeBaseStyle = (style) => {
    if (style) {
        Object.assign(baseStyle.base, style.base)
        Object.assign(baseStyle.light, style.light)
        Object.assign(baseStyle.dark, style.dark)
    }
    return baseStyle
}

//生成样式
const generateStyle = (key, option) => {
    option = Object.assign({ dark: false, gray: false }, option)
    let lines = []
    let color = {}
    switch (key) {
        case "red":
            color = generateColor(baseStyle.base.red, option)
            break
        case "pink":
            color = generateColor(baseStyle.base.pink, option)
            break
        case "purple":
            color = generateColor(baseStyle.base.purple, option)
            break
        case "deeppurple":
            color = generateColor(baseStyle.base.deeppurple, option)
            break
        case "blue":
            color = generateColor(baseStyle.base.blue, option)
            break
        case "cyan":
            color = generateColor(baseStyle.base.cyan, option)
            break
        case "green":
            color = generateColor(baseStyle.base.green, option)
            break
        case "lime":
            color = generateColor(baseStyle.base.lime, option)
            break
        case "yellow":
            color = generateColor(baseStyle.base.yellow, option)
            break
        case "amber":
            color = generateColor(baseStyle.base.amber, option)
            break
        case "orange":
            color = generateColor(baseStyle.base.orange, option)
            break
        case "deeporange":
            color = generateColor(baseStyle.base.deeporange, option)
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

//浅色模式
export const light = () => {
    return css`
        color-scheme: light;
        --tui-color-background: ${baseStyle.light.backGround};
        --tui-color-icon-primary: rgb(101 109 118);
        --tui-color-background-2: rgb(var(--tui-gray-1));
        ${generateStyle("red")}
        ${generateStyle("pink")}
        ${generateStyle("purple")}
        ${generateStyle("deeppurple")}
        ${generateStyle("blue")}
        ${generateStyle("cyan")}
        ${generateStyle("green")}
        ${generateStyle("lime")}
        ${generateStyle("yellow")}
        ${generateStyle("amber")}
        ${generateStyle("orange")}
        ${generateStyle("deeporange")}
        ${generateStyle("gray", { gray: true })}
    `
}

//深色模式
export const dark = () => {
    return css`
        color-scheme: dark;
        --tui-color-background: ${baseStyle.dark.backGround};
        --tui-color-background-2: rgb(var(--tui-gray-1));
        --tui-color-icon-primary: rgb(132 141 151);
        ${generateStyle("red", { dark: true })}
        ${generateStyle("pink", { dark: true })}
        ${generateStyle("purple", { dark: true })}
        ${generateStyle("deeppurple", { dark: true })}
        ${generateStyle("blue", { dark: true })}
        ${generateStyle("cyan", { dark: true })}
        ${generateStyle("green", { dark: true })}
        ${generateStyle("lime", { dark: true })}
        ${generateStyle("yellow", { dark: true })}
        ${generateStyle("amber", { dark: true })}
        ${generateStyle("orange", { dark: true })}
        ${generateStyle("deeporange", { dark: true })}
        ${generateStyle("gray", { dark: true, gray: true })}
    `
}

//全局样式
export const globalStyle = () => {
    let _light = light()
    let _dark = dark()
    return css`
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
            background-color: var(--tui-color-background);
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
