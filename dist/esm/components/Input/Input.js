import React, { useContext, useRef } from 'react';
import classnames from 'classnames';
import { StyledInputRoot } from './Input.styled.js';
import { CSSTransition } from 'react-transition-group';
import ControlContext from '../Control/ControlContext.js';
import { mergeProps } from '../../helper/common.js';
import '../Control/ControlLabel.js';

const Input = React.forwardRef((inProps, ref) => {
    const ctx = useContext(ControlContext);
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-input',
        variant: 'tonal',
        outlined: false,
        color: 'neutral',
        shape: 'square',
        size: 'md',
        component: 'input',
    });
    const { prefixClass, style, className, variant, outlined, elevation, color, shape, size, disabled, onChange, startDecorator, endDecorator, styleOverrides, component: InputComponent = 'input', prefix, suffix, ...rest } = props;
    const inputRef = useRef(null);
    React.useImperativeHandle(ref, () => inputRef.current, []);
    const classNamesRoot = classnames(`${prefixClass}-root`, `${prefixClass}-${variant}`, `${prefixClass}-size-${size}`, `${prefixClass}-color-${color}`, `${prefixClass}-shape-${shape}`, {
        [`${prefixClass}-disabled`]: disabled,
    }, className);
    const classNames = classnames(`${prefixClass}`);
    const classNameElement = classnames(`${prefixClass}-element`);
    const handleChange = (e) => {
        onChange && onChange(e);
    };
    const nodeRef = React.useRef(null);
    return React.createElement(StyledInputRoot, { className: classNamesRoot, "$options": props, onClick: () => {
            inputRef.current?.focus();
        } },
        React.createElement(CSSTransition, { in: startDecorator ? true : false, timeout: 150, classNames: prefixClass + '-in', unmountOnExit: true, nodeRef: nodeRef },
            React.createElement("span", { ref: nodeRef, onClick: (event) => {
                    event.stopPropagation();
                    //event.preventDefault()
                }, className: prefixClass + '-start-decorator' }, startDecorator)),
        React.createElement("div", { className: classNames },
            prefix ? React.createElement("span", { className: prefixClass + '-prefix' }, prefix) : null,
            React.createElement(InputComponent, { className: classNameElement, style: style, ref: inputRef, disabled: disabled, onChange: handleChange, ...rest }),
            suffix ? React.createElement("span", { className: prefixClass + '-suffix' }, suffix) : null),
        React.createElement(CSSTransition, { in: endDecorator ? true : false, timeout: 150, classNames: prefixClass + '-in', unmountOnExit: true, nodeRef: nodeRef },
            React.createElement("span", { ref: nodeRef, onClick: (event) => {
                    event.stopPropagation();
                    // event.preventDefault()
                }, className: prefixClass + '-end-decorator' }, endDecorator)));
});

export { Input as default };
//# sourceMappingURL=Input.js.map
