import React, { forwardRef, useRef, useState, useEffect, useImperativeHandle } from 'react'
import classnames from 'classnames'
import { CSSTransition } from 'react-transition-group';
import { ButtonProps } from './Button.types'
import { StyledButton } from './Button.styled';
import { Loading } from '../../icons'

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
    const timerRef = useRef<NodeJS.Timeout>()
    useEffect(() => {
        return () => clearTimeout(timerRef.current)
    }, [])
    const [clicked, setClicked] = useState(false)

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
            [`clicked`]: clicked,
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
        setClicked(true)
        if (timerRef) {
            timerRef.current = setTimeout(() => {
                setClicked(false)
            }, 100)
        }
    };
    if (loading) {
        if (shape === 'circle') {
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
    if (shape === 'circle') {
        startDecorator = null
        endDecorator = null
    }

    const renderDecorator = (pos: 'start' | 'end') => {
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
            timeout={250}
            classNames={prefixClass + '-in'}
            unmountOnExit
        >
            <span className={prefixClass + '-' + pos + '-decorator'}>
                <Loading />
            </span>
        </CSSTransition>
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
        {renderDecorator('start')}
        <span className={prefixClass + '-span'}>{children}</span>
        {renderDecorator('end')}
    </StyledButton>
})

export default Button