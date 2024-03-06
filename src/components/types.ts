import { StyledObject } from 'styled-components'

export interface CommonProps {
    styleOverrides?: StyledObject,
}

export interface StyledCommonProps extends CommonProps {
    prefixClass: string,
}