'use strict';

var React = require('react');
var Chip_styled = require('./Chip.styled.js');
var classnames = require('classnames');

const ChipDelete = React.forwardRef((props, ref) => {
    const { style, prefixClass = "tui-chip-delete", className, children, onClick, disabled, ...rest } = props;
    const buttonRef = React.useRef(null);
    React.useImperativeHandle(ref, () => buttonRef.current, []);
    const timerRef = React.useRef();
    React.useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);
    const [clicked, setClicked] = React.useState(false);
    const classNames = classnames(`${prefixClass}-root`, {
        [`${prefixClass}-disabled`]: disabled,
        [`clicked`]: clicked,
    }, className);
    const handleClick = (event) => {
        if (disabled) {
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
    const options = {
        ...props,
        prefixClass
    };
    return React.createElement(Chip_styled.StyledChipDelete, { style: style, className: classNames, "$options": options },
        React.createElement("button", { type: 'button', className: prefixClass + '-element', ref: buttonRef, disabled: disabled, onClick: handleClick }),
        React.createElement("span", { className: prefixClass + '-span' }, children));
});

module.exports = ChipDelete;
//# sourceMappingURL=ChipDelete.js.map
