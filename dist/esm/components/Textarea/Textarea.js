import React, { useContext, useRef, useLayoutEffect } from 'react';
import classnames from 'classnames';
import { StyledTextareaRoot } from './Textarea.styled.js';
import { CSSTransition } from 'react-transition-group';
import ControlContext from '../Control/ControlContext.js';
import { mergeProps } from '../../helper/common.js';
import '../Control/ControlLabel.js';

function getStyleValue(value) {
    return parseInt(value, 10) || 0;
}
function isEmpty(obj) {
    return (obj === undefined ||
        obj === null ||
        Object.keys(obj).length === 0 ||
        (obj.outerHeightStyle === 0 && !obj.overflowing));
}
const Textarea = React.forwardRef((inProps, ref) => {
    const ctx = useContext(ControlContext);
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-textarea',
        variant: 'tonal',
        outlined: false,
        color: 'neutral',
        shape: 'square',
        size: 'md',
        component: 'textarea',
    });
    const { prefixClass, style, className, variant, outlined, elevation, color, shape, size, disabled, onChange, startDecorator, endDecorator, styleOverrides, minRows = 1, maxRows, component: TextAreaComponent = 'textarea', ...rest } = props;
    const inputRef = useRef(null);
    React.useImperativeHandle(ref, () => inputRef.current, []);
    const shadowRef = React.useRef(null);
    const calculateTextareaStyles = React.useCallback(() => {
        const input = inputRef.current;
        const doc = (input && input.ownerDocument) || document;
        const containerWindow = doc.defaultView || window;
        const computedStyle = containerWindow.getComputedStyle(input);
        if (computedStyle.width === '0px') {
            return {
                outerHeightStyle: 0,
                overflowing: false,
            };
        }
        const inputShallow = shadowRef.current;
        inputShallow.style.width = computedStyle.width;
        inputShallow.value = input.value || props.placeholder || 'x';
        if (inputShallow.value.slice(-1) === '\n') {
            inputShallow.value += ' ';
        }
        const boxSizing = computedStyle.boxSizing;
        const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
        const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
        const innerHeight = inputShallow.scrollHeight;
        inputShallow.value = 'x';
        const singleRowHeight = inputShallow.scrollHeight;
        let outerHeight = innerHeight;
        if (minRows) {
            outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
        }
        if (maxRows) {
            outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
        }
        outerHeight = Math.max(outerHeight, singleRowHeight);
        const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
        const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
        return { outerHeightStyle, overflowing };
    }, [maxRows, minRows, props.placeholder]);
    const syncHeight = React.useCallback(() => {
        const textareaStyles = calculateTextareaStyles();
        if (isEmpty(textareaStyles)) {
            return;
        }
        const input = inputRef.current;
        input.style.height = `${textareaStyles.outerHeightStyle}px`;
        input.style.overflow = textareaStyles.overflowing ? 'hidden' : '';
    }, [calculateTextareaStyles]);
    useLayoutEffect(() => {
        const handleResize = () => {
            syncHeight();
        };
        const input = inputRef.current;
        const doc = (input && input.ownerDocument) || document;
        const containerWindow = doc.defaultView || window;
        containerWindow.addEventListener('resize', handleResize);
        return () => {
            containerWindow.removeEventListener('resize', handleResize);
        };
    }, [calculateTextareaStyles, syncHeight]);
    useLayoutEffect(() => {
        syncHeight();
    });
    const classNamesRoot = classnames(`${prefixClass}-root`, `${prefixClass}-${variant}`, `${prefixClass}-size-${size}`, `${prefixClass}-color-${color}`, `${prefixClass}-shape-${shape}`, {
        [`${prefixClass}-disabled`]: disabled,
    }, className);
    const classNames = classnames(`${prefixClass}`);
    const classNameElement = classnames(`${prefixClass}-element`);
    const handleChange = (e) => {
        syncHeight();
        onChange && onChange(e);
    };
    const nodeRef = React.useRef(null);
    return React.createElement(StyledTextareaRoot, { className: classNamesRoot, "$options": props, onClick: () => {
            inputRef.current?.focus();
        } },
        React.createElement(CSSTransition, { in: startDecorator ? true : false, timeout: 150, classNames: prefixClass + '-in', unmountOnExit: true, nodeRef: nodeRef },
            React.createElement("div", { ref: nodeRef, onClick: (event) => {
                    event.stopPropagation();
                    //event.preventDefault()
                }, className: prefixClass + '-start-decorator' }, startDecorator)),
        React.createElement("div", { className: classNames },
            React.createElement(TextAreaComponent, { className: classNameElement, style: style, ref: inputRef, disabled: disabled, onChange: handleChange, ...rest }),
            React.createElement(TextAreaComponent, { className: classNameElement, "aria-hidden": true, ref: shadowRef, readOnly: true, tabIndex: -1, style: {
                    ...style,
                    visibility: 'hidden',
                    position: 'absolute',
                    overflow: 'hidden',
                    height: 0,
                    top: 0,
                    left: 0,
                    transform: 'translateZ(0)',
                    paddingTop: 0,
                    paddingBottom: 0,
                } })),
        React.createElement(CSSTransition, { in: endDecorator ? true : false, timeout: 150, classNames: prefixClass + '-in', unmountOnExit: true, nodeRef: nodeRef },
            React.createElement("div", { ref: nodeRef, onClick: (event) => {
                    event.stopPropagation();
                    // event.preventDefault()
                }, className: prefixClass + '-end-decorator' }, endDecorator)));
});

export { Textarea as default };
//# sourceMappingURL=Textarea.js.map
