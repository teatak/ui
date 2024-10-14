'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classnames = require('classnames');
var styled = require('styled-components');
var theme = require('../../style/theme.js');
var defaultTheme = require('../../style/defaultTheme.js');
var ControlContext = require('./ControlContext.js');
var common = require('../../helper/common.js');

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
    return styled.css `
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
    return theme.mergeStyleOverrides('TuiControlLabel', props.$options);
}}
`;
const ControlLabel = (inProps) => {
    const ctx = React.useContext(ControlContext);
    const props = common.mergeProps(ctx, inProps, {
        prefixClass: 'tui-controllabel',
        size: 'md',
    });
    const { prefixClass, className, children, required, size, ...rest } = props;
    const classNames = classnames(prefixClass, className);
    return React.createElement(StyledControlLabel, { "$options": props, className: classNames, ...rest },
        required ? React.createElement("span", { className: prefixClass + '-symbol' }, "*") : null,
        children);
};

exports.StyledControlLabel = StyledControlLabel;
exports.default = ControlLabel;
//# sourceMappingURL=ControlLabel.js.map
