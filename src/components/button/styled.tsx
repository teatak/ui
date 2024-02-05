import styled, { css } from 'styled-components'
import { baseTheme } from '../../style'

//注入baseTheme
export const buttonTheme: any = {
    button: {
        type: {
            standard: {
                //disabled
                disabledColor: "rgb(var(--tui-gray-4))",
                disabledBorder: "solid 1px transparent",
                disabledBg: "transparent",
                disabledBoxShadow: "none",

                //primary
                primaryColor: "rgb(var(--tui-primary-6))",
                primaryBorder: "solid 1px transparent",
                primaryBorderHover: "solid 1px transparent",
                primaryBorderActive: "solid 1px transparent",
                primaryBg: "transparent",
                primaryBgHover: "rgb(var(--tui-primary-1))",
                primaryBgActive: "rgb(var(--tui-primary-2))",

                //secondary
                secondaryColor: "rgb(var(--tui-gray-6))",
                secondaryBorder: "solid 1px transparent",
                secondaryBorderHover: "solid 1px transparent",
                secondaryBorderActive: "solid 1px transparent",
                secondaryBg: "transparent",
                secondaryBgHover: "rgb(var(--tui-gray-1))",
                secondaryBgActive: "rgb(var(--tui-gray-2))",

                //success
                successColor: "rgb(var(--tui-green-6))",
                successBorder: "solid 1px transparent",
                successBorderHover: "solid 1px transparent",
                successBorderActive: "solid 1px transparent",
                successBg: "transparent",
                successBgHover: "rgb(var(--tui-green-1))",
                successBgActive: "rgb(var(--tui-green-2))",

                //error
                errorColor: "rgb(var(--tui-red-6))",
                errorBorder: "solid 1px transparent",
                errorBorderHover: "solid 1px transparent",
                errorBorderActive: "solid 1px transparent",
                errorBg: "transparent",
                errorBgHover: "rgb(var(--tui-red-1))",
                errorBgActive: "rgb(var(--tui-red-2))",

                //info
                infoColor: "rgb(var(--tui-blue-6))",
                infoBorder: "solid 1px transparent",
                infoBorderHover: "solid 1px transparent",
                infoBorderActive: "solid 1px transparent",
                infoBg: "transparent",
                infoBgHover: "rgb(var(--tui-blue-1))",
                infoBgActive: "rgb(var(--tui-blue-2))",

                //warning
                warningColor: "rgb(var(--tui-orange-6))",
                warningBorder: "solid 1px transparent",
                warningBorderHover: "solid 1px transparent",
                warningBorderActive: "solid 1px transparent",
                warningBg: "transparent",
                warningBgHover: "rgb(var(--tui-orange-1))",
                warningBgActive: "rgb(var(--tui-orange-2))",

            },
            filled: {
                //disabled
                disabledColor: "rgb(var(--tui-gray-4))",
                disabledBorder: "solid 1px transparent",
                disabledBg: "rgb(var(--tui-gray-1))",
                disabledBoxShadow: "none",

                //primary
                primaryColor: "#FFF",
                primaryBorder: "solid 1px transparent",
                primaryBorderHover: "solid 1px transparent",
                primaryBorderActive: "solid 1px transparent",
                primaryBg: "rgb(var(--tui-primary-6))",
                primaryBgHover: "rgb(var(--tui-primary-5))",
                primaryBgActive: "rgb(var(--tui-primary-7))",

                //secondary
                secondaryColor: "rgb(var(--tui-gray-8))",
                secondaryBorder: "solid 1px transparent",
                secondaryBorderHover: "solid 1px transparent",
                secondaryBorderActive: "solid 1px transparent",
                secondaryBg: "rgb(var(--tui-gray-2))",
                secondaryBgHover: "rgb(var(--tui-gray-3))",
                secondaryBgActive: "rgb(var(--tui-gray-4))",

                //success
                successColor: "#FFF",
                successBorder: "solid 1px transparent",
                successBorderHover: "solid 1px transparent",
                successBorderActive: "solid 1px transparent",
                successBg: "rgb(var(--tui-green-6))",
                successBgHover: "rgb(var(--tui-green-5))",
                successBgActive: "rgb(var(--tui-green-7))",

                //error
                errorColor: "#FFF",
                errorBorder: "solid 1px transparent",
                errorBorderHover: "solid 1px transparent",
                errorBorderActive: "solid 1px transparent",
                errorBg: "rgb(var(--tui-red-6))",
                errorBgHover: "rgb(var(--tui-red-5))",
                errorBgActive: "rgb(var(--tui-red-7))",

                //info
                infoColor: "#FFF",
                infoBorder: "solid 1px transparent",
                infoBorderHover: "solid 1px transparent",
                infoBorderActive: "solid 1px transparent",
                infoBg: "rgb(var(--tui-blue-6))",
                infoBgHover: "rgb(var(--tui-blue-5))",
                infoBgActive: "rgb(var(--tui-blue-7))",

                //warning
                warningColor: "#FFF",
                warningBorder: "solid 1px transparent",
                warningBorderHover: "solid 1px transparent",
                warningBorderActive: "solid 1px transparent",
                warningBg: "rgb(var(--tui-orange-6))",
                warningBgHover: "rgb(var(--tui-orange-5))",
                warningBgActive: "rgb(var(--tui-orange-7))",
            },
            outlined: {
                //disabled
                disabledColor: "rgb(var(--tui-gray-4))",
                disabledBorder: "solid 1px rgb(var(--tui-gray-2))",
                disabledBg: "transparent",
                disabledBoxShadow: "none",

                //primary
                primaryColor: "rgb(var(--tui-primary-6))",
                primaryBorder: "solid 1px rgb(var(--tui-primary-6))",
                primaryBorderHover: "solid 1px rgb(var(--tui-primary-5))",
                primaryBorderActive: "solid 1px rgb(var(--tui-primary-7))",
                primaryBg: "transparent",
                primaryBgHover: "rgb(var(--tui-primary-1))",
                primaryBgActive: "rgb(var(--tui-primary-2))",

                //secondary
                secondaryColor: "rgb(var(--tui-gray-6))",
                secondaryBorder: "solid 1px rgb(var(--tui-gray-6))",
                secondaryBorderHover: "solid 1px rgb(var(--tui-gray-5))",
                secondaryBorderActive: "solid 1px rgb(var(--tui-gray-7))",
                secondaryBg: "transparent",
                secondaryBgHover: "rgb(var(--tui-gray-1))",
                secondaryBgActive: "rgb(var(--tui-gray-2))",

                //success
                successColor: "rgb(var(--tui-green-6))",
                successBorder: "solid 1px rgb(var(--tui-green-6))",
                successBorderHover: "solid 1px rgb(var(--tui-green-5))",
                successBorderActive: "solid 1px rgb(var(--tui-green-7))",
                successBg: "transparent",
                successBgHover: "rgb(var(--tui-green-1))",
                successBgActive: "rgb(var(--tui-green-2))",

                //error
                errorColor: "rgb(var(--tui-red-6))",
                errorBorder: "solid 1px rgb(var(--tui-red-6))",
                errorBorderHover: "solid 1px rgb(var(--tui-red-5))",
                errorBorderActive: "solid 1px rgb(var(--tui-red-7))",
                errorBg: "transparent",
                errorBgHover: "rgb(var(--tui-red-1))",
                errorBgActive: "rgb(var(--tui-red-2))",

                //info
                infoColor: "rgb(var(--tui-blue-6))",
                infoBorder: "solid 1px rgb(var(--tui-blue-6))",
                infoBorderHover: "solid 1px rgb(var(--tui-blue-5))",
                infoBorderActive: "solid 1px rgb(var(--tui-blue-7))",
                infoBg: "transparent",
                infoBgHover: "rgb(var(--tui-blue-1))",
                infoBgActive: "rgb(var(--tui-blue-2))",

                //warning
                warningColor: "rgb(var(--tui-orange-6))",
                warningBorder: "solid 1px rgb(var(--tui-orange-6))",
                warningBorderHover: "solid 1px rgb(var(--tui-orange-5))",
                warningBorderActive: "solid 1px rgb(var(--tui-orange-7))",
                warningBg: "transparent",
                warningBgHover: "rgb(var(--tui-orange-1))",
                warningBgActive: "rgb(var(--tui-orange-2))",
            }
        }
    }
}

export default styled.button<{ $prefixClass: string }>`
    ${(props) => {
        const _ = props.$prefixClass
        return css`
            /* base */
            &.${_} {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: var(--tui-border-radius-medium);
                padding: 0 var(--tui-size-space-medium);
                height: var(--tui-size-medium);
                outline: none;
                border: none;
                font-size: 14px;
                user-select: none;
                color: var(--tui-text-color-2);
                transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
            & svg {
                font-size: 20px;
                vertical-align: middle;
            }
            & .${_}-start-icon {
                margin-right: 4px;
            }
            & .${_}-end-icon {
                margin-left: 4px;
            }
            & .${_}-text {
                line-height: 1;
            }
            &.${_}-size-tiny {
                border-radius: var(--tui-border-radius-tiny);
                padding: 0 var(--tui-size-space-tiny);
                height: var(--tui-size-tiny);
                font-size: 12px;
                & svg {
                    font-size: 14px;
                }
                & .${_}-start-icon {
                    margin-right: 2px;
                }
                & .${_}-end-icon {
                    margin-left: 2px;
                }
            }
            &.${_}-size-small {
                border-radius: var(--tui-border-radius-small);
                padding: 0 var(--tui-size-space-small);
                height: var(--tui-size-small);
                font-size: 12px;
                & svg {
                    font-size: 16px;
                }
                & .${_}-start-icon {
                    margin-right: 3px;
                }
                & .${_}-end-icon {
                    margin-left: 3px;
                }
            }
            &.${_}-size-large {
                border-radius: var(--tui-border-radius-large);
                padding: 0 var(--tui-size-space-large);
                height: var(--tui-size-large);
                font-size: 14px;
                & svg {
                    font-size: 22px;
                }
                & .${_}-start-icon {
                    margin-right: 4px;
                }
                & .${_}-end-icon {
                    margin-left: 4px;
                }
            }
            &.${_}-long {
                width: 100%;
            }
            &.${_}-rounded {
                border-radius: 16px;
                &.${_}-size-tiny {
                    border-radius: 12px;
                }
                &.${_}-size-small {
                    border-radius: 14px;
                }
                &.${_}-size-large {
                    border-radius: 18px;
                }
            }
            &.${_}-circle {
                border-radius: 50%;
                width: var(--tui-size-medium);
                height: var(--tui-size-medium);
                padding: 0;
                overflow: hidden;
                &.${_}-size-tiny {
                    width: var(--tui-size-tiny);
                    height: var(--tui-size-tiny);
                }
                &.${_}-size-small {
                    width: var(--tui-size-small);
                    height: var(--tui-size-small);
                }
                &.${_}-size-large {
                    width: var(--tui-size-large);
                    height: var(--tui-size-large);
                }
            }
            ${buttonColor(_, 'standard', 'primary')}
            ${buttonColor(_, 'standard', 'secondary')}
            ${buttonColor(_, 'standard', 'success')}
            ${buttonColor(_, 'standard', 'error')}
            ${buttonColor(_, 'standard', 'info')}
            ${buttonColor(_, 'standard', 'warning')}
            ${buttonBase(_, 'standard')}

            ${buttonColor(_, 'filled', 'primary')}
            ${buttonColor(_, 'filled', 'secondary')}
            ${buttonColor(_, 'filled', 'success')}
            ${buttonColor(_, 'filled', 'error')}
            ${buttonColor(_, 'filled', 'info')}
            ${buttonColor(_, 'filled', 'warning')}
            ${buttonBase(_, 'filled')}

            ${buttonColor(_, 'outlined', 'primary')}
            ${buttonColor(_, 'outlined', 'secondary')}
            ${buttonColor(_, 'outlined', 'success')}
            ${buttonColor(_, 'outlined', 'error')}
            ${buttonColor(_, 'outlined', 'info')}
            ${buttonColor(_, 'outlined', 'warning')}
            ${buttonBase(_, 'outlined')}
        `
    }}
`

const buttonBase = (_: string, type: string) => {
    const theme = baseTheme.button
    return css`
    &.${_}-${type} {
        &:disabled {
            cursor: default;
            color: ${theme["type"][type]["disabledColor"]};
            border: ${theme["type"][type]["disabledBorder"]};
            background-color: ${theme["type"][type]["disabledBg"]};
            box-shadow: ${theme["type"][type]["disabledBoxShadow"]};
            &:hover,
            &:focus,
            &:active {
                color: ${theme["type"][type]["disabledColor"]};
                border: ${theme["type"][type]["disabledBorder"]};
                background-color: ${theme["type"][type]["disabledBg"]};
                box-shadow: ${theme["type"][type]["disabledBoxShadow"]};
            }
        }
    }
`
}

const buttonColor = (_: string, type: string, color: string) => {
    const theme = baseTheme.button
    return css`
    &.${_}-${type} {
        &.${_}-color-${color} {
            color: ${theme["type"][type][color + "Color"]};
            border: ${theme["type"][type][color + "Border"]};
            background-color: ${theme["type"][type][color + "Bg"]};
            &:hover,
            &:focus {
                border: ${theme["type"][type][color + "BorderHover"]};
                background-color: ${theme["type"][type][color + "BgHover"]};
            }
            &:active,
            &.clicked {
                border: ${theme["type"][type][color + "BorderActive"]};
                background-color: ${theme["type"][type][color + "BgActive"]};
            }
        }
    }
`
}