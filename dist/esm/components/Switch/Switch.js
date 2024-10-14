import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { StyledSwitch } from './Switch.styled.js';
import ControlContext from '../Control/ControlContext.js';
import { useMergeState, mergeProps } from '../../helper/common.js';
import '../Control/ControlLabel.js';

const Switch = React.forwardRef((inProps, ref) => {
    const [checked, setChecked] = useMergeState(false, {
        value: inProps.checked,
        defaultValue: inProps.defaultChecked,
    });
    const isActive = checked;
    const ctx = useContext(ControlContext);
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-switch',
        variant: 'filled',
        outlined: false,
        color: isActive ? 'primary' : 'neutral',
        shape: 'round',
        size: 'md',
    });
    const { prefixClass, style, icon, checkedIcon, className, thinTrack, variant, outlined, color, shape, size, disabled, onChange, defaultChecked, styleOverrides, children, ...rest } = props;
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
    return React.createElement(StyledSwitch, { className: classNamesRoot, "$options": props },
        React.createElement("input", { onChange: handleChange, className: prefixClass + '-element', type: 'checkbox', disabled: disabled, ref: inputRef, checked: checked, ...rest }),
        typeof children === 'function' ? children(checked) :
            React.createElement(React.Fragment, null,
                React.createElement("div", { className: prefixClass },
                    React.createElement("div", { className: prefixClass + '-track-container' },
                        React.createElement("div", { className: prefixClass + '-track' })),
                    React.createElement("div", { className: prefixClass + '-handle-container' },
                        React.createElement("div", { className: prefixClass + '-handle' }, checked && checkedIcon ? checkedIcon : icon))),
                children ? React.createElement("span", { className: prefixClass + '-text' }, children) : null));
});

export { Switch as default };
//# sourceMappingURL=Switch.js.map
