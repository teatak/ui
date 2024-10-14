import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { StyledRadio } from './Radio.styled.js';
import ControlContext from '../Control/ControlContext.js';
import { useMergeState, mergeProps } from '../../helper/common.js';
import '../Control/ControlLabel.js';

const Radio = React.forwardRef((inProps, ref) => {
    const [checked, setChecked] = useMergeState(false, {
        value: inProps.checked,
        defaultValue: inProps.defaultChecked,
    });
    const isActive = checked;
    const ctx = useContext(ControlContext);
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-radio',
        variant: isActive ? 'filled' : 'tonal',
        outlined: false,
        color: isActive ? 'primary' : 'neutral',
        shape: 'round',
        size: 'md',
    });
    const { prefixClass, style, icon, className, variant, outlined, color, shape, size, disabled, onChange, defaultChecked, styleOverrides, children, ...rest } = props;
    const options = {
        ...props,
    };
    const inputRef = useRef(null);
    React.useImperativeHandle(ref, () => inputRef.current, []);
    const classNamesRoot = classnames(`${prefixClass}-root`, `${prefixClass}-${variant}`, `${prefixClass}-size-${size}`, `${prefixClass}-color-${color}`, `${prefixClass}-shape-${shape}`, {
        [`${prefixClass}-outlined`]: outlined,
        [`${prefixClass}-checked`]: checked,
        [`${prefixClass}-disabled`]: disabled,
    }, className);
    const handleChange = (e) => {
        setChecked(e.target.checked);
        onChange && onChange(e);
    };
    return React.createElement(StyledRadio, { className: classNamesRoot, "$options": options },
        React.createElement("div", { className: prefixClass + '-action' },
            React.createElement("input", { onChange: handleChange, className: prefixClass + '-element', type: 'radio', disabled: disabled, ref: inputRef, checked: checked, ...rest })),
        typeof children === 'function' ? children(checked) :
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: prefixClass },
                    React.createElement("div", { className: prefixClass + '-inner' }, icon ? icon : React.createElement("svg", { viewBox: "0 0 28 28", "aria-hidden": "true" },
                        React.createElement("circle", { className: "circle", cx: "14", cy: "14", r: "6" })))),
                children ? React.createElement("span", { className: prefixClass + '-text' }, children) : null));
});

export { Radio as default };
//# sourceMappingURL=Radio.js.map
