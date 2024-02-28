import styled, { css } from 'styled-components'
import { baseTheme } from '../../style'

//注入baseTheme
export const buttonTheme: any = {
    button: {
        size: {
            tiny: {
                base: 6,
                fontSize: 12,
            },
            small: {
                base: 7,
                fontSize: 12,
            },
            medium: {
                base: 8,
                fontSize: 14,
            },
            large: {
                base: 9,
                fontSize: 14,
            },
        },
        type: {
            solid: {
                hasBorder: false,
                //disabled
                boxShadow: 'none',
                boxShadowHover: 'var(--tui-box-shadow-1)',
                boxShadowActive: 'none',

                //primary
                primaryColor: '#FFF',
                primaryBorder: 'none',
                primaryBorderHover: 'none',
                primaryBorderActive: 'none',
                primaryBg: 'rgb(var(--tui-primary-6))',
                primaryBgHover: 'rgb(var(--tui-primary-5))',
                primaryBgActive: 'rgb(var(--tui-primary-7))',

                primaryDisabledColor: 'rgb(var(--tui-gray-4))',
                primaryDisabledBorder: 'none',
                primaryDisabledBg: 'rgb(var(--tui-primary-1))',

                //neutral
                neutralColor: '#FFF',
                neutralBorder: 'none',
                neutralBorderHover: 'none',
                neutralBorderActive: 'none',
                neutralBg: 'rgb(var(--tui-gray-6))',
                neutralBgHover: 'rgb(var(--tui-gray-5))',
                neutralBgActive: 'rgb(var(--tui-gray-7))',

                neutralDisabledColor: 'rgb(var(--tui-gray-4))',
                neutralDisabledBorder: 'none',
                neutralDisabledBg: 'rgb(var(--tui-gray-1))',

                //success
                successColor: '#FFF',
                successBorder: 'none',
                successBorderHover: 'none',
                successBorderActive: 'none',
                successBg: 'rgb(var(--tui-green-6))',
                successBgHover: 'rgb(var(--tui-green-5))',
                successBgActive: 'rgb(var(--tui-green-7))',

                successDisabledColor: 'rgb(var(--tui-gray-4))',
                successDisabledBorder: 'none',
                successDisabledBg: 'rgb(var(--tui-green-1))',

                //error
                errorColor: '#FFF',
                errorBorder: 'none',
                errorBorderHover: 'none',
                errorBorderActive: 'none',
                errorBg: 'rgb(var(--tui-red-6))',
                errorBgHover: 'rgb(var(--tui-red-5))',
                errorBgActive: 'rgb(var(--tui-red-7))',

                errorDisabledColor: 'rgb(var(--tui-gray-4))',
                errorDisabledBorder: 'none',
                errorDisabledBg: 'rgb(var(--tui-red-1))',

                //warning
                warningColor: '#FFF',
                warningBorder: 'none',
                warningBorderHover: 'none',
                warningBorderActive: 'none',
                warningBg: 'rgb(var(--tui-orange-6))',
                warningBgHover: 'rgb(var(--tui-orange-5))',
                warningBgActive: 'rgb(var(--tui-orange-7))',

                warningDisabledColor: 'rgb(var(--tui-gray-4))',
                warningDisabledBorder: 'none',
                warningDisabledBg: 'rgb(var(--tui-orange-1))',
            },
            soft: {
                hasBorder: false,
                //disabled
                boxShadow: 'none',
                boxShadowHover: 'none',
                boxShadowActive: 'none',

                //primary
                primaryColor: 'rgb(var(--tui-primary-8))',
                primaryBorder: 'none',
                primaryBorderHover: 'none',
                primaryBorderActive: 'none',
                primaryBg: 'rgb(var(--tui-primary-1))',
                primaryBgHover: 'rgb(var(--tui-primary-2))',
                primaryBgActive: 'rgb(var(--tui-primary-3))',

                primaryDisabledColor: 'rgb(var(--tui-gray-4))',
                primaryDisabledBorder: 'none',
                primaryDisabledBg: 'transparent',

                //neutral
                neutralColor: 'rgb(var(--tui-gray-8))',
                neutralBorder: 'none',
                neutralBorderHover: 'none',
                neutralBorderActive: 'none',
                neutralBg: 'rgb(var(--tui-gray-1))',
                neutralBgHover: 'rgb(var(--tui-gray-2))',
                neutralBgActive: 'rgb(var(--tui-gray-3))',

                neutralDisabledColor: 'rgb(var(--tui-gray-4))',
                neutralDisabledBorder: 'none',
                neutralDisabledBg: 'transparent',

                //success
                successColor: 'rgb(var(--tui-green-8))',
                successBorder: 'none',
                successBorderHover: 'none',
                successBorderActive: 'none',
                successBg: 'rgb(var(--tui-green-1))',
                successBgHover: 'rgb(var(--tui-green-2))',
                successBgActive: 'rgb(var(--tui-green-3))',

                successDisabledColor: 'rgb(var(--tui-gray-4))',
                successDisabledBorder: 'none',
                successDisabledBg: 'transparent',

                //error
                errorColor: 'rgb(var(--tui-red-8))',
                errorBorder: 'none',
                errorBorderHover: 'none',
                errorBorderActive: 'none',
                errorBg: 'rgb(var(--tui-red-1))',
                errorBgHover: 'rgb(var(--tui-red-2))',
                errorBgActive: 'rgb(var(--tui-red-3))',

                errorDisabledColor: 'rgb(var(--tui-gray-4))',
                errorDisabledBorder: 'none',
                errorDisabledBg: 'transparent',

                //warning
                warningColor: 'rgb(var(--tui-orange-8))',
                warningBorder: 'none',
                warningBorderHover: 'none',
                warningBorderActive: 'none',
                warningBg: 'rgb(var(--tui-orange-1))',
                warningBgHover: 'rgb(var(--tui-orange-2))',
                warningBgActive: 'rgb(var(--tui-orange-3))',

                warningDisabledColor: 'rgb(var(--tui-gray-4))',
                warningDisabledBorder: 'none',
                warningDisabledBg: 'transparent',
            },
            outlined: {
                hasBorder: true,
                //disabled
                boxShadow: 'none',
                boxShadowHover: 'none',
                boxShadowActive: 'none',

                //primary
                primaryColor: 'rgb(var(--tui-primary-6))',
                primaryBorder: 'solid 1px rgb(var(--tui-primary-6))',
                primaryBorderHover: 'solid 1px rgb(var(--tui-primary-5))',
                primaryBorderActive: 'solid 1px rgb(var(--tui-primary-7))',
                primaryBg: 'transparent',
                primaryBgHover: 'rgb(var(--tui-primary-1))',
                primaryBgActive: 'rgb(var(--tui-primary-2))',

                primaryDisabledColor: 'rgb(var(--tui-gray-4))',
                primaryDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                primaryDisabledBg: 'transparent',

                //neutral
                neutralColor: 'rgb(var(--tui-gray-6))',
                neutralBorder: 'solid 1px rgb(var(--tui-gray-5))',
                neutralBorderHover: 'solid 1px rgb(var(--tui-gray-4))',
                neutralBorderActive: 'solid 1px rgb(var(--tui-gray-6))',
                neutralBg: 'transparent',
                neutralBgHover: 'rgb(var(--tui-gray-1))',
                neutralBgActive: 'rgb(var(--tui-gray-2))',

                neutralDisabledColor: 'rgb(var(--tui-gray-4))',
                neutralDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                neutralDisabledBg: 'transparent',

                //success
                successColor: 'rgb(var(--tui-green-6))',
                successBorder: 'solid 1px rgb(var(--tui-green-6))',
                successBorderHover: 'solid 1px rgb(var(--tui-green-5))',
                successBorderActive: 'solid 1px rgb(var(--tui-green-7))',
                successBg: 'transparent',
                successBgHover: 'rgb(var(--tui-green-1))',
                successBgActive: 'rgb(var(--tui-green-2))',

                successDisabledColor: 'rgb(var(--tui-gray-4))',
                successDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                successDisabledBg: 'transparent',

                //error
                errorColor: 'rgb(var(--tui-red-6))',
                errorBorder: 'solid 1px rgb(var(--tui-red-6))',
                errorBorderHover: 'solid 1px rgb(var(--tui-red-5))',
                errorBorderActive: 'solid 1px rgb(var(--tui-red-7))',
                errorBg: 'transparent',
                errorBgHover: 'rgb(var(--tui-red-1))',
                errorBgActive: 'rgb(var(--tui-red-2))',

                errorDisabledColor: 'rgb(var(--tui-gray-4))',
                errorDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                errorDisabledBg: 'transparent',

                //warning
                warningColor: 'rgb(var(--tui-orange-6))',
                warningBorder: 'solid 1px rgb(var(--tui-orange-6))',
                warningBorderHover: 'solid 1px rgb(var(--tui-orange-5))',
                warningBorderActive: 'solid 1px rgb(var(--tui-orange-7))',
                warningBg: 'transparent',
                warningBgHover: 'rgb(var(--tui-orange-1))',
                warningBgActive: 'rgb(var(--tui-orange-2))',

                warningDisabledColor: 'rgb(var(--tui-gray-4))',
                warningDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                warningDisabledBg: 'transparent',
            },
            text: {
                hasBorder: false,
                //disabled
                boxShadow: 'none',
                boxShadowHover: 'none',
                boxShadowActive: 'none',

                //primary
                primaryColor: 'rgb(var(--tui-primary-6))',
                primaryBorder: 'none',
                primaryBorderHover: 'none',
                primaryBorderActive: 'none',
                primaryBg: 'transparent',
                primaryBgHover: 'rgb(var(--tui-primary-1))',
                primaryBgActive: 'rgb(var(--tui-primary-2))',

                primaryDisabledColor: 'rgb(var(--tui-gray-4))',
                primaryDisabledBorder: 'none',
                primaryDisabledBg: 'transparent',

                //neutral
                neutralColor: 'rgb(var(--tui-gray-6))',
                neutralBorder: 'none',
                neutralBorderHover: 'none',
                neutralBorderActive: 'none',
                neutralBg: 'transparent',
                neutralBgHover: 'rgb(var(--tui-gray-1))',
                neutralBgActive: 'rgb(var(--tui-gray-2))',

                neutralDisabledColor: 'rgb(var(--tui-gray-4))',
                neutralDisabledBorder: 'none',
                neutralDisabledBg: 'transparent',

                //success
                successColor: 'rgb(var(--tui-green-6))',
                successBorder: 'none',
                successBorderHover: 'none',
                successBorderActive: 'none',
                successBg: 'transparent',
                successBgHover: 'rgb(var(--tui-green-1))',
                successBgActive: 'rgb(var(--tui-green-2))',

                successDisabledColor: 'rgb(var(--tui-gray-4))',
                successDisabledBorder: 'none',
                successDisabledBg: 'transparent',

                //error
                errorColor: 'rgb(var(--tui-red-6))',
                errorBorder: 'none',
                errorBorderHover: 'none',
                errorBorderActive: 'none',
                errorBg: 'transparent',
                errorBgHover: 'rgb(var(--tui-red-1))',
                errorBgActive: 'rgb(var(--tui-red-2))',

                errorDisabledColor: 'rgb(var(--tui-gray-4))',
                errorDisabledBorder: 'none',
                errorDisabledBg: 'transparent',

                //warning
                warningColor: 'rgb(var(--tui-orange-6))',
                warningBorder: 'none',
                warningBorderHover: 'none',
                warningBorderActive: 'none',
                warningBg: 'transparent',
                warningBgHover: 'rgb(var(--tui-orange-1))',
                warningBgActive: 'rgb(var(--tui-orange-2))',

                warningDisabledColor: 'rgb(var(--tui-gray-4))',
                warningDisabledBorder: 'none',
                warningDisabledBg: 'transparent',
            },
        }
    }
}

export default styled.button<{ $prefixClass: string }>`
    ${(props) => {
        const theme = baseTheme.button
        const _ = props.$prefixClass
        const size = {
            medium: {
                height: theme['size']['medium']['base'] * 4 + 'px',
                padding: theme['size']['medium']['base'] + 'px',
                fontSize: theme['size']['medium']['fontSize'] + 'px',
                svgSize: theme['size']['medium']['base'] * 2 + 'px',
                roundBorderRadius: theme['size']['medium']['base'] * 2 + 'px',
            },
            tiny: {
                height: theme['size']['tiny']['base'] * 4 + 'px',
                padding: theme['size']['tiny']['base'] + 'px',
                fontSize: theme['size']['tiny']['fontSize'] + 'px',
                svgSize: theme['size']['tiny']['base'] * 2 + 'px',
                roundBorderRadius: theme['size']['tiny']['base'] * 2 + 'px',
            },
            small: {
                height: theme['size']['small']['base'] * 4 + 'px',
                padding: theme['size']['small']['base'] + 'px',
                fontSize: theme['size']['small']['fontSize'] + 'px',
                svgSize: theme['size']['small']['base'] * 2 + 'px',
                roundBorderRadius: theme['size']['small']['base'] * 2 + 'px',
            },
            large: {
                height: theme['size']['large']['base'] * 4 + 'px',
                padding: theme['size']['large']['base'] + 'px',
                fontSize: theme['size']['large']['fontSize'] + 'px',
                svgSize: theme['size']['large']['base'] * 2 + 'px',
                roundBorderRadius: theme['size']['large']['base'] * 2 + 'px',
            },
        }
        return css`
            /* base */
            &.${_} {
                box-sizing: border-box;
                position: relative;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: var(--tui-border-radius-normal);
                padding: 0 ${size.medium.padding};
                height: ${size.medium.height};
                outline: none;
                border: none;
                text-decoration: none;
                font-size: ${size.medium.fontSize};
                user-select: none;
                color: var(--tui-text-color-2);
                background-origin: border-box;
                transition: 
                    width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                & svg {
                    user-select: none;
                    font-size: ${size.medium.svgSize};
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
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    margin: 0 ${size.medium.padding};
                    line-height: 1;
                    
                }
                &.${_}-loading {
                    opacity: 0.6;
                    & .${_}-span {
                        & .${_}-span-text {
                            color: transparent;
                        }
                        & .${_}-span-loading {
                            display: flex;
                            position: absolute;
                            left: 50%;
                            transform: translate(-50%);
                        }
                    }
                }
                &.${_}-long {
                    width: 100%;
                }
                &.${_}-size-tiny {
                    padding: 0 ${size.tiny.padding};
                    height: ${size.tiny.height};
                    font-size: ${size.tiny.fontSize};
                    & svg {
                        font-size: ${size.tiny.svgSize};
                    }
                    & .${_}-span {
                        margin: 0 ${size.tiny.padding};
                    }
                }
                &.${_}-size-small {
                    padding: 0 ${size.small.padding};
                    height: ${size.small.height};
                    font-size: ${size.small.fontSize};
                    & svg {
                        font-size: ${size.small.svgSize};
                    }
                    & .${_}-span {
                        margin: 0 ${size.small.padding};
                    }
                }
                &.${_}-size-large {
                    padding: 0 ${size.large.padding};
                    height: ${size.large.height};
                    font-size: ${size.large.fontSize};
                    & svg {
                        font-size: ${size.large.svgSize};
                    }
                    & .${_}-span {
                        margin: 0 ${size.large.padding};
                    }
                }
                &.${_}-shape-round {
                    border-radius: ${size.medium.roundBorderRadius};
                    &.${_}-size-tiny {
                        border-radius: ${size.tiny.roundBorderRadius};
                    }
                    &.${_}-size-small {
                        border-radius: ${size.small.roundBorderRadius};
                    }
                    &.${_}-size-large {
                        border-radius: ${size.large.roundBorderRadius};
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
              
                ${buttonBase(_, 'solid')}
                ${buttonColor(_, 'solid', 'primary')}
                ${buttonColor(_, 'solid', 'neutral')}
                ${buttonColor(_, 'solid', 'success')}
                ${buttonColor(_, 'solid', 'error')}
                ${buttonColor(_, 'solid', 'info')}
                ${buttonColor(_, 'solid', 'warning')}

                ${buttonBase(_, 'soft')}
                ${buttonColor(_, 'soft', 'primary')}
                ${buttonColor(_, 'soft', 'neutral')}
                ${buttonColor(_, 'soft', 'success')}
                ${buttonColor(_, 'soft', 'error')}
                ${buttonColor(_, 'soft', 'info')}
                ${buttonColor(_, 'soft', 'warning')}

                ${buttonBase(_, 'outlined')}
                ${buttonColor(_, 'outlined', 'primary')}
                ${buttonColor(_, 'outlined', 'neutral')}
                ${buttonColor(_, 'outlined', 'success')}
                ${buttonColor(_, 'outlined', 'error')}
                ${buttonColor(_, 'outlined', 'info')}
                ${buttonColor(_, 'outlined', 'warning')}

                ${buttonBase(_, 'text')}
                ${buttonColor(_, 'text', 'primary')}
                ${buttonColor(_, 'text', 'neutral')}
                ${buttonColor(_, 'text', 'success')}
                ${buttonColor(_, 'text', 'error')}
                ${buttonColor(_, 'text', 'info')}
                ${buttonColor(_, 'text', 'warning')}
            }
        `
    }}
`

const buttonBase = (_: string, type: string) => {
    const theme = baseTheme.button
    const borderSize = {
        medium: {
            padding: theme['size']['medium']['base'] - 1 + 'px',
        },
        tiny: {
            padding: theme['size']['tiny']['base'] - 1 + 'px',
        },
        small: {
            padding: theme['size']['small']['base'] - 1 + 'px',
        },
        large: {
            padding: theme['size']['large']['base'] - 1 + 'px',
        },
    }
    return css`
    &.${_}-${type}:not(null) {
        box-shadow: ${theme['type'][type]['boxShadow']};
        &:hover {
            box-shadow: ${theme['type'][type]['boxShadowHover']};
        }
        &:active,
        &.clicked {
            box-shadow: ${theme['type'][type]['boxShadowActive']};;
        }
        ${theme['type'][type]['hasBorder'] ? css`
            padding: 0 ${borderSize.medium.padding};
            &.${_}-size-tiny {
                padding: 0 ${borderSize.tiny.padding};
            }
            &.${_}-size-small {
                padding: 0 ${borderSize.small.padding};
            }
            &.${_}-size-large {
                padding: 0 ${borderSize.large.padding};
            }
        `: ''}
    }
`
}

const buttonColor = (_: string, type: string, color: string) => {
    const theme = baseTheme.button
    return css`
    &.${_}-${type} {
        &.${_}-color-${color} {
            color: ${theme['type'][type][color + 'Color']};
            border: ${theme['type'][type]['hasBorder'] ? theme['type'][type][color + 'Border'] : 'none'};
            background: ${theme['type'][type][color + 'Bg']};
            &:hover {
                border: ${theme['type'][type]['hasBorder'] ? theme['type'][type][color + 'BorderHover'] : 'none'};
                background: ${theme['type'][type][color + 'BgHover']};
            }
            &:active,
            &.clicked {
                border: ${theme['type'][type]['hasBorder'] ? theme['type'][type][color + 'BorderActive'] : 'none'};
                background: ${theme['type'][type][color + 'BgActive']};
            }
            &.${_}-loading {
                cursor: default;
                color: ${theme['type'][type][color + 'Color']};
                border: ${theme['type'][type]['hasBorder'] ? theme['type'][type][color + 'Border'] : 'none'};
                background: ${theme['type'][type][color + 'Bg']};
                box-shadow: none;
                &:hover,
                &:focus,
                &:active {
                    color: ${theme['type'][type][color + 'Color']};
                    border: ${theme['type'][type]['hasBorder'] ? theme['type'][type][color + 'Border'] : 'none'};
                    background: ${theme['type'][type][color + 'Bg']};
                    box-shadow: none;
                }
            }
            &.${_}-disabled,&:disabled{
                cursor: default;
                color: ${theme['type'][type][color + 'DisabledColor']};
                border: ${theme['type'][type]['hasBorder'] ? theme['type'][type][color + 'DisabledBorder'] : 'none'};
                background: ${theme['type'][type][color + 'DisabledBg']};
                box-shadow: none;
                &:hover,
                &:focus,
                &:active {
                    color: ${theme['type'][type][color + 'DisabledColor']};
                    border: ${theme['type'][type]['hasBorder'] ? theme['type'][type][color + 'DisabledBorder'] : 'none'};
                    background: ${theme['type'][type][color + 'DisabledBg']};
                    box-shadow: none;
                }
            }
        }
    }
`
}