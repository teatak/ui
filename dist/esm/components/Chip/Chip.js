import React, { forwardRef, useContext, useRef, useImperativeHandle, useEffect, useState } from 'react';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { StyledChip } from './Chip.styled.js';
import '../../icons/Svg.js';
import Loading from '../../icons/custom/Loading/Loading.js';
import ControlContext from '../Control/ControlContext.js';
import { mergeProps } from '../../helper/common.js';
import '../Control/ControlLabel.js';

const Chip = forwardRef((inProps, ref) => {
    const ctx = useContext(ControlContext);
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-chip',
        variant: 'tonal',
        outlined: false,
        color: 'neutral',
        shape: 'round',
        size: 'md',
        loadingPosition: 'start',
        type: 'button',
    });
    const { prefixClass, style, className, variant, outlined, elevation, color, shape, size, disabled, icon, loading, loadingPosition, href, type, onClick, styleOverrides, ...otherProps } = props;
    let { startDecorator, endDecorator, children, ...rest } = otherProps;
    const buttonRef = useRef(null);
    useImperativeHandle(ref, () => buttonRef.current, []);
    const timerRef = useRef();
    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);
    const [clicked, setClicked] = useState(false);
    //处理fill
    const classNames = classnames(prefixClass, `${prefixClass}-${variant}`, `${prefixClass}-size-${size}`, `${prefixClass}-color-${color}`, `${prefixClass}-shape-${shape}`, {
        [`${prefixClass}-outlined`]: outlined,
        [`${prefixClass}-elevation_${elevation?.join('_')}`]: elevation,
        [`${prefixClass}-disabled`]: disabled,
        [`${prefixClass}-loading`]: loading,
        [`${prefixClass}-link`]: href,
        [`${prefixClass}-icon`]: icon,
        [`clicked`]: clicked,
    }, className);
    const handleClick = (event) => {
        if (loading || disabled) {
            event.stopPropagation();
            event.preventDefault();
            return;
        }
        onClick && onClick(event);
        if (onClick) {
            setClicked(true);
            if (timerRef) {
                timerRef.current = setTimeout(() => {
                    setClicked(false);
                }, 100);
            }
        }
    };
    if (loading) {
        const position = loadingPosition;
        switch (position) {
            case 'center':
                children = React.createElement(React.Fragment, null,
                    React.createElement("span", { className: prefixClass + '-span-text' }, children),
                    React.createElement("span", { className: prefixClass + '-span-loading' },
                        React.createElement(Loading, null)));
                break;
        }
    }
    const nodeRef = React.useRef(null);
    const renderDecorator = (pos) => {
        if (pos === 'start' && startDecorator) {
            return React.createElement("span", { className: prefixClass + '-start-decorator' }, loading && loadingPosition === 'start' ? React.createElement(Loading, null) : startDecorator);
        }
        if (pos === 'end' && endDecorator) {
            return React.createElement("span", { className: prefixClass + '-end-decorator' }, loading && loadingPosition === 'end' ? React.createElement(Loading, null) : endDecorator);
        }
        return React.createElement(CSSTransition, { in: loading && loadingPosition === pos ? true : false, timeout: 150, classNames: prefixClass + '-in', unmountOnExit: true, nodeRef: nodeRef },
            React.createElement("span", { ref: nodeRef, className: prefixClass + '-' + pos + '-decorator' },
                React.createElement(Loading, null)));
    };
    const ChipComponent = !onClick && !href ? undefined : href ? 'a' : 'button';
    return React.createElement(StyledChip, { style: style, className: classNames, "$options": props },
        ChipComponent && React.createElement(ChipComponent, { className: prefixClass + '-element', ref: buttonRef, type: href ? undefined : type, href: href, onClick: handleClick, disabled: disabled, tabIndex: loading || disabled ? -1 : undefined, ...rest }),
        renderDecorator('start'),
        React.createElement("span", { className: prefixClass + '-span' }, children),
        renderDecorator('end'));
});

export { Chip as default };
//# sourceMappingURL=Chip.js.map
