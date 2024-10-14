'use strict';

var React = require('react');
var classnames = require('classnames');
var Input_styled = require('./Input.styled.js');
var reactTransitionGroup = require('react-transition-group');
var ControlContext = require('../Control/ControlContext.js');
var common = require('../../helper/common.js');
require('../Control/ControlLabel.js');

const Input = React.forwardRef((inProps, ref) => {
    const ctx = React.useContext(ControlContext);
    const props = common.mergeProps(ctx, inProps, {
        prefixClass: 'tui-input',
        variant: 'tonal',
        outlined: false,
        color: 'neutral',
        shape: 'square',
        size: 'md',
        component: 'input',
    });
    const { prefixClass, style, className, variant, outlined, elevation, color, shape, size, disabled, onChange, startDecorator, endDecorator, styleOverrides, component: InputComponent = 'input', prefix, suffix, ...rest } = props;
    const inputRef = React.useRef(null);
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
    return React.createElement(Input_styled.StyledInputRoot, { className: classNamesRoot, "$options": props, onClick: () => {
            inputRef.current?.focus();
        } },
        React.createElement(reactTransitionGroup.CSSTransition, { in: startDecorator ? true : false, timeout: 150, classNames: prefixClass + '-in', unmountOnExit: true, nodeRef: nodeRef },
            React.createElement("span", { ref: nodeRef, onClick: (event) => {
                    event.stopPropagation();
                    //event.preventDefault()
                }, className: prefixClass + '-start-decorator' }, startDecorator)),
        React.createElement("div", { className: classNames },
            prefix ? React.createElement("span", { className: prefixClass + '-prefix' }, prefix) : null,
            React.createElement(InputComponent, { className: classNameElement, style: style, ref: inputRef, disabled: disabled, onChange: handleChange, ...rest }),
            suffix ? React.createElement("span", { className: prefixClass + '-suffix' }, suffix) : null),
        React.createElement(reactTransitionGroup.CSSTransition, { in: endDecorator ? true : false, timeout: 150, classNames: prefixClass + '-in', unmountOnExit: true, nodeRef: nodeRef },
            React.createElement("span", { ref: nodeRef, onClick: (event) => {
                    event.stopPropagation();
                    // event.preventDefault()
                }, className: prefixClass + '-end-decorator' }, endDecorator)));
});

module.exports = Input;
//# sourceMappingURL=Input.js.map
