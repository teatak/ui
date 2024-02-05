import React from 'react'
import styled, { css } from 'styled-components'

export default styled.div<{ $prefixClass: string }>`
     ${(props) => {
        const _ = props.$prefixClass
        return css`
            /* base */
            &.${_} {
                display: inline-flex;
                flex-wrap: wrap;
            }
            &.${_}-direction-horizontal {
                align-items: center;
                flex-direction: row;
            }
            &.${_}-direction-vertical {
                align-items: flex-start;
                flex-direction: column;
            }
            &.${_}-size-tiny {
                gap: var(--tui-size-1)
            }
            &.${_}-size-small {
                gap: var(--tui-size-2)
            }
            &.${_}-size-medium {
                gap: var(--tui-size-4)
            }
            &.${_}-size-large {
                gap: var(--tui-size-6)
            }
            &.${_}-align-center {
                align-items: center;
            }
            &.${_}-align-start {
                align-items: flex-start;
            }
            &.${_}-align-end {
                align-items: flex-end;
            }
            &.${_}-align-baseline {
                align-items: baseline;
            }
            &.${_}-align-stretch {
                align-items: stretch;
            }
            /* item */
            .${_}-item {
                display: flex;
            }
        `
    }}

`