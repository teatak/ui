import React, { Component, ReactElement } from 'react'
import classnames from 'classnames'
import { StyledBox } from './Box.styled'
import { BoxProps } from './Box.types'
import { mergeProps } from '@/helper/common';

const Box = (inProps: BoxProps) => {

    const props = mergeProps({}, inProps, {
        prefixClass: 'tui-box',
        component: 'div',
    }) as BoxProps

    const {
        prefixClass,
        className,
        styleOverrides,
        component: RootComponent,
        ...rest
    } = props

    const classNames = classnames(
        prefixClass,
        className,
    );

    return <StyledBox
        $options={props}
        className={classNames}
        as={RootComponent}
        {...rest} />
}

export default Box