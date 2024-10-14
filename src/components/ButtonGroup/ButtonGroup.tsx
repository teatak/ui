import React, { useContext } from 'react'
import classnames from 'classnames'
import { ButtonGroupProps } from './ButtonGroup.types'
import { ControlContext } from '../Control'
import { StyledButtonGroup } from './ButtonGroup.style'
import { mergeProps } from '@/helper/common'

export default (inProps: ButtonGroupProps) => {
    const ctx = useContext(ControlContext)
    const props = mergeProps(ctx, inProps, {
        prefixClass: 'tui-buttongroup',
        direction: 'row',
        variant: 'tonal',
        outlined: false,
        color: 'neutral',
        shape: 'square',
        size: 'md',
    }) as ButtonGroupProps

    const {
        prefixClass,
        direction,
        style,
        className,
        variant,
        outlined,
        elevation,
        color,
        shape,
        size,
        disabled,
        children,
        ...rest
    } = props

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${variant}`,
        `${prefixClass}-size-${size}`,
        `${prefixClass}-color-${color}`,
        `${prefixClass}-shape-${shape}`,
        `${prefixClass}-direction-${direction}`,
        {
            [`${prefixClass}-outlined`]: outlined,
            [`${prefixClass}-disabled`]: disabled,
        },
        className,
    )

    const ctxOptions = {
        variant,
        color,
        outlined,
        elevation,
        shape,
        size,
        disabled,
    }

    return <ControlContext.Provider value={ctxOptions}>
        <StyledButtonGroup
            $options={props}
            className={classNames}
            {...rest}>
            {children}
        </StyledButtonGroup>
    </ControlContext.Provider>
}

