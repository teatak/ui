import React, { useRef, useContext, useState } from 'react'
import classnames from 'classnames'
import { RadioProps } from './Radio.types'
import { StyledRadio } from './Radio.styled'
import { ControlContext } from '../Control'
import { useMergeState, mergeProps } from '@/helper/common'

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((inProps, ref) => {
    const [checked, setChecked] = useMergeState(false, {
        value: inProps.checked,
        defaultValue: inProps.defaultChecked,
    })
    const isActive = checked

    const ctx = useContext(ControlContext)
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-radio',
        variant: isActive ? 'filled' : 'tonal',
        outlined: false,
        color: isActive ? 'primary' : 'neutral',
        shape: 'round',
        size: 'md',
    }) as RadioProps

    const {
        prefixClass,
        style,
        icon,
        className,
        variant,
        outlined,
        color,
        shape,
        size,
        disabled,
        onChange,
        defaultChecked,
        styleOverrides,
        children,
        ...rest
    } = props

    const options = {
        ...props,
    }

    const inputRef = useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => inputRef.current!, [])

    const classNamesRoot = classnames(
        `${prefixClass}-root`,
        `${prefixClass}-${variant}`,
        `${prefixClass}-size-${size}`,
        `${prefixClass}-color-${color}`,
        `${prefixClass}-shape-${shape}`,
        {
            [`${prefixClass}-outlined`]: outlined,
            [`${prefixClass}-checked`]: checked,
            [`${prefixClass}-disabled`]: disabled,
        },
        className,
    )

    const handleChange = (e: any) => {
        setChecked(e.target.checked)
        onChange && onChange(e)
    }

    return <StyledRadio
        className={classNamesRoot}
        $options={options}
    >
        <div className={prefixClass + '-action'}>
            <input
                onChange={handleChange}
                className={prefixClass + '-element'}
                type='radio'
                disabled={disabled}
                ref={inputRef}
                checked={checked}
                {...rest}
            />
        </div>
        {typeof children === 'function' ? children(checked) :
            <>
                <div className={prefixClass}>
                    <div className={prefixClass + '-inner'}>
                        {icon ? icon : <svg viewBox="0 0 28 28" aria-hidden="true">
                            <circle className="circle" cx="14" cy="14" r="6"></circle>
                        </svg>}
                    </div>
                </div>
                {children ? <span className={prefixClass + '-text'}>{children}</span> : null}
            </>
        }
    </StyledRadio>
})

export default Radio