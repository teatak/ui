import React, { useRef, useContext } from 'react'
import classnames from 'classnames'
import { InputProps } from './Input.types'
import { StyledInputRoot } from './Input.styled'
import { CSSTransition } from 'react-transition-group'
import { ControlContext } from '../Control'
import { mergeProps } from '@/helper/common'

const Input = React.forwardRef<HTMLInputElement, InputProps>((inProps, ref) => {
    const ctx = useContext(ControlContext)
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-input',
        variant: 'tonal',
        outlined: false,
        color: 'neutral',
        shape: 'square',
        size: 'md',
        component: 'input',
    }) as InputProps

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
        onChange,
        startDecorator,
        endDecorator,
        styleOverrides,
        component: InputComponent = 'input',
        prefix,
        suffix,
        ...rest
    } = props

    const inputRef = useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!, [])

    const classNamesRoot = classnames(
        `${prefixClass}-root`,
        `${prefixClass}-${variant}`,
        `${prefixClass}-size-${size}`,
        `${prefixClass}-color-${color}`,
        `${prefixClass}-shape-${shape}`,
        {
            [`${prefixClass}-disabled`]: disabled,
        },
        className,
    )

    const classNames = classnames(
        `${prefixClass}`
    )

    const classNameElement = classnames(
        `${prefixClass}-element`
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
    }

    const nodeRef = React.useRef(null)
    return <StyledInputRoot
        className={classNamesRoot}
        $options={props}
        onClick={() => {
            inputRef.current?.focus()
        }}
    >
        <CSSTransition
            in={startDecorator ? true : false}
            timeout={150}
            classNames={prefixClass + '-in'}
            unmountOnExit
            nodeRef={nodeRef}
        >
            <span ref={nodeRef} onClick={(event) => {
                event.stopPropagation()
                //event.preventDefault()
            }} className={prefixClass + '-start-decorator'}>{startDecorator}</span>
        </CSSTransition>
        <div className={classNames}>
            {prefix ? <span className={prefixClass + '-prefix'}>{prefix}</span> : null}
            <InputComponent className={classNameElement}
                style={style}
                ref={inputRef}
                disabled={disabled}
                onChange={handleChange}
                {...rest} />
            {suffix ? <span className={prefixClass + '-suffix'}>{suffix}</span> : null}
        </div>
        <CSSTransition
            in={endDecorator ? true : false}
            timeout={150}
            classNames={prefixClass + '-in'}
            unmountOnExit
            nodeRef={nodeRef}
        >
            <span ref={nodeRef} onClick={(event) => {
                event.stopPropagation()
                // event.preventDefault()
            }} className={prefixClass + '-end-decorator'}>{endDecorator}</span>
        </CSSTransition>
    </StyledInputRoot>
})

export default Input