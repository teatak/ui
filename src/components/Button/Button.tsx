import React, { forwardRef, useRef, useState, useEffect, useImperativeHandle, useContext } from 'react'
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group';
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.styled';
import { Loading } from '../../icons'
import { ControlContext } from '../Control';
import { mergeProps } from '@/helper/common';

const Button = forwardRef<HTMLButtonElement, ButtonProps>((inProps, ref) => {
    const ctx = useContext(ControlContext)
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-button',
        variant: 'filled',
        outlined: false,
        color: 'primary',
        shape: 'square',
        size: 'md',
        loadingPosition: 'start',
        type: 'button',
    }) as ButtonProps

    const {
        prefixClass,
        style,
        className,
        variant,
        outlined,
        elevation,
        color,
        shape,
        size,
        disabled,
        icon,
        loading,
        loadingPosition,
        href,
        type,
        onClick,
        styleOverrides,
        ...otherProps
    } = props

    let {
        startDecorator,
        endDecorator,
        children,
        ...rest
    } = otherProps

    const buttonRef = useRef<HTMLButtonElement>(null)
    useImperativeHandle(ref, () => buttonRef.current!, [])
    const timerRef = useRef<NodeJS.Timeout>(null)
    useEffect(() => {
        return () => clearTimeout(timerRef.current as ReturnType<typeof setTimeout>)
    }, [])
    const [clicked, setClicked] = useState(false)

    //处理fill
    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${variant}`,
        `${prefixClass}-size-${size}`,
        `${prefixClass}-color-${color}`,
        `${prefixClass}-shape-${shape}`,
        {
            [`${prefixClass}-outlined`]: outlined,
            [`${prefixClass}-elevation_${elevation?.join('_')}`]: elevation,
            [`${prefixClass}-disabled`]: disabled,
            [`${prefixClass}-loading`]: loading,
            [`${prefixClass}-icon`]: icon,
            [`${prefixClass}-link`]: href,
            [`clicked`]: clicked,
        },
        className,
    )
    const handleClick: React.MouseEventHandler<HTMLElement> = (event: any): void => {
        if (loading || disabled) {
            event.stopPropagation()
            event.preventDefault()
            return
        }
        onClick && onClick(event)
        setClicked(true)
        if (timerRef) {
            timerRef.current = setTimeout(() => {
                setClicked(false)
            }, 100)
        }
    }
    if (loading) {
        if (icon) {
            children = <Loading />
        } else {
            const position = loadingPosition
            switch (position) {
                case 'center':
                    children = <>
                        <span className={prefixClass + '-span-text'}>{children}</span>
                        <span className={prefixClass + '-span-loading'}><Loading /></span>
                    </>
                    break
            }
        }
    }
    if (icon) {
        startDecorator = null
        endDecorator = null
    }
    const nodeRef = React.useRef(null)
    const renderDecorator = (pos: 'start' | 'end') => {
        if (icon) {
            return
        }
        if (pos === 'start' && startDecorator) {
            return <span className={prefixClass + '-start-decorator'}>
                {loading && loadingPosition === 'start' ? <Loading /> : startDecorator}
            </span>
        }
        if (pos === 'end' && endDecorator) {
            return <span className={prefixClass + '-end-decorator'}>
                {loading && loadingPosition === 'end' ? <Loading /> : endDecorator}
            </span>
        }
        return <CSSTransition
            in={loading && loadingPosition === pos ? true : false}
            timeout={150}
            classNames={prefixClass + '-in'}
            unmountOnExit
            nodeRef={nodeRef}
        >
            <span ref={nodeRef} className={prefixClass + '-' + pos + '-decorator'}>
                <Loading />
            </span>
        </CSSTransition>
    }

    return <StyledButton
        ref={buttonRef}
        style={style}
        className={classNames}
        type={href ? undefined : type}
        as={href ? 'a' : 'button'}
        href={href}
        $options={props}
        onClick={handleClick}
        disabled={disabled}
        tabIndex={loading || disabled ? -1 : undefined}
        {...rest}
    >
        {renderDecorator('start')}
        <span className={prefixClass + '-span'}>{children}</span>
        {renderDecorator('end')}
    </StyledButton>
})

export default Button
