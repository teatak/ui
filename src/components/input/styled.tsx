import styled, { css } from 'styled-components'
import { baseTheme } from '../../style'

//注入baseTheme
export const inputTheme: any = {
    input: {
        size: {
            tiny: {
                base: 6,
                fontSize: 12,
            },
            small: {
                base: 7,
                fontSize: 12,
            },
            medium: {
                base: 8,
                fontSize: 14,
            },
            large: {
                base: 9,
                fontSize: 14,
            },
        }
    }
}

export default styled.span<{ $prefixClass: string }>`
    ${(props) => {
        const theme = baseTheme.input
        const _ = props.$prefixClass
        const size = {
            medium: {
                height: theme["size"]["medium"]["base"] * 4 + "px",
                padding: theme["size"]["medium"]["base"] + "px",
                fontSize: theme["size"]["medium"]["fontSize"] + "px",
                svgSize: theme["size"]["medium"]["base"] * 2 + "px",
                roundBorderRadius: theme["size"]["medium"]["base"] * 2 + "px",
            },
            tiny: {
                height: theme["size"]["tiny"]["base"] * 4 + "px",
                padding: theme["size"]["tiny"]["base"] + "px",
                fontSize: theme["size"]["tiny"]["fontSize"] + "px",
                svgSize: theme["size"]["tiny"]["base"] * 2 + "px",
                roundBorderRadius: theme["size"]["tiny"]["base"] * 2 + "px",
            },
            small: {
                height: theme["size"]["small"]["base"] * 4 + "px",
                padding: theme["size"]["small"]["base"] + "px",
                fontSize: theme["size"]["small"]["fontSize"] + "px",
                svgSize: theme["size"]["small"]["base"] * 2 + "px",
                roundBorderRadius: theme["size"]["small"]["base"] * 2 + "px",
            },
            large: {
                height: theme["size"]["large"]["base"] * 4 + "px",
                padding: theme["size"]["large"]["base"] + "px",
                fontSize: theme["size"]["large"]["fontSize"] + "px",
                svgSize: theme["size"]["large"]["base"] * 2 + "px",
                roundBorderRadius: theme["size"]["large"]["base"] * 2 + "px",
            },
        }
        return css`
            /* base */
            &.${_}-root {
                display: inline-block;
                color: red;
                position: relative;
                width: 100%;
                &.${_}-disabled {
                    color: gray;
                }
                & .${_} {
                    /* color: red; */
                    color: red;
                    &[disabled] {
                        color: gray;
                    }
                }
                & .${_}-start-icon {
                    display: inline-flex;
                    align-items: center;
                    position: absolute;
                    margin-left: 7px;
                    line-height: 0;
                    height: var(--tt-size-medium);
                    & svg {
                        font-size: 20px;
                    }
                }
                & .${_}-end-icon {
                    display: inline-flex;
                    align-items: center;
                    position: absolute;
                    right: 0;
                    margin-right: 7px;
                    line-height: 0;
                    height: var(--tt-size-medium);
                    & svg {
                        font-size: 20px;
                    }
                }
            }
        `
    }}
`
