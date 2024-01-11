import { css } from '@emotion/react'

export const baseSetting = {
    light: {
        backGround: "rgb(255 255 255)"
    },
    dark: {
        backGround: "rgb(60 60 60)"
    }
}

export const light = () => css`
    color-scheme: light;
    --tt-color-background: ${baseSetting.light.backGround};
    --tt-color-icon-primary: rgb(101 109 118);
`

export const dark = () => css`
    color-scheme: dark;
    --tt-color-background: ${baseSetting.dark.backGround};
    --tt-color-icon-primary: rgb(132 141 151);
`

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
            background-color: var(--tt-color-background);
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
