import React, { ReactElement, ReactNode } from 'react'
import classnames from 'classnames'
import { StyledGrid } from './styled'
import { GridProps } from './interface'
import GridItem from './GridItem'
import GridContext from './GridContext'

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
                if (child.type === GridItem) {
                    return <child.type {...child.props}></child.type>
                } else {
                    //wraper 
                    return <GridItem>{child}</GridItem>
                }
            })}
        </StyledGrid>
    </GridContext.Provider>
}
Grid.Item = GridItem

export default Grid