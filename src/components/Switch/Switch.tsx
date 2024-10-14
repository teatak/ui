import React, { useRef, useContext, useState } from 'react'
import classnames from 'classnames'
import { SwitchProps } from './Switch.types'
import { StyledSwitch } from './Switch.styled'
import { ControlContext } from '../Control'
import { mergeProps, useMergeState } from '@/helper/common'

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>((inProps, ref) => {
    const [checked, setChecked] = useMergeState(false, {
        value: inProps.checked,
        defaultValue: inProps.defaultChecked,
    })
    const isActive = checked

    const ctx = useContext(ControlContext)
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-switch',
        variant: 'filled',
        outlined: false,
        color: isActive ? 'primary' : 'neutral',
        shape: 'round',
        size: 'md',
    }) as SwitchProps

    const {
        prefixClass,
        style,
        icon,
        checkedIcon,
        className,
        thinTrack,
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

    return <StyledSwitch
        className={classNamesRoot}
        $options={props}
    >
        <input
            onChange={handleChange}
            className={prefixClass + '-element'}
            type='checkbox'
            disabled={disabled}
            ref={inputRef}
            checked={checked}
            {...rest}
        />
        {typeof children === 'function' ? children(checked) :
            <>
                <div className={prefixClass}>
                    <div className={prefixClass + '-track-container'}>
                        <div className={prefixClass + '-track'}></div>
                    </div>
                    <div className={prefixClass + '-handle-container'}>
                        <div className={prefixClass + '-handle'}>
                            {checked && checkedIcon ? checkedIcon : icon}
                        </div>
                    </div>
                </div>
                {children ? <span className={prefixClass + '-text'}>{children}</span> : null}
            </>
        }
    </StyledSwitch>
})

export default Switch