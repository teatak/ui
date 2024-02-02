import React from 'react'
import styled, { css } from 'styled-components'

export default styled.div`
    ${({ $prefixClass }) => {
        return css`
            /* base */
            &.${$prefixClass} {
                display: inline-flex;
                flex-wrap: wrap;
            }
            &.${$prefixClass}-direction-horizontal {
                align-items: center;
                flex-direction: row;
            }
            &.${$prefixClass}-direction-vertical {
                align-items: flex-start;
                flex-direction: column;
            }
            &.${$prefixClass}-size-mini {
                gap: var(--tui-size-1)
            }
            &.${$prefixClass}-size-small {
                gap: var(--tui-size-2)
            }
            &.${$prefixClass}-size-medium {
                gap: var(--tui-size-4)
            }
            &.${$prefixClass}-size-large {
                gap: var(--tui-size-6)
            }
            &.${$prefixClass}-align-center {
                align-items: center;
            }
            &.${$prefixClass}-align-start {
                align-items: flex-start;
            }
            &.${$prefixClass}-align-end {
                align-items: flex-end;
            }
            &.${$prefixClass}-align-baseline {
                align-items: baseline;
            }
            &.${$prefixClass}-align-stretch {
                align-items: stretch;
            }
            /* item */
            .${$prefixClass}-item {
                display: flex;
            }
        `
    }}

`