import React, { forwardRef, useRef } from 'react';
import classnames from 'classnames'
import { ButtonProps } from './interface'
import Styled from './styled'
import { withGlobalVariable } from '../../style'

export const Button = withGlobalVariable(forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    const prefixClass = "tui-button"
    const {
        style,
        className,
        type = "standard",
        long,
        rounded,
        circle,
        color = 'primary',
        size,
        htmlType,
        onClick,
        children,
        disabled,
        ...rest
    } = props

    const buttonRef = ref || useRef<HTMLButtonElement>(null)

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${type}`,
        `${prefixClass}-size-${size || "medium"}`,
        `${prefixClass}-color-${color}`,
        {
            [`${prefixClass}-long`]: long,
            [`${prefixClass}-rounded`]: rounded,
            [`${prefixClass}-circle`]: circle,
        },
        className,
    )
    const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
        if (disabled) {
            typeof event?.preventDefault === 'function' && event.preventDefault();
            return;
        }
        onClick && onClick(event);
    };

    return <Styled
        ref={buttonRef}
        $prefixClass={prefixClass}
        style={style}
        className={classNames}
        type={htmlType}
        onClick={handleClick}
        {...rest}
    >
        {children}
    </Styled>
}))