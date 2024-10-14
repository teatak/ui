'use strict';

var styled = require('styled-components');
var theme = require('../../style/theme.js');
var defaultTheme = require('../../style/defaultTheme.js');

const StyledRadio = styled.label `
    ${props => {
    const options = props.$options;
    const { prefixClass: _, variant, outlined, color, size, shape } = options;
    let baseSize = 8;
    let textFontSize = 14;
    let iconFontSize = 12;
    //按照尺寸定义变量
    switch (size) {
        case 'xs':
            baseSize = 6;
            textFontSize = 11;
            iconFontSize = baseSize * 2;
            break;
        case 'sm':
            baseSize = 7;
            textFontSize = 12;
            iconFontSize = baseSize * 2;
            break;
        case 'md':
            baseSize = 8;
            textFontSize = 14;
            iconFontSize = baseSize * 2;
            break;
        case 'lg':
            baseSize = 9;
            textFontSize = 14;
            iconFontSize = baseSize * 2;
            break;
        case 'xl':
            baseSize = 10;
            textFontSize = 16;
            iconFontSize = baseSize * 2;
            break;
    }
    let palette = defaultTheme.vars.palette[color];
    if (palette === undefined) {
        palette = defaultTheme.vars.palette.primary;
    }
    let outlineColor = color === 'neutral' ? defaultTheme.vars.palette.primary.main : palette.main;
    let borderColor = outlined ?
        variant === 'filled' ? palette.dark : palette.container
        : 'transparent';
    let foreColor, background, backgroundRipple, hoverOpacity, activeOpacity, foreColorChecked, backgroundChecked;
    foreColor = defaultTheme.vars.palette.surface.onDark;
    switch (variant) {
        case 'filled':
            background = palette.main;
            backgroundRipple = palette.onContainer;
            hoverOpacity = 0.2;
            activeOpacity = 0.4;
            backgroundChecked = palette.main;
            foreColorChecked = palette.onMain;
            break;
        case 'tonal':
            background = palette.light;
            backgroundRipple = palette.main;
            hoverOpacity = 0.1;
            activeOpacity = 0.2;
            backgroundChecked = palette.container;
            foreColorChecked = palette.onContainer;
            break;
        case 'text':
        default:
            background = "none";
            backgroundRipple = palette.main;
            hoverOpacity = 0.1;
            activeOpacity = 0.2;
            backgroundChecked = palette.light;
            foreColorChecked = palette.onLight;
            break;
    }
    return styled.css `
            --Radio-baseSize: ${baseSize};
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            font-family: var(--Radio-fontFamily, ${defaultTheme.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${defaultTheme.vars.lineHeight.md};
            margin-inline-start: var(--Radio-marginInlineStart);
            margin-inline-end: var(--Radio-marginInlineEnd);
            box-sizing: border-box;
            position: relative;
            display: inline-flex;
            vertical-align: middle;
            align-items: center;
            color: ${foreColor};
            transition: 
                opacity 150ms ease 0ms, 
                border-color 150ms ease 0ms, 
                background-color ease 0ms, 
                outline 150ms ease 0ms,
                box-shadow 150ms ease 0ms;
            & .${_}-action{
                position: absolute;
                inset: 0;
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
                width: var(--Radio-minWidth, calc(var(--Radio-baseSize) * 4px));
                height: var(--Radio-minHeight, calc(var(--Radio-baseSize) * 4px));
                border-radius: calc(var(--Radio-baseSize) * 2px);
                display: inline-flex;
                justify-content: center;
                align-items: center;
                flex-shrink: 0;
                &::before {
                    content: "";     
                    position: absolute;      
                    border-radius: inherit; 
                    pointer-events: none;
                    background: ${backgroundRipple};
                    inset: 0;
                    opacity: 0;            
                    transition: opacity 150ms ease 0ms; 
                }
                & .${_}-inner {
                    width: var(--Radio-inner-minWidth, calc(var(--Radio-baseSize) * 2px + 2px));
                    height: var(--Radio-inner-minHeight, calc(var(--Radio-baseSize) * 2px + 2px));
                    ${shape === 'round' ? styled.css `
                        border-radius: var(--Radio-radius, calc(var(--Radio-baseSize) * 2px));
                    ` : styled.css `
                        border-radius: var(--Radio-radius, ${defaultTheme.vars.radius.sm});
                    `}
                        background: var(--Radio-background, ${background}); 
                    box-sizing: border-box;
                    border-width: 2px;
                    border-style: solid;
                    border-color: var(--Radio-borderColor, ${borderColor});
                    outline-offset: var(--Radio-outlineOffset, 1px);
                    outline-color: ${outlineColor};
                    outline-width: 0px;
                    outline-style: solid;
                    display: flex;
                    transition: 
                        opacity 150ms ease 0ms,
                        background-color 150ms ease 0ms,
                        outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
                    & svg {
                        fill: ${foreColorChecked};
                        z-index: 1;
                        width: 100%;
                        height: 100%;
                        overflow: visible;
                        border-radius: 0;
                        opacity: 0;
                        transform: scale(0.6);
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
                        &::before {
                            opacity: ${hoverOpacity};
                        }
                    }
                    &:active, &.clicked {
                        &::before {
                            opacity: ${activeOpacity};
                        }
                    }
                }
            }
            &:has(\.${_}-element:focus-visible) {
                & .${_} {
                    & .${_}-inner  {
                        outline-width: 2px;
                    }
                }
            }
            &:has(\.${_}-element:checked) {
                & .${_} {
                    & .${_}-inner {
                        border-color: transparent;
                        background: ${backgroundChecked};
                        & svg {
                            opacity: 1;
                            transform: scale(1);
                            transition: 
                                opacity 150ms ease 0ms,
                                transform 150ms cubic-bezier(0.3, 0, 0.8, 0.15) 0ms;
                        }
                    }
                }
            }
            &:has(\.${_}-element:disabled) {
                opacity: .5;
                & .${_} {
                    cursor: default;
                }
            }
        `;
}}
     ${props => {
    return theme.mergeStyleOverrides('TuiRadio', props.$options);
}}
`;

exports.StyledRadio = StyledRadio;
//# sourceMappingURL=Radio.styled.js.map
