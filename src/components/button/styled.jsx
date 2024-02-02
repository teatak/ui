import React from 'react'
import styled, { css } from 'styled-components'

export default styled.button`
    ${({ $prefixClass }) => {
        const _ = $prefixClass
        return css`
            /* base */
            &.${_} {
                display: inline-flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;
                border-radius: var(--tui-border-radius-medium);
                padding: 0 var(--tui-size-4);
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
            &.${_}-size-mini {
                border-radius: var(--tui-border-radius-small);
                padding: 0 var(--tui-size-2);
                height: var(--tui-size-mini);
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
                padding: 0 var(--tui-size-3);
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
                border-radius: var(--tui-border-radius-medium);
                padding: 0 var(--tui-size-5);
                height: var(--tui-size-large);
                font-size: 14px;
                & svg {
                    font-size: 22px;
                }
                & .${$prefixClass}-start-icon {
                    margin-right: 4px;
                }
                & .${$prefixClass}-end-icon {
                    margin-left: 4px;
                }
            }
            &.${_}-long {
                width: 100%;
            }
            &.${_}-rounded {
                border-radius: 16px;
                &.${$prefixClass}-size-mini {
                    border-radius: 12px;
                }
                &.${$prefixClass}-size-small {
                    border-radius: 14px;
                }
                &.${$prefixClass}-size-large {
                    border-radius: 18px;
                }
            }
            &.${_}-circle {
                border-radius: 50%;
                width: var(--tui-size-medium);
                height: var(--tui-size-medium);
                padding: 0;
                &.${_}-size-mini {
                    width: var(--tui-size-mini);
                    height: var(--tui-size-mini);
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
        `
    }}
`