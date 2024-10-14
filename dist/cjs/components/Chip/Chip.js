'use strict';

var React = require('react');
var classnames = require('classnames');
var reactTransitionGroup = require('react-transition-group');
var Chip_styled = require('./Chip.styled.js');
require('../../icons/Svg.js');
var Loading = require('../../icons/custom/Loading/Loading.js');
var ControlContext = require('../Control/ControlContext.js');
var common = require('../../helper/common.js');
require('../Control/ControlLabel.js');

const Chip = React.forwardRef((inProps, ref) => {
    const ctx = React.useContext(ControlContext);
    const props = common.mergeProps(ctx, inProps, {
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
    const buttonRef = React.useRef(null);
    React.useImperativeHandle(ref, () => buttonRef.current, []);
    const timerRef = React.useRef();
    React.useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);
    const [clicked, setClicked] = React.useState(false);
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
        return React.createElement(reactTransitionGroup.CSSTransition, { in: loading && loadingPosition === pos ? true : false, timeout: 150, classNames: prefixClass + '-in', unmountOnExit: true, nodeRef: nodeRef },
            React.createElement("span", { ref: nodeRef, className: prefixClass + '-' + pos + '-decorator' },
                React.createElement(Loading, null)));
    };
    const ChipComponent = !onClick && !href ? undefined : href ? 'a' : 'button';
    return React.createElement(Chip_styled.StyledChip, { style: style, className: classNames, "$options": props },
        ChipComponent && React.createElement(ChipComponent, { className: prefixClass + '-element', ref: buttonRef, type: href ? undefined : type, href: href, onClick: handleClick, disabled: disabled, tabIndex: loading || disabled ? -1 : undefined, ...rest }),
        renderDecorator('start'),
        React.createElement("span", { className: prefixClass + '-span' }, children),
        renderDecorator('end'));
});

module.exports = Chip;
//# sourceMappingURL=Chip.js.map
