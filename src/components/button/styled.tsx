import styled, { css } from 'styled-components'
import { baseTheme } from '../../style'

//注入baseTheme
export const buttonTheme: any = {
    button: {
        size: {
            tiny: {
                height: "26px",
                padding: "6px",
            },
            small: {
                height: "30px",
                padding: "7px",
            },
            medium: {
                height: "34px",
                padding: "8px",
            },
            large: {
                height: "38px",
                padding: "9px",
            },
        },
        type: {
            text: {
                //disabled
                disabledColor: "rgb(var(--tui-gray-4))",
                disabledBorder: "solid 1px transparent",
                disabledBg: "rgb(var(--tui-gray-1))",
                boxShadow: "none",
                boxShadowHover: "none",

                //primary
                primaryColor: "rgb(var(--tui-primary-6))",
                primaryBorder: "solid 1px transparent",
                primaryBorderHover: "solid 1px transparent",
                primaryBorderActive: "solid 1px transparent",
                primaryBg: "rgb(var(--tui-primary-1))",
                primaryBgHover: "rgb(var(--tui-primary-2))",
                primaryBgActive: "rgb(var(--tui-primary-3))",

                //secondary
                secondaryColor: "rgb(var(--tui-gray-6))",
                secondaryBorder: "solid 1px transparent",
                secondaryBorderHover: "solid 1px transparent",
                secondaryBorderActive: "solid 1px transparent",
                secondaryBg: "rgb(var(--tui-gray-1))",
                secondaryBgHover: "rgb(var(--tui-gray-2))",
                secondaryBgActive: "rgb(var(--tui-gray-3))",

                //success
                successColor: "rgb(var(--tui-green-6))",
                successBorder: "solid 1px transparent",
                successBorderHover: "solid 1px transparent",
                successBorderActive: "solid 1px transparent",
                successBg: "rgb(var(--tui-green-1))",
                successBgHover: "rgb(var(--tui-green-2))",
                successBgActive: "rgb(var(--tui-green-3))",

                //error
                errorColor: "rgb(var(--tui-red-6))",
                errorBorder: "solid 1px transparent",
                errorBorderHover: "solid 1px transparent",
                errorBorderActive: "solid 1px transparent",
                errorBg: "rgb(var(--tui-red-1))",
                errorBgHover: "rgb(var(--tui-red-2))",
                errorBgActive: "rgb(var(--tui-red-3))",

                //info
                infoColor: "rgb(var(--tui-blue-6))",
                infoBorder: "solid 1px transparent",
                infoBorderHover: "solid 1px transparent",
                infoBorderActive: "solid 1px transparent",
                infoBg: "rgb(var(--tui-blue-1))",
                infoBgHover: "rgb(var(--tui-blue-2))",
                infoBgActive: "rgb(var(--tui-blue-3))",

                //warning
                warningColor: "rgb(var(--tui-orange-6))",
                warningBorder: "solid 1px transparent",
                warningBorderHover: "solid 1px transparent",
                warningBorderActive: "solid 1px transparent",
                warningBg: "rgb(var(--tui-orange-1))",
                warningBgHover: "rgb(var(--tui-orange-2))",
                warningBgActive: "rgb(var(--tui-orange-3))",

            },
            filled: {
                //disabled
                disabledColor: "rgb(var(--tui-gray-4))",
                disabledBorder: "solid 1px transparent",
                disabledBg: "rgb(var(--tui-gray-1))",
                boxShadow: "none",
                boxShadowHover: "var(--tui-box-shadow-4)",

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
                disabledBg: "rgb(var(--tui-gray-1))",
                boxShadow: "none",
                boxShadowHover: "none",

                //primary
                primaryColor: "rgb(var(--tui-primary-6))",
                primaryBorder: "solid 1px rgb(var(--tui-primary-6))",
                primaryBorderHover: "solid 1px rgb(var(--tui-primary-5))",
                primaryBorderActive: "solid 1px rgb(var(--tui-primary-7))",
                primaryBg: "rgb(var(--tui-primary-1))",
                primaryBgHover: "rgb(var(--tui-primary-2))",
                primaryBgActive: "rgb(var(--tui-primary-3))",

                //secondary
                secondaryColor: "rgb(var(--tui-gray-6))",
                secondaryBorder: "solid 1px rgb(var(--tui-gray-6))",
                secondaryBorderHover: "solid 1px rgb(var(--tui-gray-5))",
                secondaryBorderActive: "solid 1px rgb(var(--tui-gray-7))",
                secondaryBg: "rgb(var(--tui-gray-1))",
                secondaryBgHover: "rgb(var(--tui-gray-2))",
                secondaryBgActive: "rgb(var(--tui-gray-3))",

                //success
                successColor: "rgb(var(--tui-green-6))",
                successBorder: "solid 1px rgb(var(--tui-green-6))",
                successBorderHover: "solid 1px rgb(var(--tui-green-5))",
                successBorderActive: "solid 1px rgb(var(--tui-green-7))",
                successBg: "rgb(var(--tui-green-1))",
                successBgHover: "rgb(var(--tui-green-2))",
                successBgActive: "rgb(var(--tui-green-3))",

                //error
                errorColor: "rgb(var(--tui-red-6))",
                errorBorder: "solid 1px rgb(var(--tui-red-6))",
                errorBorderHover: "solid 1px rgb(var(--tui-red-5))",
                errorBorderActive: "solid 1px rgb(var(--tui-red-7))",
                errorBg: "rgb(var(--tui-red-1))",
                errorBgHover: "rgb(var(--tui-red-2))",
                errorBgActive: "rgb(var(--tui-red-3))",

                //info
                infoColor: "rgb(var(--tui-blue-6))",
                infoBorder: "solid 1px rgb(var(--tui-blue-6))",
                infoBorderHover: "solid 1px rgb(var(--tui-blue-5))",
                infoBorderActive: "solid 1px rgb(var(--tui-blue-7))",
                infoBg: "rgb(var(--tui-blue-1))",
                infoBgHover: "rgb(var(--tui-blue-2))",
                infoBgActive: "rgb(var(--tui-blue-3))",

                //warning
                warningColor: "rgb(var(--tui-orange-6))",
                warningBorder: "solid 1px rgb(var(--tui-orange-6))",
                warningBorderHover: "solid 1px rgb(var(--tui-orange-5))",
                warningBorderActive: "solid 1px rgb(var(--tui-orange-7))",
                warningBg: "rgb(var(--tui-orange-1))",
                warningBgHover: "rgb(var(--tui-orange-2))",
                warningBgActive: "rgb(var(--tui-orange-3))",
            }
        }
    }
}

export default styled.button<{ $prefixClass: string }>`
    ${(props) => {
        const theme = baseTheme.button
        const _ = props.$prefixClass
        return css`
            /* base */
            &.${_} {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: var(--tui-border-radius-medium);
                padding: 0 ${theme["size"]["medium"]["padding"]};
                height: ${theme["size"]["medium"]["height"]};
                outline: none;
                border: none;
                font-size: 14px;
                user-select: none;
                color: var(--tui-text-color-2);
                transition: 
                    width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
            & svg {
                user-select: none;
                font-size: 16px;
            }
            & .${_}-start-icon {
                display: flex;
                line-height: 1;
            }
            & .${_}-end-icon {
                display: flex;
                line-height: 1;
            }
            & .${_}-span {
                display: flex;
                margin: 0 ${theme["size"]["medium"]["padding"]};
                line-height: 1;
            }
            &.${_}-size-tiny {
                border-radius: var(--tui-border-radius-tiny);
                padding: 0 ${theme["size"]["tiny"]["padding"]};
                height: ${theme["size"]["tiny"]["height"]};
                font-size: 12px;
                & svg {
                    font-size: 12px;
                }
                & .${_}-span {
                    margin: 0 ${theme["size"]["tiny"]["padding"]};
                }
            }
            &.${_}-size-small {
                border-radius: var(--tui-border-radius-small);
                padding: 0 ${theme["size"]["small"]["padding"]};
                height: ${theme["size"]["small"]["height"]};
                font-size: 12px;
                & svg {
                    font-size: 14px;
                }
                & .${_}-span {
                    margin: 0 ${theme["size"]["small"]["padding"]};
                }
            }
            &.${_}-size-large {
                border-radius: var(--tui-border-radius-large);
                padding: 0 ${theme["size"]["large"]["padding"]};
                height: ${theme["size"]["large"]["height"]};
                font-size: 14px;
                & svg {
                    font-size: 18px;
                }
                & .${_}-span {
                    margin: 0 ${theme["size"]["large"]["padding"]};
                }
            }
            &.${_}-long {
                width: 100%;
            }
            &.${_}-shape-round {
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
            &.${_}-shape-circle {
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
            ${buttonBase(_, 'text')}
            ${buttonColor(_, 'text', 'primary')}
            ${buttonColor(_, 'text', 'secondary')}
            ${buttonColor(_, 'text', 'success')}
            ${buttonColor(_, 'text', 'error')}
            ${buttonColor(_, 'text', 'info')}
            ${buttonColor(_, 'text', 'warning')}

            ${buttonBase(_, 'filled')}
            ${buttonColor(_, 'filled', 'primary')}
            ${buttonColor(_, 'filled', 'secondary')}
            ${buttonColor(_, 'filled', 'success')}
            ${buttonColor(_, 'filled', 'error')}
            ${buttonColor(_, 'filled', 'info')}
            ${buttonColor(_, 'filled', 'warning')}

            ${buttonBase(_, 'outlined')}
            ${buttonColor(_, 'outlined', 'primary')}
            ${buttonColor(_, 'outlined', 'secondary')}
            ${buttonColor(_, 'outlined', 'success')}
            ${buttonColor(_, 'outlined', 'error')}
            ${buttonColor(_, 'outlined', 'info')}
            ${buttonColor(_, 'outlined', 'warning')}
        `
    }}
`

const buttonBase = (_: string, type: string) => {
    const theme = baseTheme.button

    return css`
    &.${_}-${type}:not(null) {
        
        box-shadow: ${theme["type"][type]["boxShadow"]};
        &:hover,
        &:focus {
            box-shadow: ${theme["type"][type]["boxShadowHover"]};
        }
        &.${_}-disabled,&:disabled{
            cursor: default;
            color: ${theme["type"][type]["disabledColor"]};
            border: ${theme["type"][type]["disabledBorder"]};
            background-color: ${theme["type"][type]["disabledBg"]};
            box-shadow: none;
            &:hover,
            &:focus,
            &:active {
                color: ${theme["type"][type]["disabledColor"]};
                border: ${theme["type"][type]["disabledBorder"]};
                background-color: ${theme["type"][type]["disabledBg"]};
                box-shadow: none;
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
            &:hover {
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