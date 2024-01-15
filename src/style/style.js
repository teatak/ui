import { css } from '@emotion/react'
import { generateColor } from './color'

//基础样式
export const baseStyle = {
    base: {
        blue: "rgb(32,80,145)",
        gray: "rgb(73,73,73)",
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
const generateStyle = (key, option = { dark: false, gray: false }) => {
    let lines = []
    let color = {}
    switch (key) {
        case "blue":
            color = generateColor(baseStyle.base.blue, option)
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
        ${generateStyle("blue")}
        ${generateStyle("gray", { gray: true })}
    `
}

//深色模式
export const dark = () => {
    return css`
        color-scheme: dark;
        --tui-color-background: ${baseStyle.dark.backGround};
        --tui-color-icon-primary: rgb(132 141 151);
        ${generateStyle("blue", { dark: true })}
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
