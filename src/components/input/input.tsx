import React, { forwardRef, useRef, useContext, useImperativeHandle } from 'react'
import classnames from 'classnames'
import { FormContext } from '../form/context'
import { InputProps } from './interface'
import { StyledInput } from './styled'

const Input = forwardRef<HTMLInputElement, InputProps>((props: InputProps, ref) => {
    const prefixClass = 'tui-input'
    const {
        style,
        className,
        variant = 'soft',
        shape = 'square',
        color = 'neutral',
        size: sizeProp,
        htmlType,
        disabled: disabledProp,
        onChange,
        startDecorator,
        endDecorator,
        ...rest
    } = props

    const { size: sizeCtx, disabled: disabledCtx } = useContext(FormContext);

    const size = sizeProp || sizeCtx || 'md'
    const disabled = disabledProp || disabledCtx
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

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
        {startDecorator ? <span className={prefixClass + '-start'}>{startDecorator}</span> : null}
        <input
            className={classNames}
            ref={inputRef}
            disabled={disabled}
            type={htmlType}
            onChange={handleChange}
            {...rest} />
        {endDecorator ? <span className={prefixClass + '-end'}>{endDecorator}</span> : null}
    </StyledInput>
})
export default Input