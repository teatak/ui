import React from 'react';
import classnames from 'classnames';
import { StyledGridItem } from './Grid.styled.js';

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
    return React.createElement(StyledGridItem, { className: classNames, "$options": options, ...rest }, props.children);
};

export { GridItem as default };
//# sourceMappingURL=Grid.Item.js.map
