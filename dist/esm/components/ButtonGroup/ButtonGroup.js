import React, { useContext } from 'react';
import classnames from 'classnames';
import ControlContext from '../Control/ControlContext.js';
import { mergeProps } from '../../helper/common.js';
import '../Control/ControlLabel.js';
import { StyledButtonGroup } from './ButtonGroup.style.js';

var ButtonGroup = (inProps) => {
    const ctx = useContext(ControlContext);
    const props = mergeProps(ctx, inProps, {
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
        React.createElement(StyledButtonGroup, { "$options": props, className: classNames, ...rest }, children));
};

export { ButtonGroup as default };
//# sourceMappingURL=ButtonGroup.js.map
