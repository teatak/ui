'use strict';

var styled = require('styled-components');
var common = require('../../helper/common.js');
var theme = require('../../style/theme.js');
var defaultTheme = require('../../style/defaultTheme.js');

const StyledGrid = styled.div `
    ${(props) => {
    const options = props.$options;
    options.prefixClass;
    let columns = { xs: 12 };
    if (typeof options.columns === 'number') {
        columns = {
            xs: options.columns,
            sm: options.columns,
            md: options.columns,
            lg: options.columns,
            xl: options.columns
        };
    }
    else {
        columns = common.merge(columns, options.columns);
    }
    let spacing = { xs: [0, 0] };
    if (typeof options.spacing === 'number') {
        spacing = {
            xs: [options.spacing, options.spacing],
            sm: [options.spacing, options.spacing],
            md: [options.spacing, options.spacing],
            lg: [options.spacing, options.spacing],
            xl: [options.spacing, options.spacing],
        };
    }
    else {
        if (options.spacing?.xs) {
            if (typeof options.spacing.xs === 'number') {
                spacing = common.merge(spacing, { xs: [options.spacing.xs, options.spacing.xs] });
            }
            else {
                spacing = common.merge(spacing, { xs: options.spacing.xs });
            }
        }
        if (options.spacing?.sm) {
            if (typeof options.spacing.sm === 'number') {
                spacing = common.merge(spacing, { sm: [options.spacing.sm, options.spacing.sm] });
            }
            else {
                spacing = common.merge(spacing, { sm: options.spacing.sm });
            }
        }
        if (options.spacing?.md) {
            if (typeof options.spacing.md === 'number') {
                spacing = common.merge(spacing, { md: [options.spacing.md, options.spacing.md] });
            }
            else {
                spacing = common.merge(spacing, { md: options.spacing.md });
            }
        }
        if (options.spacing?.lg) {
            if (typeof options.spacing.lg === 'number') {
                spacing = common.merge(spacing, { lg: [options.spacing.lg, options.spacing.lg] });
            }
            else {
                spacing = common.merge(spacing, { lg: options.spacing.lg });
            }
        }
        if (options.spacing?.xl) {
            if (typeof options.spacing.xl === 'number') {
                spacing = common.merge(spacing, { xl: [options.spacing.xl, options.spacing.xl] });
            }
            else {
                spacing = common.merge(spacing, { xl: options.spacing.xl });
            }
        }
    }
    return styled.css `
            /* base */
            --Grid-columns: ${columns.xs};
            --Grid-rowSpacing: ${spacing.xs[0]};
            --Grid-columnSpacing: ${spacing.xs[1]};
            font-family: var(--Grid-fontFamily, ${defaultTheme.vars.fontFamily.body});
            line-height: ${defaultTheme.vars.lineHeight.md};
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
            margin-inline: calc(var(--Grid-rowSpacing) / -2 * 1px);
            margin-block: calc(var(--Grid-columnSpacing) / -2 * 1px);
            /* margin: calc(var(--Grid-rowSpacing) / -2 * 1px) calc(var(--Grid-columnSpacing) / -2 * 1px); */
            flex-direction: ${options.direction};
            justify-content: ${options.justifyContent};
            align-items: ${options.alignItems};
            ${columns.sm ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.sm}px) {
                    --Grid-columns:${columns.sm};
                } 
            ` : ""}
            ${columns.md ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.md}px) {
                    --Grid-columns:${columns.md};
                } 
            ` : ""}
            ${columns.lg ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.lg}px) {
                    --Grid-columns:${columns.lg};
                } 
            ` : ""}
            ${columns.xl ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.xl}px) {
                    --Grid-columns:${columns.xl};
                } 
            ` : ""}
            ${spacing.sm ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.sm}px) {
                    --Grid-rowSpacing: ${spacing.sm[0]};
                    --Grid-columnSpacing: ${spacing.sm[1]};
                } 
            ` : ""}
            ${spacing.md ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.md}px) {
                    --Grid-rowSpacing: ${spacing.md[0]};
                    --Grid-columnSpacing: ${spacing.md[1]};
                } 
            ` : ""}
            ${spacing.lg ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.lg}px) {
                    --Grid-rowSpacing: ${spacing.lg[0]};
                    --Grid-columnSpacing: ${spacing.lg[1]};
                } 
            ` : ""}
            ${spacing.xl ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.xl}px) {
                    --Grid-rowSpacing: ${spacing.xl[0]};
                    --Grid-columnSpacing: ${spacing.xl[1]};
                } 
            ` : ""}
        `;
}}
    ${props => {
    return theme.mergeStyleOverrides('TuiGrid', props.$options);
}}
`;
const StyledGridItem = styled.div `
    ${(props) => {
    const options = props.$options;
    let span = {};
    switch (typeof options.span) {
        case 'number':
        case 'boolean':
            span = {
                xs: options.span,
            };
            break;
        default:
            span = common.merge(span, options.span);
            break;
    }
    let offset = {};
    if (typeof options.offset === 'number') {
        offset = {
            xs: options.offset,
        };
    }
    else {
        offset = common.merge(offset, options.offset);
    }
    options.prefixClass;
    const styleOverridesIsObject = (typeof options.styleOverrides === 'object');
    const styleOverrides = styleOverridesIsObject ? options.styleOverrides : undefined;
    const renderSpan = (span) => {
        switch (span) {
            case undefined:
                return null;
            case 0:
                return styled.css `
                        display: none;
                    `;
            case true:
                return styled.css `
                        flex-grow: 1;
                    `;
            default:
                return styled.css `
                        width: calc(100% * ${span} / var(--Grid-columns));
                        display: block;
                    `;
        }
    };
    return styled.css `
            /* base */
            box-sizing: border-box;
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: auto;
            min-width: 0;
            padding-inline: calc(var(--Grid-rowSpacing) / 2 * 1px);
            padding-block: calc(var(--Grid-columnSpacing) / 2 * 1px);
            /* span */
            ${span.xs !== undefined ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.xs}px) {
                    ${renderSpan(span.xs)}
                } 
            ` : ""} 
            ${span.sm !== undefined ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.sm}px) {
                    ${renderSpan(span.sm)}
                } 
            ` : ""} 
            ${span.md !== undefined ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.md}px) {
                    ${renderSpan(span.md)}
                } 
            ` : ""} 
            ${span.lg !== undefined ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.lg}px) {
                    ${renderSpan(span.lg)}
                }
            ` : ""} 
            ${span.xl !== undefined ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.xl}px) {
                    ${renderSpan(span.xl)}
                }
            ` : ""} 
            /* offset */
            ${offset.xs !== undefined ? styled.css `
                margin-inline-start: calc(100% * ${offset.xs} / var(--Grid-columns));
            ` : ""} 
            ${offset.sm !== undefined ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.sm}px) {
                    margin-inline-start: calc(100% * ${offset.sm} / var(--Grid-columns));
                } 
            ` : ""} 
            ${offset.md !== undefined ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.md}px) {
                    margin-inline-start: calc(100% * ${offset.md} / var(--Grid-columns));
                } 
            ` : ""} 
            ${offset.lg !== undefined ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.lg}px) {
                    margin-inline-start: calc(100% * ${offset.lg} / var(--Grid-columns));
                } 
            ` : ""} 
            ${offset.xl !== undefined ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.xl}px) {
                    margin-inline-start: calc(100% * ${offset.xl} / var(--Grid-columns));
                } 
            ` : ""} 
            ${styleOverrides?.xs ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.xs}px) {
                    ${styleOverrides.xs}
                }
            ` : ""}
            ${styleOverrides?.sm ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.sm}px) {
                    ${styleOverrides.sm}
                }
            ` : ""}
            ${styleOverrides?.md ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.md}px) {
                    ${styleOverrides.md}
                }
            ` : ""}
            ${styleOverrides?.lg ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.lg}px) {
                    ${styleOverrides.lg}
                }
            ` : ""}
            ${styleOverrides?.xl ? styled.css `
                @media(min-width: ${defaultTheme.entries.breakpoint.xl}px) {
                    ${styleOverrides.xl}
                }
            ` : ""}
        `;
}}
    ${props => {
    return theme.mergeStyleOverrides('TuiGridItem', props.$options);
}}
`;

exports.StyledGrid = StyledGrid;
exports.StyledGridItem = StyledGridItem;
//# sourceMappingURL=Grid.styled.js.map
