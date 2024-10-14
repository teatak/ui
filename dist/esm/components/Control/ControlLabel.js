import React, { useContext } from 'react';
import classnames from 'classnames';
import styled, { css } from 'styled-components';
import { mergeStyleOverrides } from '../../style/theme.js';
import defaultTheme from '../../style/defaultTheme.js';
import ControlContext from './ControlContext.js';
import { mergeProps } from '../../helper/common.js';

const StyledControlLabel = styled.label `
    ${props => {
    const options = props.$options;
    const { prefixClass: _, size } = options;
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
    return css `
            --ControlLabel-baseSize: ${baseSize};
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            font-family: var(--ControlLabel-fontFamily, ${defaultTheme.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: var(--ControlLabel-lineHeight, calc(var(--ControlLabel-baseSize) * 4px));
            display: inline-flex;
            gap: 4px;
            align-items: center;
            & .${_}-symbol {
                color: ${defaultTheme.vars.palette.danger.main};
            }
            & .${_}-tooltip {
                cursor: pointer;
            }
        `;
}}
    ${props => {
    return mergeStyleOverrides('TuiControlLabel', props.$options);
}}
`;
const ControlLabel = (inProps) => {
    const ctx = useContext(ControlContext);
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-controllabel',
        size: 'md',
    });
    const { prefixClass, className, children, required, size, ...rest } = props;
    const classNames = classnames(prefixClass, className);
    return React.createElement(StyledControlLabel, { "$options": props, className: classNames, ...rest },
        required ? React.createElement("span", { className: prefixClass + '-symbol' }, "*") : null,
        children);
};

export { StyledControlLabel, ControlLabel as default };
//# sourceMappingURL=ControlLabel.js.map
