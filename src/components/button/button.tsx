import React, { forwardRef, useRef } from 'react';
import classnames from 'classnames'
import { ButtonProps } from './interface'
import Styled from './styled'
import { withGlobalVariable } from '../../style'
import { Loading } from '../loading'

export const Button = withGlobalVariable(forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    const prefixClass = "tui-button"
    const {
        style,
        className,
        type = "standard",
        long,
        shape = 'square',
        color = 'primary',
        size,
        htmlType,
        loading,
        loadingPosition,
        disabled,
        href,
        onClick,
        ...rest
    } = props

    let {
        startIcon,
        endIcon,
        children,
    } = props

    const buttonRef = ref || useRef<HTMLButtonElement>(null)

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${type}`,
        `${prefixClass}-size-${size || "medium"}`,
        `${prefixClass}-color-${color}`,
        `${prefixClass}-shape-${shape}`,
        {
            [`${prefixClass}-disabled`]: disabled,
            [`${prefixClass}-long`]: long,
            [`${prefixClass}-link`]: href,
        },
        className,
    )
    const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
        if (loading || disabled) {
            typeof event?.preventDefault === 'function' && event.preventDefault();
            return;
        }
        onClick && onClick(event);
    };

    if (loading) {
        if (shape === 'circle') {
            children = <Loading />
        } else {
            const position = loadingPosition || 'start'
            switch (position) {
                case 'start':
                    startIcon = <Loading />
                    break
                case 'end':
                    endIcon = <Loading />
                    break
            }
        }
    }
    if (shape === 'circle') {
        startIcon = null
        endIcon = null
    }

    return <Styled
        ref={buttonRef}
        $prefixClass={prefixClass}
        style={style}
        className={classNames}
        type={htmlType}
        disabled={disabled}
        as={href ? 'a' : 'button'}
        href={href}
        onClick={handleClick}
        {...rest}
    >
        {startIcon ? <span className={prefixClass + '-start-icon'}>{startIcon}</span> : null}
        <span className={prefixClass + '-span'}>{children}</span>
        {endIcon ? <span className={prefixClass + '-end-icon'}>{endIcon}</span> : null}
    </Styled>
}))