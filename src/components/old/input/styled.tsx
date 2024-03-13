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
                height: theme['size']['medium']['base'] * 4 + 'px',
                padding: theme['size']['medium']['base'] + 'px',
                fontSize: theme['size']['medium']['fontSize'] + 'px',
                svgSize: theme['size']['medium']['base'] * 2 + 'px',
                roundBorderRadius: theme['size']['medium']['base'] * 2 + 'px',
            },
            tiny: {
                height: theme['size']['tiny']['base'] * 4 + 'px',
                padding: theme['size']['tiny']['base'] + 'px',
                fontSize: theme['size']['tiny']['fontSize'] + 'px',
                svgSize: theme['size']['tiny']['base'] * 2 + 'px',
                roundBorderRadius: theme['size']['tiny']['base'] * 2 + 'px',
            },
            small: {
                height: theme['size']['small']['base'] * 4 + 'px',
                padding: theme['size']['small']['base'] + 'px',
                fontSize: theme['size']['small']['fontSize'] + 'px',
                svgSize: theme['size']['small']['base'] * 2 + 'px',
                roundBorderRadius: theme['size']['small']['base'] * 2 + 'px',
            },
            large: {
                height: theme['size']['large']['base'] * 4 + 'px',
                padding: theme['size']['large']['base'] + 'px',
                fontSize: theme['size']['large']['fontSize'] + 'px',
                svgSize: theme['size']['large']['base'] * 2 + 'px',
                roundBorderRadius: theme['size']['large']['base'] * 2 + 'px',
            },
        }
        return css`
            /* base */
            &.${_}-root {
                display: inline-block;
                color: var(--tui-text-color-1);
                position: relative;
                width: 100%;
                line-height: 0px;
                &.${_}-disabled {
                    color: var(--tui-text-color-4);
                }
                & .${_} {
                    color: var(--tui-text-color-1);
                    height: ${size.medium.height};
                    padding: 0 ${size.medium.padding};
                    font-size: ${size.medium.fontSize};
                    outline: none;
                    width: 100%;
                    background-origin: border-box;
                    box-sizing: border-box;
                    border: solid 1px transparent;
                    border-radius: var(--tui-border-radius-normal);
                    transition: 
                        box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                        background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, 
                        border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
                    &::placeholder {
                        color: var(--tui-text-color-3);
                    }
                    &.${_}-has-start-icon {
                        padding-left: ${size.medium.height};
                    }
                    &.${_}-has-end-icon {
                        padding-right: ${size.medium.height};
                    }
                    &[disabled] {
                        color: var(--tui-text-color-4);
                        &::placeholder {
                            color: var(--tui-text-color-4);
                        }
                    }
                }               
                &.${_}-text {
                    & .${_} {
                        &[disabled] {
                            background: transparent;
                        }
                    }
                }
                &.${_}-filled {
                    & .${_} {
                        background: var(--tui-background-color-2);    
                        &:hover {
                            border: solid 1px rgb(var(--tui-primary-5));
                            background: var(--tui-background-color-1);  
                        }
                        &:focus {
                            border: solid 1px rgb(var(--tui-primary-6));
                            background: var(--tui-background-color-1);  
                            box-shadow: 0px 0px 0px 3px rgb(var(--tui-primary-2));
                        }
                        &[disabled] {
                            border: solid 1px transparent;
                            background: var(--tui-background-color-1);  
                            box-shadow: none
                            &:hover,
                            &:focus {
                                border: solid 1px transparent;
                                background: var(--tui-background-color-1);  
                                box-shadow: none;
                            }
                        }
                    }
                }
                &.${_}-outlined {
                    & .${_} {
                        border: solid 1px rgb(var(--tui-gray-5));  
                        background: transparent;    
                        &:hover {
                            border: solid 1px rgb(var(--tui-primary-5));
                        }
                        &:focus {
                            border: solid 1px rgb(var(--tui-primary-6));
                            box-shadow: 0px 0px 0px 3px rgb(var(--tui-primary-2));
                        }
                        &[disabled] {
                            border: solid 1px var(--tui-background-color-1);    
                            background: transparent;    
                            box-shadow: none
                            &:hover,
                            &:focus {
                                border: solid 1px var(--tui-background-color-1);    
                                background: transparent;    
                                box-shadow: none;
                            }
                        }
                    }
                }
                & .${_}-start-icon {
                    display: inline-flex;
                    align-items: center;
                    position: absolute;
                    margin-left: ${size.medium.padding};
                    line-height: 0;
                    height: ${size.medium.height};
                    & svg {
                        font-size: ${size.medium.svgSize};
                    }
                }
                & .${_}-end-icon {
                    display: inline-flex;
                    align-items: center;
                    position: absolute;
                    right: 0;
                    margin-right: ${size.medium.padding};
                    line-height: 0;
                    height: ${size.medium.height};
                    & svg {
                        font-size: ${size.medium.svgSize};
                    }
                }
                &.${_}-size-tiny {
                    & .${_} {
                        height: ${size.tiny.height};
                        padding: 0 ${size.tiny.padding};
                        font-size: ${size.tiny.fontSize};
                        &.${_}-has-start-icon {
                            padding-left: ${size.tiny.height};
                        }
                        &.${_}-has-end-icon {
                            padding-right: ${size.tiny.height};
                        }
                    }
                    & .${_}-start-icon {
                        margin-left: ${size.tiny.padding};
                        height: ${size.tiny.height};
                        & svg {
                            font-size: ${size.tiny.svgSize};
                        }
                    }
                    & .${_}-end-icon {
                        margin-left: ${size.tiny.padding};
                        height: ${size.tiny.height};
                        & svg {
                            font-size: ${size.tiny.svgSize};
                        }
                    }
                }
                &.${_}-size-small {
                    & .${_} {
                        height: ${size.small.height};
                        padding: 0 ${size.small.padding};
                        font-size: ${size.small.fontSize};
                        &.${_}-has-start-icon {
                            padding-left: ${size.small.height};
                        }
                        &.${_}-has-end-icon {
                            padding-right: ${size.small.height};
                        }
                    }
                    & .${_}-start-icon {
                        margin-left: ${size.small.padding};
                        height: ${size.small.height};
                        & svg {
                            font-size: ${size.small.svgSize};
                        }
                    }
                    & .${_}-end-icon {
                        margin-left: ${size.small.padding};
                        height: ${size.small.height};
                        & svg {
                            font-size: ${size.small.svgSize};
                        }
                    }
                }
                &.${_}-size-large {
                    & .${_} {
                        height: ${size.large.height};
                        padding: 0 ${size.large.padding};
                        font-size: ${size.large.fontSize};
                        &.${_}-has-start-icon {
                            padding-left: ${size.large.height};
                        }
                        &.${_}-has-end-icon {
                            padding-right: ${size.large.height};
                        }
                    }
                    & .${_}-start-icon {
                        margin-left: ${size.large.padding};
                        height: ${size.large.height};
                        & svg {
                            font-size: ${size.large.svgSize};
                        }
                    }
                    & .${_}-end-icon {
                        margin-left: ${size.large.padding};
                        height: ${size.large.height};
                        & svg {
                            font-size: ${size.large.svgSize};
                        }
                    }
                }
            }
        `
    }}
`
