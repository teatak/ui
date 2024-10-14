import styled, { css } from 'styled-components';
import { mergeStyleOverrides } from '../../style/theme.js';
import defaultTheme from '../../style/defaultTheme.js';

const StyledChip = styled.div `
    ${props => {
    const options = props.$options;
    const { prefixClass: _, variant, color, outlined, elevation = [0, 0, 0], size, shape, icon } = options;
    let baseSize = 8;
    let textFontSize = 14;
    let iconFontSize = 12;
    //按照尺寸定义变量
    switch (size) {
        case 'xs':
            baseSize = 4;
            textFontSize = 11;
            iconFontSize = baseSize * 2;
            break;
        case 'sm':
            baseSize = 5;
            textFontSize = 12;
            iconFontSize = baseSize * 2;
            break;
        case 'md':
            baseSize = 6;
            textFontSize = 14;
            iconFontSize = baseSize * 2;
            break;
        case 'lg':
            baseSize = 7;
            textFontSize = 14;
            iconFontSize = baseSize * 2;
            break;
        case 'xl':
            baseSize = 8;
            textFontSize = 16;
            iconFontSize = baseSize * 2;
            break;
    }
    let palette = defaultTheme.vars.palette[color];
    if (palette === undefined) {
        palette = defaultTheme.vars.palette.primary;
    }
    let outlineColor = color === 'neutral' ? defaultTheme.vars.palette.primary.main : palette.main;
    let borderColor = outlined ? variant === 'filled' ?
        color === 'neutral' ?
            defaultTheme.vars.palette.primary.dark : palette.dark :
        color === 'neutral' ?
            defaultTheme.vars.palette.primary.main : palette.main : 'transparent';
    let foreColor, background, backgroundRipple, hoverOpacity, activeOpacity;
    switch (variant) {
        case 'filled':
            foreColor = palette.onMain;
            background = palette.main;
            backgroundRipple = palette.onContainer;
            hoverOpacity = 0.2;
            activeOpacity = 0.4;
            break;
        case 'tonal':
            foreColor = palette.onContainer;
            background = palette.container;
            backgroundRipple = palette.main;
            hoverOpacity = 0.1;
            activeOpacity = 0.2;
            break;
        case 'text':
        default:
            foreColor = palette.onContainer;
            background = 'none';
            backgroundRipple = palette.main;
            hoverOpacity = 0.1;
            activeOpacity = 0.2;
            break;
    }
    return css `
            --Chip-baseSize: ${baseSize};
            --Chip-elevationLevel: ${elevation[0]};
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            --Chip-outlineColor: ${outlineColor};
            --ChipDelete-size: calc(var(--Chip-minHeight, calc(var(--Chip-baseSize) * 4px)) - 4px);
            --ChipDelete-offset: calc(var(--Chip-baseSize) * 1px - 2px);
            --ChipDelete-ripple: ${backgroundRipple};
            --ChipDelete-outlineColor: ${outlineColor};

            ${shape === 'round' ? css `
                --ChipDelete-radius: calc((var(--Chip-baseSize) - 1) * 2px);
            ` : css `
                --ChipDelete-radius: calc(var(--Chip-radius, ${defaultTheme.vars.radius.sm}) - 2px);
            `}
            font-family: var(--Chip-fontFamily, ${defaultTheme.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${defaultTheme.vars.lineHeight.md};
            min-height: var(--Chip-minHeight, calc(var(--Chip-baseSize) * 4px));
            margin-inline-start: var(--Chip-marginInlineStart);
            margin-inline-end: var(--Chip-marginInlineEnd);
            padding-inline: calc(var(--Chip-baseSize) * 1px);
            box-sizing: border-box;
            position: relative;
            display: inline-flex;
            vertical-align: middle;
            justify-content: center;
            align-items: center;
            color: var(--Chip-color, ${foreColor});
            background:  var(--Chip-background, ${background});

            box-shadow: 
                0px calc(1px*(clamp(0,var(--Chip-elevationLevel),1) + clamp(0,var(--Chip-elevationLevel) - 3,1) + 2*clamp(0,var(--Chip-elevationLevel) - 4,1))) calc(1px*(2*clamp(0,var(--Chip-elevationLevel),1) + clamp(0,var(--Chip-elevationLevel) - 2,1) + clamp(0,var(--Chip-elevationLevel) - 4,1))) 0px var(--Chip-shadowColor, rgba(0, 0, 0, 0.2)),
                0px calc(1px*(clamp(0,var(--Chip-elevationLevel),1) + clamp(0,var(--Chip-elevationLevel) - 1,1) + 2*clamp(0,var(--Chip-elevationLevel) - 2,3))) calc(1px*(3*clamp(0,var(--Chip-elevationLevel),2) + 2*clamp(0,var(--Chip-elevationLevel) - 2,3))) calc(1px*(clamp(0,var(--Chip-elevationLevel),4) + 2*clamp(0,var(--Chip-elevationLevel) - 4,1))) var(--Chip-shadowColor, rgba(0, 0, 0, 0.12));
            transition: 
                width 150ms ease 0ms, 
                height 150ms ease 0ms, 
                box-shadow 150ms ease 0ms;

            & .${_}-element {
                position: absolute;
                inset: 0;
                border: 0;
                padding: inherit;
                margin: inherit;
                cursor: pointer;
                text-decoration: none;
                border-radius: inherit;
                opacity: 0;
                z-index: 0;
                outline: 0;
                background: ${backgroundRipple};
                transition: opacity 150ms ease 0ms;
                &:disabled {
                    cursor: default;
                }
                &:not(:disabled) {
                    &:hover {
                        opacity: ${hoverOpacity};
                    }
                    &:active {
                        opacity: ${activeOpacity};
                    }
                    .clicked& {
                        opacity: ${activeOpacity};
                    }
                }
            }
            & svg {
                width: 1em;
                height: 1em;
                fill: currentColor;
                font-size: calc(var(--Icon-fontSize) * 1px);
            }
            & .${_}-span {
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                pointer-events: none;
                margin-inline: calc(var(--Chip-baseSize) * 1px);
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
            ${shape === 'round' ? css `
                border-radius: var(--Chip-radius, calc(var(--Chip-baseSize) * 2px));
            ` : css `
                border-radius: var(--Chip-radius, ${defaultTheme.vars.radius.sm});
            `}
            ${icon && css `
                & .${_}-span {
                    display: flex;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    margin: 0;
                }                
            `}
            &::after {
                content: "";
                position: absolute;
                pointer-events: none;
                border-radius: inherit;
                inset: 0;
                border-width: 1px;
                border-style: solid;
                border-color: var(--Chip-borderColor, ${borderColor});
                outline-offset: var(--Chip-outlineOffset, 1px);
                outline-color: var(--Chip-outlineColor);
                outline-width: 0px;
                outline-style: solid;
                transition: 
                    opacity 150ms ease 0ms,
                    outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
            }
            &:has(\.${_}-element:focus-visible) {
                &::after {
                    z-index: 1;
                    outline-width: 2px;
                }
            }
            &.${_}-disabled, &:has(\.${_}-element:disabled) {
                opacity: 0.5;
                cursor: default;
            }
        `;
}}
    ${props => {
    return mergeStyleOverrides('TuiChip', props.$options);
}}
`;
const StyledChipDelete = styled.span `
    ${props => {
    const options = props.$options;
    const { prefixClass: _, color } = options;
    let palette = defaultTheme.vars.palette[color];
    return css `
            ${palette && css `
                --ChipDelete-ripple: ${palette.main};
                --ChipDelete-outlineColor: ${palette.main};
                color: var(--ChipDelete-color, ${palette.main});
            `}
            display: inline-flex;
            justify-content: center;
            align-items: center;
            position: relative;
            border-radius: var(--ChipDelete-radius, 50%);
            min-height: var(--ChipDelete-size,1em);
            min-width: var(--ChipDelete-size,1em);
            margin-inline: calc(var(--ChipDelete-offset) * -1); 
            outline-offset: var(--ChipDelete-outlineOffset, 1px);
            outline-color: var(--ChipDelete-outlineColor);
            outline-width: 0px;
            outline-style: solid;
            text-overflow: ellipsis;
            transition: 
                opacity 150ms ease 0ms,
                outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;

            & .${_}-element {
                position: absolute;
                cursor: pointer;
                inset: 0;
                margin: 0;
                padding: 0;
                border: 0;
                outline: 0;
                opacity: 0;
                background: var(--ChipDelete-ripple, #000);
                border-radius: inherit;
                width: 100%;
                height: 100%;
                &:not(:disabled) {
                    &:hover {
                        opacity: 0.35;
                    }
                    &:active {
                        opacity: 0.5;
                    }
                    .clicked& {
                        opacity: 0.5;
                    }
                }
            }
            & .${_}-span { 
                z-index: 1;
                display: flex;
                position: relative;
                justify-content: center;
                align-items: center;
                pointer-events: none;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            &:has(\.${_}-element:focus-visible) {
                outline-width: 2px;
            }
            &.${_}-disabled, &:has(\.${_}-element:disabled) {
                opacity: 0.5;
                & .${_}-element { 
                    cursor: default;
                }
            }
        `;
}}
    ${props => {
    return mergeStyleOverrides('TuiChipDelete', props.$options);
}}
`;

export { StyledChip, StyledChipDelete };
//# sourceMappingURL=Chip.styled.js.map
