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
            text: {
                hasBorder: false,
                //disabled
                disabledColor: 'rgb(var(--tui-gray-4))',
                disabledBorder: 'none',
                disabledBg: 'rgb(var(--tui-gray-1))',
                boxShadow: 'none',
                boxShadowHover: 'none',
                boxShadowActive: 'none',

                //primary
                primaryColor: 'rgb(var(--tui-primary-6))',
                primaryBorder: 'none',
                primaryBorderHover: 'none',
                primaryBorderActive: 'none',
                primaryBg: 'rgb(var(--tui-primary-1))',
                primaryBgHover: 'rgb(var(--tui-primary-2))',
                primaryBgActive: 'rgb(var(--tui-primary-3))',

                primaryDisabledColor: 'rgb(var(--tui-gray-4))',
                primaryDisabledBorder: 'none',
                primaryDisabledBg: 'rgb(var(--tui-primary-1))',

                //secondary
                secondaryColor: 'rgb(var(--tui-gray-6))',
                secondaryBorder: 'none',
                secondaryBorderHover: 'none',
                secondaryBorderActive: 'none',
                secondaryBg: 'rgb(var(--tui-gray-1))',
                secondaryBgHover: 'rgb(var(--tui-gray-2))',
                secondaryBgActive: 'rgb(var(--tui-gray-3))',

                secondaryDisabledColor: 'rgb(var(--tui-gray-4))',
                secondaryDisabledBorder: 'none',
                secondaryDisabledBg: 'rgb(var(--tui-gray-1))',

                //success
                successColor: 'rgb(var(--tui-green-6))',
                successBorder: 'none',
                successBorderHover: 'none',
                successBorderActive: 'none',
                successBg: 'rgb(var(--tui-green-1))',
                successBgHover: 'rgb(var(--tui-green-2))',
                successBgActive: 'rgb(var(--tui-green-3))',

                successDisabledColor: 'rgb(var(--tui-gray-4))',
                successDisabledBorder: 'none',
                successDisabledBg: 'rgb(var(--tui-green-1))',

                //error
                errorColor: 'rgb(var(--tui-red-6))',
                errorBorder: 'none',
                errorBorderHover: 'none',
                errorBorderActive: 'none',
                errorBg: 'rgb(var(--tui-red-1))',
                errorBgHover: 'rgb(var(--tui-red-2))',
                errorBgActive: 'rgb(var(--tui-red-3))',

                errorDisabledColor: 'rgb(var(--tui-gray-4))',
                errorDisabledBorder: 'none',
                errorDisabledBg: 'rgb(var(--tui-red-1))',

                //info
                infoColor: 'rgb(var(--tui-blue-6))',
                infoBorder: 'none',
                infoBorderHover: 'none',
                infoBorderActive: 'none',
                infoBg: 'rgb(var(--tui-blue-1))',
                infoBgHover: 'rgb(var(--tui-blue-2))',
                infoBgActive: 'rgb(var(--tui-blue-3))',

                infoDisabledColor: 'rgb(var(--tui-gray-4))',
                infoDisabledBorder: 'none',
                infoDisabledBg: 'rgb(var(--tui-blue-1))',

                //warning
                warningColor: 'rgb(var(--tui-orange-6))',
                warningBorder: 'none',
                warningBorderHover: 'none',
                warningBorderActive: 'none',
                warningBg: 'rgb(var(--tui-orange-1))',
                warningBgHover: 'rgb(var(--tui-orange-2))',
                warningBgActive: 'rgb(var(--tui-orange-3))',

                warningDisabledColor: 'rgb(var(--tui-gray-4))',
                warningDisabledBorder: 'none',
                warningDisabledBg: 'rgb(var(--tui-orange-1))',
            },
            filled: {
                hasBorder: false,
                //disabled
                disabledColor: 'rgb(var(--tui-gray-4))',
                disabledBorder: 'none',
                disabledBg: 'rgb(var(--tui-gray-1))',
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

                //secondary
                secondaryColor: 'rgb(var(--tui-gray-8))',
                secondaryBorder: 'none',
                secondaryBorderHover: 'none',
                secondaryBorderActive: 'none',
                secondaryBg: 'rgb(var(--tui-gray-2))',
                secondaryBgHover: 'rgb(var(--tui-gray-3))',
                secondaryBgActive: 'rgb(var(--tui-gray-4))',

                secondaryDisabledColor: 'rgb(var(--tui-gray-4))',
                secondaryDisabledBorder: 'none',
                secondaryDisabledBg: 'rgb(var(--tui-gray-1))',

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

                //info
                infoColor: '#FFF',
                infoBorder: 'none',
                infoBorderHover: 'none',
                infoBorderActive: 'none',
                infoBg: 'rgb(var(--tui-blue-6))',
                infoBgHover: 'rgb(var(--tui-blue-5))',
                infoBgActive: 'rgb(var(--tui-blue-7))',

                infoDisabledColor: 'rgb(var(--tui-gray-4))',
                infoDisabledBorder: 'none',
                infoDisabledBg: 'rgb(var(--tui-blue-1))',

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
            outlined: {
                hasBorder: true,
                //disabled
                disabledColor: 'rgb(var(--tui-gray-4))',
                disabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                disabledBg: 'rgb(var(--tui-gray-1))',
                boxShadow: 'none',
                boxShadowHover: 'none',
                boxShadowActive: 'none',

                //primary
                primaryColor: 'rgb(var(--tui-primary-6))',
                primaryBorder: 'solid 1px rgb(var(--tui-primary-6))',
                primaryBorderHover: 'solid 1px rgb(var(--tui-primary-5))',
                primaryBorderActive: 'solid 1px rgb(var(--tui-primary-7))',
                primaryBg: 'rgb(var(--tui-primary-1))',
                primaryBgHover: 'rgb(var(--tui-primary-2))',
                primaryBgActive: 'rgb(var(--tui-primary-3))',

                primaryDisabledColor: 'rgb(var(--tui-gray-4))',
                primaryDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                primaryDisabledBg: 'rgb(var(--tui-primary-1))',

                //secondary
                secondaryColor: 'rgb(var(--tui-gray-6))',
                secondaryBorder: 'solid 1px rgb(var(--tui-gray-6))',
                secondaryBorderHover: 'solid 1px rgb(var(--tui-gray-5))',
                secondaryBorderActive: 'solid 1px rgb(var(--tui-gray-7))',
                secondaryBg: 'rgb(var(--tui-gray-1))',
                secondaryBgHover: 'rgb(var(--tui-gray-2))',
                secondaryBgActive: 'rgb(var(--tui-gray-3))',

                secondaryDisabledColor: 'rgb(var(--tui-gray-4))',
                secondaryDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                secondaryDisabledBg: 'rgb(var(--tui-gray-1))',

                //success
                successColor: 'rgb(var(--tui-green-6))',
                successBorder: 'solid 1px rgb(var(--tui-green-6))',
                successBorderHover: 'solid 1px rgb(var(--tui-green-5))',
                successBorderActive: 'solid 1px rgb(var(--tui-green-7))',
                successBg: 'rgb(var(--tui-green-1))',
                successBgHover: 'rgb(var(--tui-green-2))',
                successBgActive: 'rgb(var(--tui-green-3))',

                successDisabledColor: 'rgb(var(--tui-gray-4))',
                successDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                successDisabledBg: 'rgb(var(--tui-green-1))',

                //error
                errorColor: 'rgb(var(--tui-red-6))',
                errorBorder: 'solid 1px rgb(var(--tui-red-6))',
                errorBorderHover: 'solid 1px rgb(var(--tui-red-5))',
                errorBorderActive: 'solid 1px rgb(var(--tui-red-7))',
                errorBg: 'rgb(var(--tui-red-1))',
                errorBgHover: 'rgb(var(--tui-red-2))',
                errorBgActive: 'rgb(var(--tui-red-3))',

                errorDisabledColor: 'rgb(var(--tui-gray-4))',
                errorDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                errorDisabledBg: 'rgb(var(--tui-red-1))',

                //info
                infoColor: 'rgb(var(--tui-blue-6))',
                infoBorder: 'solid 1px rgb(var(--tui-blue-6))',
                infoBorderHover: 'solid 1px rgb(var(--tui-blue-5))',
                infoBorderActive: 'solid 1px rgb(var(--tui-blue-7))',
                infoBg: 'rgb(var(--tui-blue-1))',
                infoBgHover: 'rgb(var(--tui-blue-2))',
                infoBgActive: 'rgb(var(--tui-blue-3))',

                infoDisabledColor: 'rgb(var(--tui-gray-4))',
                infoDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                infoDisabledBg: 'rgb(var(--tui-blue-1))',

                //warning
                warningColor: 'rgb(var(--tui-orange-6))',
                warningBorder: 'solid 1px rgb(var(--tui-orange-6))',
                warningBorderHover: 'solid 1px rgb(var(--tui-orange-5))',
                warningBorderActive: 'solid 1px rgb(var(--tui-orange-7))',
                warningBg: 'rgb(var(--tui-orange-1))',
                warningBgHover: 'rgb(var(--tui-orange-2))',
                warningBgActive: 'rgb(var(--tui-orange-3))',

                warningDisabledColor: 'rgb(var(--tui-gray-4))',
                warningDisabledBorder: 'solid 1px rgb(var(--tui-gray-2))',
                warningDisabledBg: 'rgb(var(--tui-orange-1))',
            }
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
        &:hover,
        &:focus {
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
            &:hover,
            &:focus {
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