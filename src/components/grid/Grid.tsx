import React, { ReactElement, ReactNode } from 'react'
import classnames from 'classnames'
import { StyledGrid } from './Grid.styled'
import { GridProps } from './Grid.types'
import GridItem from './Grid.Item'
import GridContext from './Grid.context'

const Grid = (props: GridProps) => {
    const {
        direction = 'row',
        columns,
        spacing,
        justifyContent,
        alignItems,
        className,
        styleOverrides,
        ...rest
    } = props

    const prefixClass = 'tui-grid'

    const classNames = classnames(
        prefixClass,
        className,
    );

    const options = {
        prefixClass,
        columns,
        spacing,
        direction,
        justifyContent,
        alignItems,
        styleOverrides,
    }

    return <GridContext.Provider value={{ columns: columns || 12 }}>
        <StyledGrid
            $options={options}
            className={classNames}
            {...rest}>
            {React.Children.map(props.children, (child: ReactElement) => {
                if (child) {
                    if (child.type === GridItem) {
                        return <child.type {...child.props}></child.type>
                    } else {
                        //wraper 
                        return <GridItem>{child}</GridItem>
                    }
                }
                return null
            })}
        </StyledGrid>
    </GridContext.Provider>
}
Grid.Item = GridItem

export default Grid