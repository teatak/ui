'use strict';

var React = require('react');
var classnames = require('classnames');
var ControlContext = require('../Control/ControlContext.js');
var common = require('../../helper/common.js');
require('../Control/ControlLabel.js');
var ButtonGroup_style = require('./ButtonGroup.style.js');

var ButtonGroup = (inProps) => {
    const ctx = React.useContext(ControlContext);
    const props = common.mergeProps(ctx, inProps, {
        prefixClass: 'tui-buttongroup',
        direction: 'row',
        variant: 'tonal',
        outlined: false,
        color: 'neutral',
        shape: 'square',
        size: 'md',
    });
    const { prefixClass, direction, style, className, variant, outlined, elevation, color, shape, size, disabled, children, ...rest } = props;
    const classNames = classnames(prefixClass, `${prefixClass}-${variant}`, `${prefixClass}-size-${size}`, `${prefixClass}-color-${color}`, `${prefixClass}-shape-${shape}`, `${prefixClass}-direction-${direction}`, {
        [`${prefixClass}-outlined`]: outlined,
        [`${prefixClass}-disabled`]: disabled,
    }, className);
    const ctxOptions = {
        variant,
        color,
        outlined,
        elevation,
        shape,
        size,
        disabled,
    };
    return React.createElement(ControlContext.Provider, { value: ctxOptions },
        React.createElement(ButtonGroup_style.StyledButtonGroup, { "$options": props, className: classNames, ...rest }, children));
};

module.exports = ButtonGroup;
//# sourceMappingURL=ButtonGroup.js.map
