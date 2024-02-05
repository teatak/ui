import styled, { css } from 'styled-components'
import { baseTheme } from '../../style'

//注入baseTheme
export const buttonTheme: any = {
    button: {
        standard: {
            color: "rgb(var(--tui-primary-6))"
        }
    }
}

export default styled.button<{ $prefixClass: string }>`
    ${(props) => {
        const _ = props.$prefixClass
        return css`
            /* base */
            &.${_} {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: var(--tui-border-radius-medium);
                padding: 0 var(--tui-size-space-medium);
                height: var(--tui-size-medium);
                outline: none;
                border: none;
                font-size: 14px;
                user-select: none;
                color: var(--tui-text-color-2);
                transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            }
            & svg {
                font-size: 20px;
                vertical-align: middle;
            }
            & .${_}-start-icon {
                margin-right: 4px;
            }
            & .${_}-end-icon {
                margin-left: 4px;
            }
            & .${_}-text {
                line-height: 1;
            }
            &.${_}-size-tiny {
                border-radius: var(--tui-border-radius-tiny);
                padding: 0 var(--tui-size-space-tiny);
                height: var(--tui-size-tiny);
                font-size: 12px;
                & svg {
                    font-size: 14px;
                }
                & .${_}-start-icon {
                    margin-right: 2px;
                }
                & .${_}-end-icon {
                    margin-left: 2px;
                }
            }
            &.${_}-size-small {
                border-radius: var(--tui-border-radius-small);
                padding: 0 var(--tui-size-space-small);
                height: var(--tui-size-small);
                font-size: 12px;
                & svg {
                    font-size: 16px;
                }
                & .${_}-start-icon {
                    margin-right: 3px;
                }
                & .${_}-end-icon {
                    margin-left: 3px;
                }
            }
            &.${_}-size-large {
                border-radius: var(--tui-border-radius-large);
                padding: 0 var(--tui-size-space-large);
                height: var(--tui-size-large);
                font-size: 14px;
                & svg {
                    font-size: 22px;
                }
                & .${_}-start-icon {
                    margin-right: 4px;
                }
                & .${_}-end-icon {
                    margin-left: 4px;
                }
            }
            &.${_}-long {
                width: 100%;
            }
            &.${_}-rounded {
                border-radius: 16px;
                &.${_}-size-tiny {
                    border-radius: 12px;
                }
                &.${_}-size-small {
                    border-radius: 14px;
                }
                &.${_}-size-large {
                    border-radius: 18px;
                }
            }
            &.${_}-circle {
                border-radius: 50%;
                width: var(--tui-size-medium);
                height: var(--tui-size-medium);
                padding: 0;
                &.${_}-size-tiny {
                    width: var(--tui-size-tiny);
                    height: var(--tui-size-tiny);
                }
                &.${_}-size-small {
                    width: var(--tui-size-small);
                    height: var(--tui-size-small);
                }
                &.${_}-size-large {
                    width: var(--tui-size-large);
                    height: var(--tui-size-large);
                }
            }
            ${buttonColor(_, 'standard', 'primary')}
        `
    }}
`

const buttonColor = (_: string, type: string, color: string) => {
    const theme = baseTheme.button
    return css`
    &.${_}-${type} {
        &.${_}-color-${color} {
            color: ${theme[type]["color"]};
            /* border: ~"@{btn-@{type}-@{status}-border}";
            background-color: ~"@{btn-@{type}-@{status}-color-bg}";
            &:hover,
            &:focus {
                border: ~"@{btn-@{type}-@{status}-border-hover}";
                background-color: ~"@{btn-@{type}-@{status}-color-bg-hover}";
            }
            &:active,
            &.clicked {
                border: ~"@{btn-@{type}-@{status}-border-active}";
                background-color: ~"@{btn-@{type}-@{status}-color-bg-active}";
            } */
        }
    }
`
}