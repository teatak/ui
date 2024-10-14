import styled, { css } from 'styled-components'
import { ButtonGroupOptionsProps } from './ButtonGroup.types'
import theme, { mergeStyleOverrides, ColorTone, ColorVariant } from '@/style'

export const StyledButtonGroup = styled.div<{ $options: ButtonGroupOptionsProps }>`
    ${props => {
        const options = props.$options
        const _ = options.prefixClass
        const direction = options.direction
        return css`
            display: flex;
            flex-direction: ${direction};
            ${groupBase(options)}
        `
    }}
    ${props => {
        return mergeStyleOverrides('TuiButtonGroup', props.$options)
    }}
`

const groupBase = (options: ButtonGroupOptionsProps) => {
    const { prefixClass: _, direction, variant, color, outlined, elevation = [0, 0, 0] } = options
    let palette = theme.vars.palette[color!] as ColorTone & ColorVariant
    if (palette === undefined) {
        palette = theme.vars.palette.neutral
    }
    let splitColor = variant === 'filled' ? `rgb(${palette[20]})` : `rgb(${palette[60]})`

    switch (direction) {
        case 'row':
            return css`
                align-items: center;
                &>:first-child:not(:only-child) {
                    border-start-end-radius: 0px;
                    border-end-end-radius: 0px;
                    &::after {
                        border-color: ${splitColor};
                        border-inline-start-width: ${outlined ? "1px" : "0px"} ;
                        border-inline-end-width: 1px;
                        border-block-start-width: ${outlined ? "1px" : "0px"} ;
                        border-block-end-width: ${outlined ? "1px" : "0px"} ;
                    }
                }
                &>:not(:first-child):not(:last-child):not(:only-child) {
                    border-radius: 0px;
                    &::after {
                        border-color: ${splitColor};
                        border-inline-start-width: 0px;
                        border-inline-end-width: 1px;
                        border-block-start-width: ${outlined ? "1px" : "0px"} ;
                        border-block-end-width: ${outlined ? "1px" : "0px"} ;
                    }
                }
                &>:last-child:not(:only-child) {
                    border-top-left-radius: 0px;
                    border-bottom-left-radius: 0px;
                    &::after {
                        border-color: ${splitColor};
                        border-inline-start-width: 0px;
                        border-inline-end-width: ${outlined ? "1px" : "0px"} ;
                        border-block-start-width: ${outlined ? "1px" : "0px"} ;
                        border-block-end-width: ${outlined ? "1px" : "0px"} ;
                    }
                }
            `
        case 'column':
            return css`
                &>:first-child:not(:only-child) {
                    border-end-start-radius: 0px;
                    border-end-end-radius: 0px;
                    &::after {
                        border-color: ${splitColor};
                        border-inline-start-width: ${outlined ? "1px" : "0px"} ;
                        border-inline-end-width: ${outlined ? "1px" : "0px"} ;
                        border-block-start-width: ${outlined ? "1px" : "0px"} ;
                        border-block-end-width: 1px ;
                    }
                }
                &>:not(:first-child):not(:last-child):not(:only-child) {
                    border-radius: 0px;
                    &::after {
                        border-color: ${splitColor};
                        border-inline-start-width: ${outlined ? "1px" : "0px"} ;
                        border-inline-end-width: ${outlined ? "1px" : "0px"} ;
                        border-block-start-width: 0px;
                        border-block-end-width: 1px;
                    }
                }
                &>:last-child:not(:only-child) {
                    border-top-right-radius: 0px;
                    border-top-left-radius: 0px;
                    &::after {
                        border-color: ${splitColor};
                        border-inline-start-width: ${outlined ? "1px" : "0px"} ;
                        border-inline-end-width: ${outlined ? "1px" : "0px"} ;
                        border-block-start-width: 0px;
                        border-block-end-width: ${outlined ? "1px" : "0px"} ;
                    }
                }
            `
        default:
            return null
    }
}
