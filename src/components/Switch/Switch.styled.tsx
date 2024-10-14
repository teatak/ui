import styled, { css } from 'styled-components'
import { SwitchOptionsProps } from './Switch.types'
import theme, { mergeStyleOverrides, ColorTone, ColorVariant } from '@/style'

export const StyledSwitch = styled.label<{ $options: SwitchOptionsProps }>`
    ${props => {
        const options = props.$options
        const { prefixClass: _, variant, outlined, color, size, shape, thinTrack } = options
        let baseSize = 8
        let textFontSize = 14
        let iconFontSize = 12
        //按照尺寸定义变量
        switch (size) {
            case 'xs':
                baseSize = 6
                textFontSize = 11
                iconFontSize = baseSize * 2 - 2
                break
            case 'sm':
                baseSize = 7
                textFontSize = 12
                iconFontSize = baseSize * 2 - 2
                break
            case 'md':
                baseSize = 8
                textFontSize = 14
                iconFontSize = baseSize * 2 - 2
                break
            case 'lg':
                baseSize = 9
                textFontSize = 14
                iconFontSize = baseSize * 2 - 2
                break
            case 'xl':
                baseSize = 10
                textFontSize = 16
                iconFontSize = baseSize * 2 - 2
                break
        }
        let palette = theme.vars.palette[color!] as ColorTone & ColorVariant
        if (palette === undefined) {
            palette = theme.vars.palette.primary
        }
        let outlineColor = color === 'neutral' ? theme.vars.palette.primary.main : palette.main
        let borderColor = outlined ?
            variant === 'filled' ? theme.vars.palette.neutral.dark : theme.vars.palette.neutral.container
            : 'transparent'
        let borderColorChecked = outlined ?
            variant === 'filled' ? palette.dark : palette.main
            : 'transparent'

        let foreColor, handleBackground, handleForeColor, background, backgroundRipple,
            hoverOpacity, activeOpacity, handleForeColorChecked, handleBackgroundChecked, backgroundChecked

        foreColor = theme.vars.palette.surface.onDark
        switch (variant) {
            case 'filled':
                handleBackground = theme.vars.palette.common.white
                handleBackgroundChecked = theme.vars.palette.common.white
                handleForeColor = palette.main
                handleForeColorChecked = palette.main

                background = palette.container
                backgroundChecked = palette.main
                backgroundRipple = palette.dark

                hoverOpacity = 0.2
                activeOpacity = 0.3
                break
            case 'tonal':
                handleBackground = palette.dark
                handleBackgroundChecked = palette.dark
                handleForeColor = palette.onDark
                handleForeColorChecked = palette.onDark

                background = palette.light
                backgroundChecked = palette.container
                backgroundRipple = palette.main

                hoverOpacity = 0.2
                activeOpacity = 0.3
                break
            case 'text':
            default:
                handleBackground = palette.dark
                handleBackgroundChecked = palette.dark
                handleForeColor = palette.onDark
                handleForeColorChecked = palette.onDark

                background = "none"
                backgroundChecked = palette.light
                backgroundRipple = palette.main

                hoverOpacity = 0.2
                activeOpacity = 0.3
                break
        }

        return css`
            --Switch-baseSize: ${baseSize};
            --Switch-gap: calc(var(--Switch-baseSize) * 1px);
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            font-family: var(--Switch-fontFamily, ${theme.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${theme.vars.lineHeight.md};
            margin-inline-start: var(--Switch-marginInlineStart);
            margin-inline-end: var(--Switch-marginInlineEnd);
            box-sizing: border-box;
            position: relative;
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            color: ${foreColor};
            height: var(--Switch-rootHeight, calc(var(--Switch-baseSize) * 4px));
            gap: var(--Switch-gap);
            transition: 
                opacity 150ms ease 0ms, 
                border-color 150ms ease 0ms, 
                background-color ease 0ms, 
                outline 150ms ease 0ms,
                box-shadow 150ms ease 0ms;

            & .${_}-element {
                cursor: pointer;
                position: absolute;
                margin: 0;
                outline: 0;
                opacity: 0; 
                width: 100%;
                height: 100%;
                &:disabled {
                    cursor: default;
                }
            } 
            & svg {
                user-select: none;
                width: 1em;
                height: 1em;
                fill: currentColor;
                font-size: calc(var(--Icon-fontSize) * 1px);
            }
            & .${_} {
                position: relative;
                cursor: pointer;
                width: var(--Switch-width, calc(var(--Switch-baseSize) * 5px));
                height: var(--Switch-height, calc(var(--Switch-baseSize) * 3px));
                flex-shrink: 0;      
                & .${_}-track-container {
                    position: absolute;
                    display: flex;
                    align-items: center;  
                    justify-content: center;
                    inset: 0;
                    & .${_}-track {
                        position: relative;
                        inset: 0;
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        ${thinTrack ? css`
                            width: var(--Switch-trackWidth, calc(var(--Switch-baseSize) * 4px));
                            height: var(--Switch-trackHeight, calc(var(--Switch-baseSize) * 1.8px));
                        `: css`
                            width: var(--Switch-trackWidth, calc(var(--Switch-baseSize) * 5px));
                            height: var(--Switch-trackHeight, calc(var(--Switch-baseSize) * 3px));
                        `}
                        background: var(--Switch-trackBackground, ${background}); 
                        ${shape === 'round' ? css`
                            border-radius: var(--Switch-radius, calc(var(--Switch-baseSize) / 2 * 3px));
                        `: css`
                            border-radius: var(--Switch-radius, ${theme.vars.radius.sm});
                        `}
                        transition: 
                            opacity 150ms ease 0ms,
                            background-color 150ms ease 0ms,
                            outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
                        
                        &::before {
                            content: "";     
                            position: absolute;       
                            pointer-events: none;
                            background: ${backgroundRipple};
                            inset: 0;
                            opacity: 0;            
                            transition: opacity 150ms ease 0ms; 
                            border-radius: inherit;
                        }
                        &::after {
                            content: "";     
                            position: absolute;       
                            pointer-events: none;
                            inset: 0;
                            box-sizing: border-box;
                            border-width: 1px;
                            border-style: solid;
                            border-color: var(--Switch-borderColor, ${borderColor});
                            outline-offset: var(--Switch-outlineOffset, 1px);
                            outline-color: ${outlineColor};
                            outline-width: 0px;
                            outline-style: solid;
                            transition: 
                                opacity 150ms ease 0ms,
                                outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
                            border-radius: inherit;
                        }
                    }  
                }   
                & .${_}-handle-container {
                    position: absolute;
                    width: var(--Switch-height, calc(var(--Switch-baseSize) * 3px));
                    height: var(--Switch-height, calc(var(--Switch-baseSize) * 3px));
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: 
                        margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s;
    
                    & .${_}-handle {
                        display: inline-flex;
                        justify-content: center;
                        align-items: center;
                        pointer-events: none;
                        inset: 0;
                        box-sizing: border-box;
                        ${shape === 'round' ? css`
                            border-radius: var(--Switch-handleRadius, calc(var(--Switch-baseSize) / 2 * 3px));
                        `: css`
                            border-radius: calc(var(--Switch-handleRadius, ${theme.vars.radius.sm}) - 2px);
                        `}
                        background: ${handleBackground};
                        color: ${handleForeColor};
                        outline-offset: 0px;
                        outline-color: ${outlineColor};
                        outline-width: 0px;
                        outline-style: solid;
                        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3);
                        width: var(--Switch-handleSize, calc(var(--Switch-baseSize) * 2px + 2px));
                        height: var(--Switch-handleSize, calc(var(--Switch-baseSize) * 2px + 2px));
                        transition: 
                            opacity 150ms ease 0ms,
                            outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
                    }                    
                }
                
            }
            & .${_}-text {
                user-select: none;
                display: inline-flex;
                justify-content: center;
                align-items: center;
            }
            &:has(\.${_}-element:not(:disabled)) {
                & .${_}  {
                    &:hover {
                        & .${_}-track-container {
                            & .${_}-track::before {
                                opacity: ${hoverOpacity};
                            }
                        }
                    }
                    &:active, &.clicked {
                        & .${_}-track-container {
                            & .${_}-track::before {
                                opacity: ${activeOpacity};
                            }
                        }
                    }
                }
            }
            &:has(\.${_}-element:focus-visible) {
                & .${_} {
                    & .${_}-track-container {
                        & .${_}-track  {
                            &::after {
                                ${!thinTrack && css`
                                    outline-width: 2px;
                                `}
                            }
                        }
                    }
                    & .${_}-handle-container {
                        & .${_}-handle {
                            ${thinTrack && css`
                                outline-width: 2px;
                            `}
                        }
                    }
                }
            }
            &:has(\.${_}-element:checked) {
                & .${_} {
                    & .${_}-track-container {
                        & .${_}-track {
                            background: ${backgroundChecked};
                            &::after {
                                border-color: ${borderColorChecked};
                            }
                        }
                    }
                    & .${_}-handle-container {
                        & .${_}-handle {
                            background: ${handleBackgroundChecked};
                            color: ${handleForeColorChecked};
                        }
                        margin-inline-start: calc(var(--Switch-width, calc(var(--Switch-baseSize) * 5px)) - var(--Switch-height, calc(var(--Switch-baseSize) * 3px)));
                    }
                }
            }            
            &:has(\.${_}-element:disabled) {
                opacity: .5;
                & .${_} {
                    cursor: default;
                }
            }
        `
    }}
     ${props => {
        return mergeStyleOverrides('TuiSwitch', props.$options)
    }}
`