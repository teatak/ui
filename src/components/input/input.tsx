import React, { useRef, useContext } from 'react'
import classnames from 'classnames'
import { InputProps } from './Input.types'
import { StyledInput } from './Input.styled'
import { CSSTransition } from 'react-transition-group';

const Input = React.forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    const prefixClass = 'tui-input'
    const {
        style,
        className,
        variant = 'soft',
        shape = 'square',
        color = 'neutral',
        size = 'md',
        disabled,
        onChange,
        startDecorator,
        endDecorator,
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

    const options = {
        prefixClass,
        variant,
        shape,
        color,
        size,
    }

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-has-start`]: startDecorator,
            [`${prefixClass}-has-end`]: endDecorator,
        }
    )

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
    };

    return <StyledInput
        className={classNamesRoot}
        style={style}
        $options={options}
        onClick={() => {
            inputRef.current?.focus()
        }}
    >
        <CSSTransition
            in={startDecorator ? true : false}
            timeout={250}
            classNames={prefixClass + '-in'}
            unmountOnExit
        >
            <span className={prefixClass + '-start-decorator'}>{startDecorator}</span>
        </CSSTransition>
        <input
            className={classNames}
            ref={inputRef}
            disabled={disabled}
            onChange={handleChange}
            {...rest} />
        <CSSTransition
            in={endDecorator ? true : false}
            timeout={250}
            classNames={prefixClass + '-in'}
            unmountOnExit
        >
            <span className={prefixClass + '-end-decorator'}>{endDecorator}</span>
        </CSSTransition>
    </StyledInput>
})
export default Input