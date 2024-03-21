import React from 'react'
import classnames from 'classnames'
import { GridItemProps } from './interface'
import { StyledGridItem } from './styled'

const GridItem = (props: GridItemProps) => {
    const {
        span,
        spanStyle,
        offset,
        className,
        styleOverrides,
        ...rest
    } = props

    const prefixClass = 'tui-grid-item'
    const classNames = classnames(
        prefixClass,
        className,
    );

    const options = {
        span,
        spanStyle,
        offset,
        prefixClass,
        styleOverrides,
    }

    return <StyledGridItem className={classNames} $options={options} {...rest}>{props.children}</StyledGridItem>
}

export default GridItem