import React, { useRef, useContext, useState } from 'react'
import classnames from 'classnames'
import { CheckboxProps } from './Checkbox.types'
import { StyledCheckbox } from './Checkbox.styled'
import { ControlContext } from '../Control'
import { useMergeState, mergeProps } from '@/helper/common'

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>((inProps, ref) => {
    const [checked, setChecked] = useMergeState(false, {
        value: inProps.checked,
        defaultValue: inProps.defaultChecked,
    })
    const isActive = checked || inProps.indeterminate

    const ctx = useContext(ControlContext)
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-checkbox',
        variant: isActive ? 'filled' : 'tonal',
        outlined: false,
        color: isActive ? 'primary' : 'neutral',
        shape: 'square',
        size: 'md',
    }) as CheckboxProps

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
        indeterminate = false,
        styleOverrides,
        children,
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
            [`${prefixClass}-outlined`]: outlined,
            [`${prefixClass}-checked`]: checked,
            [`${prefixClass}-indeterminate`]: indeterminate,
            [`${prefixClass}-disabled`]: disabled,
        },
        className,
    )

    const handleChange = (e: any) => {
        if (!indeterminate) {
            setChecked(e.target.checked)
            onChange && onChange(e)
        }
    }

    return <StyledCheckbox
        className={classNamesRoot}
        $options={props}
    >
        <div className={prefixClass + '-action'}>
            <input
                onClick={(e) => {
                    //disable click when indeterminate
                    if (indeterminate) {
                        e.stopPropagation()
                        e.preventDefault()
                    }
                }}
                onChange={handleChange}
                className={prefixClass + '-element'}
                type='checkbox'
                disabled={disabled}
                ref={inputRef}
                checked={checked}
                {...rest}
            />
        </div>
        {typeof children === 'function' ? children(checked, indeterminate) :
            <>
                <div className={prefixClass}>
                    <div className={prefixClass + '-inner'}>
                        {icon ? icon : <svg viewBox="0 0 28 28" aria-hidden="true">
                            <rect className="mark short"></rect>
                            <rect className="mark long"></rect>
                        </svg>}
                    </div>
                </div>
                {children ? <span className={prefixClass + '-text'}>{children}</span> : null}
            </>
        }
    </StyledCheckbox>
})

export default Checkbox