'use strict';

var React = require('react');
var classnames = require('classnames');
var Box_styled = require('./Box.styled.js');
var common = require('../../helper/common.js');

const Box = (inProps) => {
    const props = common.mergeProps({}, inProps, {
        prefixClass: 'tui-box',
        component: 'div',
    });
    const { prefixClass, className, styleOverrides, component: RootComponent, ...rest } = props;
    const classNames = classnames(prefixClass, className);
    return React.createElement(Box_styled.StyledBox, { "$options": props, className: classNames, as: RootComponent, ...rest });
};

module.exports = Box;
//# sourceMappingURL=Box.js.map
