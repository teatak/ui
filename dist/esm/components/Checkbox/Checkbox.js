import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { StyledCheckbox } from './Checkbox.styled.js';
import ControlContext from '../Control/ControlContext.js';
import { useMergeState, mergeProps } from '../../helper/common.js';
import '../Control/ControlLabel.js';

const Checkbox = React.forwardRef((inProps, ref) => {
    const [checked, setChecked] = useMergeState(false, {
        value: inProps.checked,
        defaultValue: inProps.defaultChecked,
    });
    const isActive = checked || inProps.indeterminate;
    const ctx = useContext(ControlContext);
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-checkbox',
        variant: isActive ? 'filled' : 'tonal',
        outlined: false,
        color: isActive ? 'primary' : 'neutral',
        shape: 'square',
        size: 'md',
    });
    const { prefixClass, style, icon, className, variant, outlined, color, shape, size, disabled, onChange, defaultChecked, indeterminate = false, styleOverrides, children, ...rest } = props;
    const inputRef = useRef(null);
    React.useImperativeHandle(ref, () => inputRef.current, []);
    const classNamesRoot = classnames(`${prefixClass}-root`, `${prefixClass}-${variant}`, `${prefixClass}-size-${size}`, `${prefixClass}-color-${color}`, `${prefixClass}-shape-${shape}`, {
        [`${prefixClass}-outlined`]: outlined,
        [`${prefixClass}-checked`]: checked,
        [`${prefixClass}-indeterminate`]: indeterminate,
        [`${prefixClass}-disabled`]: disabled,
    }, className);
    const handleChange = (e) => {
        if (!indeterminate) {
            setChecked(e.target.checked);
            onChange && onChange(e);
        }
    };
    return React.createElement(StyledCheckbox, { className: classNamesRoot, "$options": props },
        React.createElement("div", { className: prefixClass + '-action' },
            React.createElement("input", { onClick: (e) => {
                    //disable click when indeterminate
                    if (indeterminate) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                }, onChange: handleChange, className: prefixClass + '-element', type: 'checkbox', disabled: disabled, ref: inputRef, checked: checked, ...rest })),
        typeof children === 'function' ? children(checked, indeterminate) :
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: prefixClass },
                    React.createElement("div", { className: prefixClass + '-inner' }, icon ? icon : React.createElement("svg", { viewBox: "0 0 28 28", "aria-hidden": "true" },
                        React.createElement("rect", { className: "mark short" }),
                        React.createElement("rect", { className: "mark long" })))),
                children ? React.createElement("span", { className: prefixClass + '-text' }, children) : null));
});

export { Checkbox as default };
//# sourceMappingURL=Checkbox.js.map
