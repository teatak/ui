import styled, { css } from 'styled-components'
import { ButtonOptionsProps } from './Button.types'
import theme, { mergeStyleOverrides, ColorTone, ColorVariant } from '@/style'
import { themes } from 'storybook/internal/theming'

export const StyledButton = styled.button<{ $options: ButtonOptionsProps }>`
    ${props => {
        const options = props.$options
        const { prefixClass: _, variant, color, outlined, elevation = [0, 0, 0], size, shape, icon } = options

        let baseSize = 8
        let textFontSize = 14
        let iconFontSize = 12
        //按照尺寸定义变量
        switch (size) {
            case 'xs':
                baseSize = 6
                textFontSize = 11
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
            case 'xl':
                baseSize = 10
                textFontSize = 16
                iconFontSize = baseSize * 2
                break
        }

        let palette = theme.vars.palette[color!] as ColorTone & ColorVariant
        if (palette === undefined) {
            palette = theme.vars.palette.primary
        }
        let outlineColor = color === 'neutral' ? theme.vars.palette.primary.main : palette.main
        let borderColor = outlined ? variant === 'filled' ?
            palette.dark :
            palette.main : 'transparent'

        let foreColor, background, backgroundRipple, hoverOpacity, activeOpacity

        switch (variant) {
            case 'filled':
                foreColor = palette.onMain
                background = palette.main
                backgroundRipple = theme.vars.palette.common.black
                hoverOpacity = 0.2
                activeOpacity = 0.3
                break
            case 'tonal':
                foreColor = palette.onContainer
                background = palette.container
                backgroundRipple = palette.main
                hoverOpacity = 0.1
                activeOpacity = 0.2
                break
            case 'text':
            default:
                foreColor = palette.onContainer
                background = 'none'
                backgroundRipple = palette.main
                hoverOpacity = 0.1
                activeOpacity = 0.2
                break
        }

        return css`
            --Button-baseSize: ${baseSize};
            --Button-elevationLevel: ${elevation[0]};
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            font-family: var(--Button-fontFamily, ${theme.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${theme.vars.lineHeight.md};
            min-height: var(--Button-minHeight, calc(var(--Button-baseSize) * 4px));
            margin-inline-start: var(--Button-marginInlineStart);
            margin-inline-end: var(--Button-marginInlineEnd);
            padding-inline: calc(var(--Button-baseSize) * 1px);
            box-sizing: border-box;
            position: relative;
            display: inline-flex;
            vertical-align: middle;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            text-decoration: none;
            user-select: none;
            border: none;
            outline: none;
            opacity: 1;
            color: var(--Button-color, ${foreColor});
            background:  var(--Button-background, ${background});
            box-shadow: 
                0px calc(1px*(clamp(0,var(--Button-elevationLevel),1) + clamp(0,var(--Button-elevationLevel) - 3,1) + 2*clamp(0,var(--Button-elevationLevel) - 4,1))) calc(1px*(2*clamp(0,var(--Button-elevationLevel),1) + clamp(0,var(--Button-elevationLevel) - 2,1) + clamp(0,var(--Button-elevationLevel) - 4,1))) 0px var(--Button-shadowColor, rgba(0, 0, 0, 0.2)),
                0px calc(1px*(clamp(0,var(--Button-elevationLevel),1) + clamp(0,var(--Button-elevationLevel) - 1,1) + 2*clamp(0,var(--Button-elevationLevel) - 2,3))) calc(1px*(3*clamp(0,var(--Button-elevationLevel),2) + 2*clamp(0,var(--Button-elevationLevel) - 2,3))) calc(1px*(clamp(0,var(--Button-elevationLevel),4) + 2*clamp(0,var(--Button-elevationLevel) - 4,1))) var(--Button-shadowColor, rgba(0, 0, 0, 0.12));
            transition: 
                width 150ms ease 0ms, 
                height 150ms ease 0ms, 
                box-shadow 150ms ease 0ms;

            & svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
                font-size: calc(var(--Icon-fontSize) * 1px);
            }
            & .${_}-span {
                z-index: 1;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                margin-inline: calc(var(--Button-baseSize) * 1px);
            }
            & .${_}-start-decorator, & .${_}-end-decorator {
                z-index: 1;
                position: relative;
                display: inline-flex;
                align-items: center;
                &.${_}-in-enter {
                    width: 0;
                }
                &.${_}-in-enter-active  {
                    width: calc(var(--Icon-fontSize) * 1px);
                    transition: width 150ms ease 0ms;
                }
                &.${_}-in-exit {
                    width: calc(var(--Icon-fontSize) * 1px);
                }
                &.${_}-in-exit-active {
                    width: 0;
                    transition: width 150ms ease 0ms;
                }
            }
            &.${_}-loading {
                opacity: 0.7;
                cursor: default;
                & .${_}-span {
                    & .${_}-span-text {
                        display: inline-flex;
                        line-height: 1;
                        color: transparent;
                    }
                    & .${_}-span-loading {
                        display: inline-flex;
                        position: absolute;
                        left: 50%;
                        transform: translate(-50%);
                    }
                }
            }
            ${shape === 'round' ? css`
                border-radius: var(--Button-radius, calc(var(--Button-baseSize) * 2px));
            `: css`
                border-radius: var(--Button-radius, ${theme.vars.radius.sm});
            `}
            &::after, &::before {
                border-radius: inherit;
            }
            ${icon && css`
                & .${_}-span {
                    display: flex;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 0;
                }                
            `}
            &::before {
                background: ${backgroundRipple};
                content: "";
                position: absolute;
                inset: 0;
                opacity: 0;            
                transition: opacity 150ms ease 0ms; 
            }
            &::after {
                content: "";
                position: absolute;
                inset: 0;
                border-width: 1px;
                border-style: solid;
                border-color: var(--Button-borderColor, ${borderColor});
                outline-offset: var(--Button-outlineOffset, 1px);
                outline-color: ${outlineColor};
                outline-width: 0px;
                outline-style: solid;
                transition: 
                    opacity 150ms ease 0ms,
                    outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
            }
            &:not(:disabled):not(.${_}-loading) {
                &:hover {
                    --Button-elevationLevel: ${elevation[1]};
                    &::before {
                        opacity: ${hoverOpacity};
                    }
                }
                &:active,&.clicked {
                    --Button-elevationLevel: ${elevation[2]};
                    &::before {
                        opacity: ${activeOpacity};
                    }
                }
                &:focus-visible {
                    &::after {
                        z-index: 1;
                        outline-width: 2px;
                    }
                }
            }
            &.${_}-disabled, &:disabled {
                opacity: 0.5;
                cursor: default;
            }
        `
    }}
    ${props => {
        return mergeStyleOverrides('TuiButton', props.$options)
    }}
`