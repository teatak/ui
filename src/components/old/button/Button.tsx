import React, { forwardRef, useRef, useContext } from 'react';
import classnames from 'classnames'
import { FormContext } from '../form/context'
import { ButtonProps } from './interface'
import Styled from './styled'
import { Loading } from '../loading'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    const prefixClass = 'tui-button'
    const {
        style,
        className,
        type = 'solid',
        long,
        shape = 'square',
        color = 'neutral',
        size,
        htmlType,
        loading,
        loadingPosition = 'start',
        href,
        onClick,
        ...rest
    } = props

    let {
        startIcon,
        endIcon,
        children,
        disabled,
    } = props

    const { size: ctxSize, disabled: ctxDisabled } = useContext(FormContext);
    const buttonRef = ref || useRef<HTMLButtonElement>(null)
    disabled = disabled || ctxDisabled

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${type}`,
        `${prefixClass}-size-${size || ctxSize || 'medium'}`,
        `${prefixClass}-color-${color}`,
        `${prefixClass}-shape-${shape}`,
        {
            [`${prefixClass}-disabled`]: disabled,
            [`${prefixClass}-loading`]: loading,
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
            const position = loadingPosition
            switch (position) {
                case 'start':
                    startIcon = <Loading />
                    break
                case 'center':
                    children = <>
                        <span className={prefixClass + '-span-text'}>{children}</span>
                        <span className={prefixClass + '-span-loading'}><Loading /></span>
                    </>
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
})