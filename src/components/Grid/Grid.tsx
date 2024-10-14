import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { StyledGrid } from './Grid.styled'
import { GridProps } from './Grid.types'
import GridItem from './Grid.Item'
import GridContext from './Grid.context'
import { mergeProps } from '@/helper/common';

const Grid = (inProps: GridProps) => {

    const props = mergeProps({}, inProps, {
        prefixClass: 'tui-grid',
        direction: 'row',
    }) as GridProps

    const {
        prefixClass,
        direction,
        columns,
        spacing,
        justifyContent,
        alignItems,
        className,
        styleOverrides,
        autoWrap = true,
        ...rest
    } = props

    const classNames = classnames(
        prefixClass,
        className,
    );

    return <GridContext.Provider value={{ columns: columns || 12 }}>
        <StyledGrid
            $options={props}
            className={classNames}
            {...rest}>
            {React.Children.map(props.children, (child: ReactElement) => {
                if (child) {
                    if (child.type === GridItem) {
                        return child
                    } else {
                        if (autoWrap) {
                            return <GridItem>{child}</GridItem>
                        } else {
                            return child
                        }
                    }
                }
                return null
            })}
        </StyledGrid>
    </GridContext.Provider>
}

export default Grid