import { css } from '@emotion/react'

export const color = css`
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
      color: var(--tui-color-background-2);
    }
`

export const row = css`
    margin-left: -8px;
    margin-right: -8px;
    row-gap: 16px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    align-items: center;
`
export const col = css`
    padding: 0px 8px;
    display: block;
    flex: 0 0 25%;
    max-width: 25%;
`
