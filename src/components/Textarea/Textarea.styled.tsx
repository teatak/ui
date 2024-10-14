import styled, { css } from 'styled-components'
import { TextareaOptionsProps } from './Textarea.types'
import theme, { mergeStyleOverrides, ColorTone, ColorVariant } from '@/style'

export const StyledTextareaRoot = styled.div<{ $options: TextareaOptionsProps }>`
    ${(props) => {
        const options = props.$options
        const { prefixClass: _, shape, size, elevation = [0, 0, 0], variant, color, outlined } = options
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

        const dot_ = '.' + _
        let palette = theme.vars.palette[color!] as ColorTone & ColorVariant
        if (palette === undefined) {
            palette = theme.vars.palette.primary
        }
        let outlineColor = color === 'neutral' ? theme.vars.palette.primary.main : palette.main
        let borderColor = outlined ? variant === 'filled' ?
            color === 'neutral' ?
                theme.vars.palette.primary.dark : palette.dark :
            color === 'neutral' ?
                theme.vars.palette.primary.main : palette.main : 'transparent'

        const colorRewrite = variant === 'filled' ? palette[5] : palette[90]

        let foreColor, background, backgroundRipple, backgroundFocus, foreColorDisabled, backgroundDisabled, borderColorDisabled
        switch (variant) {
            case 'filled':
                foreColor = palette.onMain
                background = palette.main
                backgroundRipple = palette.onContainer
                backgroundFocus = palette.main
                break
            case 'tonal':
                foreColor = palette.onLight
                background = palette.light
                backgroundRipple = palette.main
                backgroundFocus = "transparent"
                break
            case 'text':
            default:
                foreColor = palette.onContainer
                background = "none"
                backgroundRipple = "transparent"
                backgroundFocus = "transparent"
                break
        }
        foreColorDisabled = theme.vars.palette.neutral.container
        backgroundDisabled = theme.vars.palette.neutral.light
        borderColorDisabled = outlined ? theme.vars.palette.neutral.container : "transparent"

        return css`
            --Input-baseSize: ${baseSize};
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            --Input-minHeight: calc(var(--Input-baseSize) * 4px);
            --Input-decoratorChildHeight: calc((var(--Input-baseSize) - 1) * 4px);
            --Input-decoratorChildOffset: calc(var(--Input-baseSize) * 1px - 2px);
            --Input-elevationLevel: ${elevation[0]};
            ${shape === 'round' ? css`
                --Input-decoratorChildRadius: calc((var(--Input-baseSize) - 1) * 2px);
            `: css`
                --Input-decoratorChildRadius: calc(var(--Input-radius, ${theme.vars.radius.sm}) - 2px);
            `}
            cursor: text;
            display: flex;
            flex-direction: column;
            position: relative;
            box-sizing: border-box;
            width: 100%;
            font-family: var(--Textarea-fontFamily, ${theme.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${theme.vars.lineHeight.md};
            min-height: var(--Input-minHeight);
            color: var(--Input-color, ${foreColor});
            background:  var(--Input-background, ${background});
            border: none;
            outline: none;
            padding-inline-start: calc(var(--Input-baseSize) * 1px);
            padding-block: calc(var(--Input-baseSize) * 1px);
            box-shadow: 
                0px calc(1px*(clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 3,1) + 2*clamp(0,var(--Input-elevationLevel) - 4,1))) calc(1px*(2*clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 2,1) + clamp(0,var(--Input-elevationLevel) - 4,1))) 0px var(--Input-shadowColor, rgba(0, 0, 0, 0.2)),
                0px calc(1px*(clamp(0,var(--Input-elevationLevel),1) + clamp(0,var(--Input-elevationLevel) - 1,1) + 2*clamp(0,var(--Input-elevationLevel) - 2,3))) calc(1px*(3*clamp(0,var(--Input-elevationLevel),2) + 2*clamp(0,var(--Input-elevationLevel) - 2,3))) calc(1px*(clamp(0,var(--Input-elevationLevel),4) + 2*clamp(0,var(--Input-elevationLevel) - 4,1))) var(--Input-shadowColor, rgba(0, 0, 0, 0.12));
            transition: 
                opacity 150ms ease 0ms, 
                border-color 150ms ease 0ms, 
                background-color ease 0ms, 
                outline 150ms ease 0ms,
                box-shadow 150ms ease 0ms;
       
            &::before {
                content: "";     
                position: absolute;       
                pointer-events: none;
                background: ${backgroundRipple};
                inset: 0;
                opacity: 0;            
                transition: opacity 150ms ease 0ms; 
            }
            &::after {
                content: "";
                position: absolute;
                pointer-events: none;
                inset: 0;
                border-width: 1px;
                border-style: solid;
                border-color: var(--Input-borderColor, ${borderColor});
                outline-offset: -1px;
                outline-color: ${outlineColor};
                outline-width: 0px;
                outline-style: solid;
                transition: 
                    opacity 150ms ease 0ms,
                    outline 150ms cubic-bezier(0.18, 0.89, 0.32, 1.28) 0ms;
            }
            & svg {
                user-select: none;
                width: 1em;
                height: 1em;
                fill: currentColor;
                font-size: calc(var(--Icon-fontSize) * 1px);
            }
            &:has(\.${_}-element:not(:disabled)) {
                &:hover {
                    --Input-elevationLevel: ${elevation[1]};
                    &::before {
                        opacity: .1;
                    }
                }
            }
            /* has input focus */
            &:has(\.${_}-element:focus) {
                --Input-elevationLevel: ${elevation[2]};
                background: ${backgroundFocus};
                &::before {
                    opacity: 0;
                }
                &::after {
                    z-index: 1;
                    outline-width: 2px;
                }
            }
            & .${_} {
                display: inline-flex;
                flex: auto;
                & .${_}-element {
                    outline: none;
                    margin: 0;
                    position: relative;
                    padding-inline: 0 calc(var(--Input-baseSize) * 1px);
                    padding-block: 0;
                    box-sizing: border-box;
                    border: none;
                    background: transparent;
                    text-overflow: ellipsis;
                    flex: auto;
                    resize: none;
                    font-family: inherit;
                    font-size: calc(var(--Text-fontSize) * 1px);
                    font-style: inherit;
                    font-weight: inherit;
                    line-height: inherit;
                    
                    color: ${colorRewrite};
                    height: 100%;
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
                    &:disabled {
                        cursor: default;
                        color: ${foreColorDisabled};
                    }
                }
            }
            ${shape === 'round' ? css`
                border-radius: calc(var(--Input-baseSize) * 2px);
                
            `: css`
                border-radius: var(--Input-radius, ${theme.vars.radius.sm});
               
            `} 
            &::before, &::after {
                border-radius: inherit;
            }
            & .${_}-start-decorator {
                display: flex;
                position: relative;
                margin-inline-end: calc(var(--Input-baseSize) * 1px);
                margin-block-end: calc(var(--Input-baseSize) * 1px);
                &.${_}-in-enter {
                    opacity: 0;
                }
                &.${_}-in-enter-active  {
                    opacity: 1;
                    transition: 
                        opacity 150ms ease 50ms,
                        margin-inline-start 150ms ease 0ms;
                }
                &.${_}-in-exit {
                    opacity: 1;
                }
                &.${_}-in-exit-active {
                    opacity: 0;
                    transition: 
                        opacity 150ms ease 0ms,
                        margin-inline-start 150ms ease 0ms;
                } 
            }
            & .${_}-end-decorator {
                display: flex;
                position: relative;
                margin-inline-end: calc(var(--Input-baseSize) * 1px);
                margin-block-start: calc(var(--Input-baseSize) * 1px);
                &.${_}-in-enter {
                    opacity: 0;
                }
                &.${_}-in-enter-active  {
                    opacity: 1;
                    transition: 
                        opacity 150ms ease 50ms,
                        margin-inline-end 150ms ease 0ms;
                }
                &.${_}-in-exit {
                    opacity: 1;
                }
                &.${_}-in-exit-active {
                    opacity: 0;
                    transition: 
                        opacity 150ms ease 0ms,
                        margin-inline-end 150ms ease 0ms;
                } 
            }
            &:has(\.${_}-element:disabled) {
                --Input-elevationLevel: ${elevation[0]};
                cursor: default;
                color: ${foreColorDisabled};
                background: ${backgroundDisabled};
                &::after {
                    border-color: rgb(${borderColorDisabled});
                }
            }
        `
    }}
    ${props => {
        return mergeStyleOverrides('TuiTextarea', props.$options)
    }}
`