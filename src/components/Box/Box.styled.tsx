import styled, { css, StyledObject } from 'styled-components'
import { RecursivePartial, merge } from '../../helper/common'
import theme, { mergeStyleOverrides } from '@/style'
import { BoxOptionsProps } from './Box.types'

export const StyledBox = styled.div<{ $options: BoxOptionsProps }>`
    ${props => {
        return mergeStyleOverrides('TuiBox', props.$options)
    }}
`
