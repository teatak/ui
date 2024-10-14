import styled, { css, StyledObject } from 'styled-components'
import { RecursivePartial, merge } from '../../helper/common'
import theme, { mergeStyleOverrides } from '@/style'
import { Span, Column, SpacingArray, GridOptionsProps, GridItemOptionsProps } from './Grid.types'

export const StyledGrid = styled.div<{ $options: GridOptionsProps }>`
    ${(props) => {
        const options = props.$options

        const _ = options.prefixClass
        let columns: RecursivePartial<Column> = { xs: 12 }
        if (typeof options.columns === 'number') {
            columns = {
                xs: options.columns,
                sm: options.columns,
                md: options.columns,
                lg: options.columns,
                xl: options.columns
            }
        } else {
            columns = merge(columns, options.columns)
        }
        let spacing: SpacingArray = { xs: [0, 0] }
        if (typeof options.spacing === 'number') {
            spacing = {
                xs: [options.spacing, options.spacing],
                sm: [options.spacing, options.spacing],
                md: [options.spacing, options.spacing],
                lg: [options.spacing, options.spacing],
                xl: [options.spacing, options.spacing],
            }
        } else {
            if (options.spacing?.xs) {
                if (typeof options.spacing.xs === 'number') {
                    spacing = merge(spacing, { xs: [options.spacing.xs, options.spacing.xs] })
                } else {
                    spacing = merge(spacing, { xs: options.spacing.xs })
                }
            }
            if (options.spacing?.sm) {
                if (typeof options.spacing.sm === 'number') {
                    spacing = merge(spacing, { sm: [options.spacing.sm, options.spacing.sm] })
                } else {
                    spacing = merge(spacing, { sm: options.spacing.sm })
                }
            }
            if (options.spacing?.md) {
                if (typeof options.spacing.md === 'number') {
                    spacing = merge(spacing, { md: [options.spacing.md, options.spacing.md] })
                } else {
                    spacing = merge(spacing, { md: options.spacing.md })
                }
            }
            if (options.spacing?.lg) {
                if (typeof options.spacing.lg === 'number') {
                    spacing = merge(spacing, { lg: [options.spacing.lg, options.spacing.lg] })
                } else {
                    spacing = merge(spacing, { lg: options.spacing.lg })
                }
            }
            if (options.spacing?.xl) {
                if (typeof options.spacing.xl === 'number') {
                    spacing = merge(spacing, { xl: [options.spacing.xl, options.spacing.xl] })
                } else {
                    spacing = merge(spacing, { xl: options.spacing.xl })
                }
            }
        }
        return css`
            /* base */
            --Grid-columns: ${columns.xs};
            --Grid-rowSpacing: ${spacing.xs[0]};
            --Grid-columnSpacing: ${spacing.xs[1]};
            font-family: var(--Grid-fontFamily, ${theme.vars.fontFamily.body});
            line-height: ${theme.vars.lineHeight.md};
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            margin-inline: calc(var(--Grid-rowSpacing) / -2 * 1px);
            margin-block: calc(var(--Grid-columnSpacing) / -2 * 1px);
            /* margin: calc(var(--Grid-rowSpacing) / -2 * 1px) calc(var(--Grid-columnSpacing) / -2 * 1px); */
            flex-direction: ${options.direction};
            justify-content: ${options.justifyContent};
            align-items: ${options.alignItems};
            ${columns.sm ? css`
                @media(min-width: ${theme.entries.breakpoint.sm}px) {
                    --Grid-columns:${columns.sm};
                } 
            `: ""}
            ${columns.md ? css`
                @media(min-width: ${theme.entries.breakpoint.md}px) {
                    --Grid-columns:${columns.md};
                } 
            `: ""}
            ${columns.lg ? css`
                @media(min-width: ${theme.entries.breakpoint.lg}px) {
                    --Grid-columns:${columns.lg};
                } 
            `: ""}
            ${columns.xl ? css`
                @media(min-width: ${theme.entries.breakpoint.xl}px) {
                    --Grid-columns:${columns.xl};
                } 
            `: ""}
            ${spacing.sm ? css`
                @media(min-width: ${theme.entries.breakpoint.sm}px) {
                    --Grid-rowSpacing: ${spacing.sm[0]};
                    --Grid-columnSpacing: ${spacing.sm[1]};
                } 
            `: ""}
            ${spacing.md ? css`
                @media(min-width: ${theme.entries.breakpoint.md}px) {
                    --Grid-rowSpacing: ${spacing.md[0]};
                    --Grid-columnSpacing: ${spacing.md[1]};
                } 
            `: ""}
            ${spacing.lg ? css`
                @media(min-width: ${theme.entries.breakpoint.lg}px) {
                    --Grid-rowSpacing: ${spacing.lg[0]};
                    --Grid-columnSpacing: ${spacing.lg[1]};
                } 
            `: ""}
            ${spacing.xl ? css`
                @media(min-width: ${theme.entries.breakpoint.xl}px) {
                    --Grid-rowSpacing: ${spacing.xl[0]};
                    --Grid-columnSpacing: ${spacing.xl[1]};
                } 
            `: ""}
        `
    }}
    ${props => {
        return mergeStyleOverrides('TuiGrid', props.$options)
    }}
`

export const StyledGridItem = styled.div<{ $options: GridItemOptionsProps }>`
    ${(props) => {
        const options = props.$options
        let span: RecursivePartial<Span> = {}
        switch (typeof options.span) {
            case 'number':
            case 'boolean':
                span = {
                    xs: options.span,
                }
                break
            default:
                span = merge(span, options.span)
                break
        }
        let offset: RecursivePartial<Column> = {}
        if (typeof options.offset === 'number') {
            offset = {
                xs: options.offset,
            }
        } else {
            offset = merge(offset, options.offset)
        }
        const _ = options.prefixClass
        const styleOverridesIsObject = (typeof options.styleOverrides === 'object')
        const styleOverrides = styleOverridesIsObject ? options.styleOverrides as StyledObject : undefined

        const renderSpan = (span?: number | boolean) => {
            switch (span) {
                case undefined:
                    return null
                case 0:
                    return css`
                        display: none;
                    `
                case true:
                    return css`
                        flex-grow: 1;
                    `
                default:
                    return css`
                        width: calc(100% * ${span} / var(--Grid-columns));
                        display: block;
                    `
            }
        }
        return css`
            /* base */
            box-sizing: border-box;
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: auto;
            min-width: 0;
            padding-inline: calc(var(--Grid-rowSpacing) / 2 * 1px);
            padding-block: calc(var(--Grid-columnSpacing) / 2 * 1px);
            /* span */
            ${span.xs !== undefined ? css`
                @media(min-width: ${theme.entries.breakpoint.xs}px) {
                    ${renderSpan(span.xs)}
                } 
            `: ""} 
            ${span.sm !== undefined ? css`
                @media(min-width: ${theme.entries.breakpoint.sm}px) {
                    ${renderSpan(span.sm)}
                } 
            `: ""} 
            ${span.md !== undefined ? css`
                @media(min-width: ${theme.entries.breakpoint.md}px) {
                    ${renderSpan(span.md)}
                } 
            `: ""} 
            ${span.lg !== undefined ? css`
                @media(min-width: ${theme.entries.breakpoint.lg}px) {
                    ${renderSpan(span.lg)}
                }
            `: ""} 
            ${span.xl !== undefined ? css`
                @media(min-width: ${theme.entries.breakpoint.xl}px) {
                    ${renderSpan(span.xl)}
                }
            `: ""} 
            /* offset */
            ${offset.xs !== undefined ? css`
                margin-inline-start: calc(100% * ${offset.xs} / var(--Grid-columns));
            `: ""} 
            ${offset.sm !== undefined ? css`
                @media(min-width: ${theme.entries.breakpoint.sm}px) {
                    margin-inline-start: calc(100% * ${offset.sm} / var(--Grid-columns));
                } 
            `: ""} 
            ${offset.md !== undefined ? css`
                @media(min-width: ${theme.entries.breakpoint.md}px) {
                    margin-inline-start: calc(100% * ${offset.md} / var(--Grid-columns));
                } 
            `: ""} 
            ${offset.lg !== undefined ? css`
                @media(min-width: ${theme.entries.breakpoint.lg}px) {
                    margin-inline-start: calc(100% * ${offset.lg} / var(--Grid-columns));
                } 
            `: ""} 
            ${offset.xl !== undefined ? css`
                @media(min-width: ${theme.entries.breakpoint.xl}px) {
                    margin-inline-start: calc(100% * ${offset.xl} / var(--Grid-columns));
                } 
            `: ""} 
            ${styleOverrides?.xs ? css`
                @media(min-width: ${theme.entries.breakpoint.xs}px) {
                    ${styleOverrides.xs}
                }
            `: ""}
            ${styleOverrides?.sm ? css`
                @media(min-width: ${theme.entries.breakpoint.sm}px) {
                    ${styleOverrides.sm}
                }
            `: ""}
            ${styleOverrides?.md ? css`
                @media(min-width: ${theme.entries.breakpoint.md}px) {
                    ${styleOverrides.md}
                }
            `: ""}
            ${styleOverrides?.lg ? css`
                @media(min-width: ${theme.entries.breakpoint.lg}px) {
                    ${styleOverrides.lg}
                }
            `: ""}
            ${styleOverrides?.xl ? css`
                @media(min-width: ${theme.entries.breakpoint.xl}px) {
                    ${styleOverrides.xl}
                }
            `: ""}
        `
    }}
    ${props => {
        return mergeStyleOverrides('TuiGridItem', props.$options)
    }}
`