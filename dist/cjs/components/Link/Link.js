'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var classnames = require('classnames');
var styled = require('styled-components');
var theme = require('../../style/theme.js');
var defaultTheme = require('../../style/defaultTheme.js');
var ControlContext = require('../Control/ControlContext.js');
var common = require('../../helper/common.js');
require('../Control/ControlLabel.js');

const StyledComponent = (props) => {
    const { component: Component, ...rest } = props;
    return React.createElement(Component, { ...rest });
};
const StyledLink = styled(StyledComponent) `
    ${props => {
    const options = props.$options;
    const { prefixClass: _, color, size } = options;
    let baseSize = 8;
    let textFontSize = 14;
    let iconFontSize = 12;
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
    //按照尺寸定义变量
    let palette = defaultTheme.vars.palette[color];
    if (palette === undefined) {
        palette = defaultTheme.vars.palette.primary;
    }
    const foreColor = palette.main;
    const hoverColor = palette.dark;
    return styled.css `
            --Link-baseSize: ${baseSize};
            --Icon-fontSize: ${iconFontSize};
            --Text-fontSize: ${textFontSize};
            color: ${foreColor};
            text-decoration: none;
            outline-offset:2px;
            outline-color:${foreColor};
            outline-width: 0px;
            outline-style: solid;
            border-radius: var(--Link-radius, ${defaultTheme.vars.radius.sm});
            font-family: var(--Link-fontFamily, ${defaultTheme.vars.fontFamily.body});
            font-size: calc(var(--Text-fontSize) * 1px);
            line-height: ${defaultTheme.vars.lineHeight.md};
            transition: 
                opacity 150ms ease 0ms,
                outline-width 250ms cubic-bezier(0, 0, 0, 3) 0ms;
         
            &.${_}-disabled {
                opacity: 0.5;
                pointer-events: none;
                cursor: not-allowed;
            }
            &:hover, &:active {
                color: ${hoverColor};;
            }
            &:focus-visible {
                outline-width: 2px;
            }
        `;
}}
    ${props => {
    return theme.mergeStyleOverrides('TuiLink', props.$options);
}}
`;
const Link = React.forwardRef((inProps, ref) => {
    const ctx = React.useContext(ControlContext);
    const props = common.mergeProps(ctx, inProps, {
        prefixClass: 'tui-link',
    });
    const { prefixClass, className, disabled, onClick, component = 'a', ...rest } = props;
    const classNames = classnames(prefixClass, {
        [`${prefixClass}-disabled`]: disabled,
    }, className);
    const handleClick = (e) => {
        if (disabled) {
            e.preventDefault();
            e.stopPropagation();
        }
        else {
            onClick && onClick(e);
        }
    };
    return React.createElement(StyledLink, { component: component, "$options": props, className: classNames, onClick: handleClick, ...rest });
});

exports.StyledLink = StyledLink;
exports.default = Link;
//# sourceMappingURL=Link.js.map
