import styled, { css } from 'styled-components'

export default styled.form<{ $prefixClass: string }>`
    ${(props) => {
        const _ = props.$prefixClass
        return css`
             &.${_} {
               
             }
        `
    }}

`
