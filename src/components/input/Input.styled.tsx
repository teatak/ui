
import styled, { css } from 'styled-components'
import { VariantType, StyledCommonProps, SizeType, ColorType } from '../types'
import theme, { PaletteRangeVariant } from '../../style'

interface StyledInputProps {
    $options: {
        variant: VariantType
        size: SizeType
        color: ColorType
    } & StyledCommonProps
}

export const StyledInput = styled.span<StyledInputProps>`
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
              &.${_}-root {
                --Input-baseSize: ${baseSize};
                --Icon-fontSize: ${iconFontSize};
                --Text-fontSize: ${textFontSize};
                cursor: text;
                display: flex;
                position: relative;
                box-sizing: border-box;
                width: 100%;
                line-height: 0px;
                font-size: calc(var(--Text-fontSize) * 1px);
                height: calc(var(--Input-baseSize) * 4px);
                padding-inline; calc(var(--Input-baseSize) * 1px);
                border-radius: var(--Input-radius, ${theme.vars.radius.sm});
                transition: 
                    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                & svg {
                    user-select: none;
                    width: 1em;
                    height: 1em;
                    fill: currentColor;
                    font-size: calc(var(--Icon-fontSize) * 1px);
                }
                & .${_} {
                    outline: none;
                    width: 100%;
                    background-origin: border-box;
                    box-sizing: border-box;
                    border: none;
                    background: transparent;
                    padding-inline: 0;
                    padding-block: 0;
                }
                &.${_}-shape-round {
                    border-radius: calc(var(--Input-baseSize) * 2px);
                }
                & .${_}-start-decorator {
                    display: inline-flex;
                    align-items: center;
                    margin-inline-end: calc(var(--Input-baseSize) * 1px);
                    &.${_}-in-enter {
                        opacity: 0;
                        margin-inline-end: 0;
                    }
                    &.${_}-in-enter-active  {
                        opacity: 1;
                        margin-inline-end: calc(var(--Input-baseSize) * 1px);
                        transition: 
                            opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                            margin-inline-end 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    }
                    &.${_}-in-exit {
                        opacity: 1;
                        margin-inline-end: calc(var(--Input-baseSize) * 1px);
                    }
                    &.${_}-in-exit-active {
                        opacity: 0;
                        margin-inline-end: 0;
                        transition: 
                            opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                            margin-inline-end 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    } 
                }
                & .${_}-end-decorator {
                    display: inline-flex;
                    align-items: center;
                    margin-inline-start: calc(var(--Input-baseSize) * 1px);
                    &.${_}-in-enter {
                        opacity: 0;
                        margin-inline-start: 0;
                    }
                    &.${_}-in-enter-active  {
                        opacity: 1;
                        margin-inline-start: calc(var(--Input-baseSize) * 1px);
                        transition: 
                            opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                            margin-inline-start 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    }
                    &.${_}-in-exit {
                        opacity: 1;
                        margin-inline-start: calc(var(--Input-baseSize) * 1px);
                    }
                    &.${_}-in-exit-active {
                        opacity: 0;
                        margin-inline-start: 0;
                        transition: 
                            opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                            margin-inline-start 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    } 
                }
                ${inputBase(_, options.color, options.variant)}
                ${css(styleOverrides || {})}
            }
        `
    }}
`

const inputBase = (_: string, color: ColorType, variant: VariantType) => {
    const palette = theme.vars.scheme[color as keyof typeof theme.vars.scheme] as PaletteRangeVariant
    const outlinePalette = color === 'neutral' ? theme.vars.scheme.primary : palette
    const colorRewrite = color === 'neutral' ? theme.vars.scheme.neutral[1] : palette[variant + "Color"]
    const borderWidth = palette[variant + 'BorderWidth']
    return css`
        &.${_}-${variant} {
            &.${_}-color-${color} {
                & .${_} {
                    color: ${colorRewrite};
                    &:-webkit-autofill,
                    &:-webkit-autofill:hover, 
                    &:-webkit-autofill:focus, 
                    &:-webkit-autofill:active{
                        color: ${colorRewrite} !important;
                        transition: background-color 5000s ease-in-out 0s;
                    }
                    &::placeholder {
                        color: ${colorRewrite};
                        opacity: 0.6;
                    }
                    &[disabled]{
                        cursor: default;
                        color: ${palette[variant + 'ColorDisabled']};
                    }
                }
                color: ${colorRewrite};
                border-width: ${borderWidth};
                border-color: ${palette[variant + 'Border']};
                border-style: solid;
                background: ${palette[variant + 'Background']};
                padding-inline: calc(var(--Input-baseSize) * 1px - ${borderWidth});
                &:hover {
                    border-width: 1px;
                    border-color: rgb(${outlinePalette[6]});
                    padding-inline: calc(var(--Input-baseSize) * 1px - 1px);
                }
                &:focus-within {
                    background: ${palette[variant + 'BackgroundFocus']};
                    border-width: 1px;
                    border-color: rgb(${outlinePalette[6]});
                    padding-inline: calc(var(--Input-baseSize) * 1px - 1px);
                    box-shadow: 
                        0px 0px 0px 2px rgb(${outlinePalette[2]});
                }
                &.${_}-disabled {
                    cursor: default;
                    color: ${palette[variant + 'ColorDisabled']};
                    background: ${palette[variant + 'BackgroundDisabled']};
                    border-color: ${palette[variant + 'BorderDisabled']};
                }
            }
        }
    `
}