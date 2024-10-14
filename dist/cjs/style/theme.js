'use strict';

var React = require('react');
var ReactDOM = require('react-dom/client');
var common = require('../helper/common.js');
var index = require('./color/index.js');
var cssVarsParser = require('./cssVarsParser.js');
var styled = require('styled-components');

const schemeStorageKey = 'color-scheme';
const schemeAttributeKey = 'data-color-scheme';
let loadedColorScheme = false;
let loadedThemeOptions;
let loadedTheme;
const themeChanged = (themeOptions) => {
    let nextOptions = common.merge(themeOptions || {}, loadedThemeOptions);
    if (JSON.stringify(nextOptions) == JSON.stringify(loadedThemeOptions)) {
        return false;
    }
    else {
        loadedThemeOptions = nextOptions;
        return true;
    }
};
const mergeStyleOverrides = (name, options) => {
    const theme = loadedTheme;
    if (theme) {
        let overrides;
        if (theme.entries.components) {
            //@ts-ignore
            const component = theme.entries.components[name];
            if (component) {
                overrides = component.styleOverrides;
            }
        }
        let themeStyleOverrides = typeof overrides === 'function' ? overrides(options) : overrides;
        let comStyleOverrides = typeof options.styleOverrides === 'function' ? options.styleOverrides(options) : options.styleOverrides;
        return [...styled.css `${themeStyleOverrides}${comStyleOverrides}`];
    }
    return [];
};
function createTheme(themeOptions, defaultColorScheme = 'light') {
    const changed = themeChanged(themeOptions);
    if (!changed) {
        return loadedTheme;
    }
    const { cssVarPrefix = 'tui', ...scalesInput } = themeOptions || {};
    const defaultColors = {
        common: {
            white: 'white',
            black: 'black',
        }
    };
    const baseColor = {
        // color
        primary: 'rgb(10, 132, 255)',
        neutral: 'rgb(152, 152, 152)',
        danger: 'rgb(255, 69, 58)',
        success: 'rgb(50, 215, 75)',
        warning: 'rgb(255, 159, 10)',
        ...scalesInput.baseColor
    };
    const makeColors = (dark) => {
        let o = {};
        Object.keys(baseColor).map((k) => {
            let _color = baseColor[k];
            if (_color) {
                const range = {
                    ...index.generateColor(_color, { dark }),
                };
                o[k] = range;
            }
            else {
                throw new Error(`color ${k} undefined`);
            }
        });
        return o;
    };
    const lightColors = makeColors(false);
    const darkColors = makeColors(true);
    const createLightModeVariables = (color) => {
        const isLight = true;
        return {
            ...lightColors[color],
            dark: getCssVarColor(`${color}-70`, isLight),
            onDark: getCssVar('common-white', defaultColors.common.white),
            main: getCssVarColor(`${color}-55`, isLight),
            onMain: getCssVar('common-white', defaultColors.common.white),
            container: getCssVarColor(`${color}-15`, isLight),
            onContainer: getCssVarColor(`${color}-90`, isLight),
            light: getCssVarColor(`${color}-5`, isLight),
            onLight: getCssVarColor(`${color}-90`, isLight),
        };
    };
    const createDarkModeVariables = (color) => {
        const isLight = false;
        return {
            ...darkColors[color],
            dark: getCssVarColor(`${color}-70`, isLight),
            onDark: getCssVarColor(`${color}-5`, isLight),
            main: getCssVarColor(`${color}-55`, isLight),
            onMain: getCssVarColor(`${color}-5`, isLight),
            container: getCssVarColor(`${color}-15`, isLight),
            onContainer: getCssVarColor(`${color}-90`, isLight),
            light: getCssVarColor(`${color}-5`, isLight),
            onLight: getCssVarColor(`${color}-90`, isLight),
        };
    };
    const loadColorsVariables = (scheme) => {
        let o = {};
        Object.keys(baseColor).map((k) => {
            if (scheme == 'light') {
                o[k] = {
                    ...createLightModeVariables(k),
                };
            }
            else {
                o[k] = {
                    ...createDarkModeVariables(k),
                };
            }
        });
        return o;
    };
    const getCssVar = (cssVar, fallback) => {
        return `var(--${cssVarPrefix}-${cssVar}${fallback ? `, ${fallback}` : ''})`;
    };
    const getCssVarColor = (cssVar, light) => {
        const tokens = cssVar.split('-');
        const color = tokens[0];
        const index = tokens[1];
        // @ts-ignore
        return `rgb(var(--${cssVarPrefix}-${cssVar}, ${light ? lightColors[color]?.[index] : darkColors[color]?.[index]}))`;
    };
    const fontFamilyFallback = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    const lightColorSystem = {
        mode: 'light',
        ...loadColorsVariables('light'),
        common: {
            ...defaultColors.common
        },
        surface: {
            //dim
            dark: getCssVarColor('neutral-20', true),
            onDark: getCssVarColor('neutral-95', true),
            //main
            main: getCssVarColor('neutral-10', true),
            onMain: getCssVarColor('neutral-95', true),
            //container
            container: getCssVarColor('neutral-5', true),
            onContainer: getCssVarColor('neutral-95', true),
            //body
            body: getCssVar('common-white', defaultColors.common.white),
            onBody: getCssVarColor('neutral-95', true),
            //inverse
            inverseMain: getCssVarColor('neutral-90', true),
            inverseOnMain: getCssVarColor('neutral-5', true),
        },
    };
    const darkColorSystem = {
        mode: 'dark',
        ...loadColorsVariables('dark'),
        common: {
            ...defaultColors.common
        },
        surface: {
            //dim
            dark: getCssVarColor('neutral-15', false),
            onDark: getCssVarColor('neutral-95', false),
            //main
            main: getCssVarColor('neutral-10', false),
            onMain: getCssVarColor('neutral-95', false),
            //container
            container: getCssVarColor('neutral-5', false),
            onContainer: getCssVarColor('neutral-95', false),
            //body
            body: getCssVarColor('neutral-0', false),
            onBody: getCssVarColor('neutral-95', false),
            //inverse
            inverseMain: getCssVarColor('neutral-90', false),
            inverseOnMain: getCssVarColor('neutral-5', false),
        },
    };
    const defaultScales = {
        entries: {
            defaultColorScheme: defaultColorScheme,
            baseColor: baseColor,
            color: lightColors,
            colorSchemes: {
                light: lightColorSystem,
                dark: darkColorSystem,
            },
            breakpoint: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
                xl: 1536,
            },
            fontFamily: {
                body: `"Inter", ${getCssVar(`fontFamily-fallback`, fontFamilyFallback)}`,
                display: `"Inter", ${getCssVar(`fontFamily-fallback`, fontFamilyFallback)}`,
                code: 'Source Code Pro,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace',
                fallback: fontFamilyFallback,
            },
            fontSize: {
                xs: '0.625rem', // 10px
                sm: '0.75rem', // 12px
                md: '0.875rem', // 14px
                lg: '1rem', // 16px
                xl: '1.125rem', // 18px
                xl2: '1.25rem', // 20px
                xl3: '1.5rem', // 24px
                xl4: '2rem', //32px
            },
            lineHeight: {
                xs: '1.33334', // largest font sizes: h1, h2
                sm: '1.42858', // normal font sizes
                md: '1.5', // normal font sizes
                lg: '1.55556', // large font sizes for components
                xl: '1.66667', // smallest font sizes
            },
            radius: {
                xs: '2px',
                sm: '4px',
                md: '6px',
                lg: '8px',
                xl: '12px',
            },
            shadow: {
                xs: 'rgba(0, 0, 0, 0.08) 0px 1px 2px 0px',
                sm: 'rgba(0, 0, 0, 0.08) 0px 1px 2px 0px, rgba(0, 0, 0, 0.08) 0px 2px 4px 0px',
                md: 'rgba(0, 0, 0, 0.08) 0px 2px 8px -2px, rgba(0, 0, 0, 0.08) 0px 6px 12px -2px',
                lg: 'rgba(0, 0, 0, 0.08) 0px 2px 8px -2px, rgba(0, 0, 0, 0.08) 0px 12px 16px -4px',
                xl: 'rgba(0, 0, 0, 0.08) 0px 2px 8px -2px, rgba(0, 0, 0, 0.08) 0px 20px 24px -4px ',
            },
            zIndex: {
                badge: 1,
                table: 10,
                popup: 1000,
                modal: 1300,
                snackbar: 1400,
                tooltip: 1500,
            },
        }
    };
    const { colorSchemes, ...mergedScales } = scalesInput
        ? common.merge(defaultScales.entries, scalesInput)
        : defaultScales.entries;
    const { vars: themeVars, css: themeCss } = prepareCssVars({ colorSchemes, ...mergedScales }, {
        prefix: cssVarPrefix,
        shouldSkipGeneratingVar: (keys) => {
            //skip mode
            return keys[0] === 'breakpoints' || keys[0] === 'mode';
        }
    });
    let theme = {
        entries: {
            colorSchemes,
            ...mergedScales
        },
        vars: themeVars,
        css: themeCss,
    };
    // theme.vars.palette.warning
    return loadedTheme = theme;
}
function prepareCssVars(theme, parserConfig) {
    const { colorSchemes = {}, color, baseColor, components, defaultColorScheme = 'light', ...otherTheme } = theme;
    let { vars, css, varsWithDefaults } = cssVarsParser.cssVarsParser(otherTheme, parserConfig);
    let themeVars = varsWithDefaults;
    const colorSchemesMap = { root: css };
    let palette = {};
    const { [defaultColorScheme]: light, ...otherColorSchemes } = colorSchemes;
    Object.entries(otherColorSchemes || {}).forEach(([key, _scheme]) => {
        //let  _scheme = Object.assign({},scheme)
        const { vars, css, varsWithDefaults } = cssVarsParser.cssVarsParser(_scheme, parserConfig);
        palette = common.merge(palette, varsWithDefaults);
        colorSchemesMap[key] = css;
    });
    if (light) {
        // default color scheme vars should be merged last to set as default
        const { vars, css, varsWithDefaults } = cssVarsParser.cssVarsParser(light, parserConfig);
        palette = common.merge(palette, varsWithDefaults);
        colorSchemesMap[defaultColorScheme] = css;
    }
    themeVars = common.merge(themeVars, { palette });
    return {
        vars: themeVars,
        css: colorSchemesMap,
    };
}
let _defaultMode = 'system';
const GlobalColorScheme = styled.createGlobalStyle `
  ${props => {
    return styled.css `
            :root {
                ${props.$root}
            }
            ${props.$defaultMode === 'dark' ?
        styled.css `
                    [${schemeAttributeKey}='light'] {
                        color-scheme: light;
                        ${props.$light}
                    }
                    :root, [${schemeAttributeKey}='dark'] {
                        color-scheme: dark;
                        ${props.$dark}
                    }
                ` :
        styled.css `
                    :root, [${schemeAttributeKey}='light'] {
                        color-scheme: light;
                        ${props.$light}
                    }
                    [${schemeAttributeKey}='dark'] {
                        color-scheme: dark;
                        ${props.$dark}
                    }
                `}
            [${schemeAttributeKey}='system'] {
                @media (prefers-color-scheme: light) {
                    color-scheme: light;
                    ${props.$light}
                }
                @media (prefers-color-scheme: dark) {
                    color-scheme: dark;
                    ${props.$dark}
                }
            }
            ${props.$customCss}
        `;
}}
`;
function loadedVars(vars) {
    if (loadedTheme) {
        let items = loadedTheme.css[vars];
        let lines = [];
        Object.keys(items).map((k) => {
            let str = `${k}: ${items[k]};\n`;
            lines.push(str);
        });
        return lines.join('');
    }
    return "";
}
// 获取用户倾向样式
const getMode = () => {
    const scheme = localStorage.getItem(schemeStorageKey);
    if (scheme) {
        return scheme;
    }
    else {
        return _defaultMode;
    }
};
const detectMode = () => {
    const scheme = localStorage.getItem(schemeStorageKey);
    if (scheme === "system" || scheme === null) {
        let isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return isDark ? 'dark' : 'light';
    }
    else {
        return scheme;
    }
};
// 设置用户倾向样式
const setMode = (scheme) => {
    localStorage.setItem(schemeStorageKey, scheme);
    reflectMode();
};
// 设置用户倾向样式
const restoreMode = () => {
    localStorage.removeItem(schemeStorageKey);
    reflectMode();
};
// 应用用户倾向样式
const reflectMode = () => {
    const scheme = localStorage.getItem(schemeStorageKey);
    if (scheme) {
        document.firstElementChild?.setAttribute(schemeAttributeKey, scheme);
    }
    else {
        if (_defaultMode == 'system') {
            document.firstElementChild?.setAttribute(schemeAttributeKey, _defaultMode);
        }
    }
};
const prerenderStyle = (defaultMode = 'system', customCss) => {
    if (!loadedColorScheme) {
        if (defaultMode) {
            _defaultMode = defaultMode;
        }
        reflectMode();
        loadedColorScheme = true;
        ReactDOM.createRoot(document.createElement('div')).render(React.createElement(GlobalColorScheme, { "$defaultMode": _defaultMode, "$root": styled.css `
                    ${loadedVars('root')}
                `, "$light": styled.css `
                    ${loadedVars('light')}
                `, "$dark": styled.css `
                    ${loadedVars('dark')}
                `, "$customCss": customCss }));
    }
};

exports.createTheme = createTheme;
exports.detectMode = detectMode;
exports.getMode = getMode;
exports.mergeStyleOverrides = mergeStyleOverrides;
exports.prerenderStyle = prerenderStyle;
exports.reflectMode = reflectMode;
exports.restoreMode = restoreMode;
exports.setMode = setMode;
exports.themeChanged = themeChanged;
//# sourceMappingURL=theme.js.map
