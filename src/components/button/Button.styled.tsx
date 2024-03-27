
import styled, { css } from 'styled-components'
import { VariantType, StyledCommonProps, SizeType, ColorType } from '../types'
import theme, { PaletteRangeVariant } from '../../style'

interface StyledButtonProps {
    $options: {
        variant: VariantType
        size: SizeType
        color: ColorType
    } & StyledCommonProps
}

/**
--Button-baseSize
--Icon-fontSize
--Text-fontSize
--Button-radius
*/

export const StyledButton = styled.button<StyledButtonProps>`
    ${(props) => {
        const options = props.$options
        const _ = options.prefixClass
        const styleOverrides = options.styleOverrides
        let baseSize = 8
        let textFontSize = 12
        let iconFontSize = 12
        //按照尺寸定义变量
        switch (options.size) {
            case 'xs':
                baseSize = 6
                textFontSize = 12
                iconFontSize = baseSize * 2
                break
            case 'sm':
                baseSize = 7
                textFontSize = 12
                iconFontSize = baseSize * 2
                break
            case 'md':
                baseSize = 8
                textFontSize = 14
                iconFontSize = baseSize * 2
                break
            case 'lg':
                baseSize = 9
                textFontSize = 14
                iconFontSize = baseSize * 2
                break
        }

        return css`
            &.${_} {
                --Button-baseSize: ${baseSize};
                --Icon-fontSize: ${iconFontSize};
                --Text-fontSize: ${textFontSize};
                min-height: var(--Button-minHeight, calc(var(--Button-baseSize) * 4px));
                margin-inline-start: var(--Button-marginInlineStart);
                margin-inline-end: var(--Button-marginInlineEnd);
                box-sizing: border-box;
                position: relative;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: var(--Button-radius, ${theme.vars.radius.sm});
                padding-inline: calc(var(--Button-baseSize) * 1px);
                outline: none;
                border: none;
                text-decoration: none;
                font-size: calc(var(--Text-fontSize) * 1px);
                user-select: none;
                color: var(--tui-text-color-2);
                background-origin: border-box;
                opacity: 1;
                transition: 
                    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                &>span {
                    display: flex;
                    line-height: 1;
                    &>svg {
                        user-select: none;
                        width: 1em;
                        height: 1em;
                        fill: currentColor;
                        font-size: calc(var(--Icon-fontSize) * 1px);
                    }
                }
                & .${_}-span {
                    position: relative;
                    justify-content: center;
                    align-items: center;
                    margin-inline: calc(var(--Button-baseSize) * 1px);
                }
                & .${_}-start-decorator, & .${_}-end-decorator {
                    display: inline-flex;
                    align-items: center;
                    &.${_}-in-enter {
                        width: 0;
                    }
                    &.${_}-in-enter-active  {
                        width: calc(var(--Icon-fontSize) * 1px);
                        transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    }
                    &.${_}-in-exit {
                        width: calc(var(--Icon-fontSize) * 1px);
                    }
                    &.${_}-in-exit-active {
                        width: 0;
                        transition: width 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    }
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
                &.${_}-shape-round {
                    border-radius: calc(var(--Button-baseSize) * 2px);
                }
                &.${_}-shape-circle {
                    border-radius: 50%;
                    height: var(--Button-minHeight, calc(var(--Button-baseSize) * 4px));
                    width: var(--Button-minHeight, calc(var(--Button-baseSize) * 4px));
                    padding: 0;
                    overflow: hidden;
                    & .${_}-span {
                        margin: 0;
                    }
                }
                ${buttonBase(_, options.color, options.variant)}
                ${css(styleOverrides || {})}
            }
        `
    }}
`

const buttonBase = (_: string, color: ColorType, variant: VariantType) => {
    const palette = theme.vars.scheme[color as keyof typeof theme.vars.scheme] as PaletteRangeVariant
    const borderWidth = palette[variant + 'BorderWidth']

    return css`
        &.${_}-${variant} {
            &.${_}-color-${color} {
                color: ${palette[variant + 'Color']};
                background: ${palette[variant + 'Background']};
                border-width: ${borderWidth};
                border-color: ${palette[variant + 'Border']};
                border-style: solid;
                padding-inline: calc(var(--Button-baseSize) * 1px - ${borderWidth});
                box-shadow: ${palette[variant + 'BoxShadow']};
                &:hover {
                    background: ${palette[variant + 'BackgroundHover']};
                    box-shadow: ${palette[variant + 'BoxShadowHover']};
                }
                &:active,&.clicked {
                    background: ${palette[variant + 'BackgroundActive']};
                    box-shadow: ${palette[variant + 'BoxShadowActive']};
                }
                &:focus-visible {
                    outline-offset: 1px;
                    outline: solid 2px rgb(${theme.vars.scheme.primary[6]});
                }
                &.${_}-loading {
                    cursor: default;
                    color: ${palette[variant + 'Color']};
                    background: ${palette[variant + 'Background']};
                    border-color: ${palette[variant + 'Border']};
                    box-shadow: ${palette[variant + 'BoxShadow']};
                }
                &.${_}-disabled,&:disabled{
                    cursor: default;
                    color: ${palette[variant + 'ColorDisabled']};
                    background: ${palette[variant + 'BackgroundDisabled']};
                    border-color: ${palette[variant + 'BorderDisabled']};
                    box-shadow: ${palette[variant + 'BoxShadowDisabled']};
                }
            }
        }
    `
}