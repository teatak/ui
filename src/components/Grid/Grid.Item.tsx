import React from 'react'
import classnames from 'classnames'
import { GridItemProps } from './Grid.types'
import { StyledGridItem } from './Grid.styled'

const GridItem = (props: GridItemProps) => {
    const {
        prefixClass = 'tui-grid-item',
        span,
        offset,
        className,
        styleOverrides,
        ...rest
    } = props

    const classNames = classnames(
        prefixClass,
        className,
    );

    const options = {
        ...props,
        span,
        offset,
        prefixClass,
        styleOverrides,
    }

    return <StyledGridItem
        className={classNames}
        $options={options}
        {...rest}
    >{props.children}</StyledGridItem>
}

export default GridItem