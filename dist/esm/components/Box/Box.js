import React from 'react';
import classnames from 'classnames';
import { StyledBox } from './Box.styled.js';
import { mergeProps } from '../../helper/common.js';

const Box = (inProps) => {
    const props = mergeProps({}, inProps, {
        prefixClass: 'tui-box',
        component: 'div',
    });
    const { prefixClass, className, styleOverrides, component: RootComponent, ...rest } = props;
    const classNames = classnames(prefixClass, className);
    return React.createElement(StyledBox, { "$options": props, className: classNames, as: RootComponent, ...rest });
};

export { Box as default };
//# sourceMappingURL=Box.js.map
