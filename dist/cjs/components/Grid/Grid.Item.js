'use strict';

var React = require('react');
var classnames = require('classnames');
var Grid_styled = require('./Grid.styled.js');

const GridItem = (props) => {
    const { prefixClass = 'tui-grid-item', span, offset, className, styleOverrides, ...rest } = props;
    const classNames = classnames(prefixClass, className);
    const options = {
        ...props,
        span,
        offset,
        prefixClass,
        styleOverrides,
    };
    return React.createElement(Grid_styled.StyledGridItem, { className: classNames, "$options": options, ...rest }, props.children);
};

module.exports = GridItem;
//# sourceMappingURL=Grid.Item.js.map
