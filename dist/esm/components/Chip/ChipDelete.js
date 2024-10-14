import React, { forwardRef, useRef, useImperativeHandle, useEffect, useState } from 'react';
import { StyledChipDelete } from './Chip.styled.js';
import classnames from 'classnames';

const ChipDelete = forwardRef((props, ref) => {
    const { style, prefixClass = "tui-chip-delete", className, children, onClick, disabled, ...rest } = props;
    const buttonRef = useRef(null);
    useImperativeHandle(ref, () => buttonRef.current, []);
    const timerRef = useRef();
    useEffect(() => {
        return () => clearTimeout(timerRef.current);
    }, []);
    const [clicked, setClicked] = useState(false);
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
    return React.createElement(StyledChipDelete, { style: style, className: classNames, "$options": options },
        React.createElement("button", { type: 'button', className: prefixClass + '-element', ref: buttonRef, disabled: disabled, onClick: handleClick }),
        React.createElement("span", { className: prefixClass + '-span' }, children));
});

export { ChipDelete as default };
//# sourceMappingURL=ChipDelete.js.map
