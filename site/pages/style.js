import { css } from '@emotion/react'

const colors = css`
    div {
      padding: 16px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.05);
      }
      &:first-of-type {
        border-radius: 6px 6px 0 0;
      }
      &:last-of-type {
        border-radius: 0 0 6px 6px;
      }
    }
    .reverse {
      color: var(--tt-color-background-2);
    }
`

export { colors }