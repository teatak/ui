import React, { forwardRef, useRef, useImperativeHandle } from 'react'
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group';
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.styled';
import Loading from '../loading'

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref) => {
    const prefixClass = 'tui-button'
    const {
        style,
        className,
        variant = 'solid',
        long,
        shape = 'square',
        color = 'neutral',
        size = 'md',
        loading,
        loadingPosition = 'start',
        href,
        type = 'button',
        onClick,
        disabled,
        ...rest
    } = props

    let {
        startIcon,
        endIcon,
        children,
    } = props

    const buttonRef = useRef<HTMLButtonElement>(null)
    useImperativeHandle(ref, () => buttonRef.current!, [])

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${variant}`,
        `${prefixClass}-size-${size}`,
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
    const options = {
        prefixClass,
        variant,
        long,
        shape,
        color,
        size,
        loading,
        loadingPosition,
    }
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

    return <StyledButton
        ref={buttonRef}
        style={style}
        className={classNames}
        type={type}
        as={href ? 'a' : 'button'}
        $options={options}
        onClick={handleClick}
        {...rest}
    >
        <CSSTransition
            in={startIcon ? true : false}
            timeout={250}
            classNames={prefixClass + '-in'}
            unmountOnExit
        >
            <span className={prefixClass + '-start-icon'}>{startIcon}</span>
        </CSSTransition>
        <span className={prefixClass + '-span'}>{children}</span>
        <CSSTransition
            in={endIcon ? true : false}
            timeout={250}
            classNames={prefixClass + '-in'}
            appear
            unmountOnExit
        >
            <span className={prefixClass + '-end-icon'}>{endIcon}</span>
        </CSSTransition>
    </StyledButton>
})

export default Button