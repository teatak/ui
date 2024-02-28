
import { merge } from '../helper/common'
import { injectControlThemes } from './inject'

//基础样式
export const baseTheme: any = {
    base: {
        // color
        primary: 'rgb(0, 122, 255)',
        red: 'rgb(255, 59, 48)',
        orange: 'rgb(255, 149, 0)',
        yellow: 'rgb(255, 204, 0)',
        green: 'rgb(52, 199, 89)',
        mint: 'rgb(0, 199, 190)',
        cyan: 'rgb(50, 173, 230)',
        blue: 'rgb(0, 122, 255)',
        indigo: 'rgb(88, 86, 214)',
        purple: 'rgb(175, 82, 222)',
        pink: 'rgb(255, 45, 85)',
        gray: 'rgb(130, 130, 130)',
    },
    backgroundColor: {
        base: {
            0: 'rgb(255, 255, 255)',
            1: 'rgb(var(--tui-gray-9))',
            2: 'rgb(var(--tui-gray-8))',
            3: 'rgb(var(--tui-gray-6))',
            4: 'rgb(var(--tui-gray-4))',
        },
        light: {
            0: 'rgb(255, 255, 255)',
            1: 'rgb(var(--tui-gray-1))',
            2: 'rgb(var(--tui-gray-2))',
            3: 'rgb(var(--tui-gray-3))',
            4: 'rgb(var(--tui-gray-4))',
        },
        dark: {
            0: 'rgb(30, 30, 30)',
            1: 'rgb(var(--tui-gray-1))',
            2: 'rgb(var(--tui-gray-2))',
            3: 'rgb(var(--tui-gray-3))',
            4: 'rgb(var(--tui-gray-4))',
        },
    },
    textColor: {
        base: {
            1: 'rgb(var(--tui-gray-10))',
            2: 'rgb(var(--tui-gray-8))',
            3: 'rgb(var(--tui-gray-6))',
            4: 'rgb(var(--tui-gray-4))',
        },
        light: {
            1: 'rgb(var(--tui-gray-10))',
            2: 'rgb(var(--tui-gray-8))',
            3: 'rgb(var(--tui-gray-6))',
            4: 'rgb(var(--tui-gray-4))',
        },
        dark: {
            1: 'rgb(var(--tui-gray-10))',
            2: 'rgb(var(--tui-gray-8))',
            3: 'rgb(var(--tui-gray-6))',
            4: 'rgb(var(--tui-gray-4))',
        },
    },
    borderColor: {
        base: {
            1: 'rgb(var(--tui-gray-1))',
            2: 'rgb(var(--tui-gray-2))',
            3: 'rgb(var(--tui-gray-3))',
            4: 'rgb(var(--tui-gray-4))',
        },
        light: {
            1: 'rgb(var(--tui-gray-1))',
            2: 'rgb(var(--tui-gray-2))',
            3: 'rgb(var(--tui-gray-3))',
            4: 'rgb(var(--tui-gray-4))',
        },
        dark: {
            1: 'rgb(var(--tui-gray-1))',
            2: 'rgb(var(--tui-gray-2))',
            3: 'rgb(var(--tui-gray-3))',
            4: 'rgb(var(--tui-gray-4))',
        },
    },
    borderRadius: {
        none: 0,
        normal: '4px',
        tiny: '2px',
        small: '4px',
        medium: '6px',
        large: '8px',
        circle: '50%',
    },
    size: {
        tiny: '24px',
        small: '28px',
        medium: '32px',
        large: '36px',
        //空隙
        gapTiny: '4px',
        gapSmall: '8px',
        gapMedium: '16px',
        gapLarge: '24px',
        //距离，按钮，输入框，padding
        spaceTiny: '8px',
        spaceSmall: '12px',
        spaceMedium: '16px',
        spaceLarge: '20px',
        //填充
        paddingTiny: '8px',
        paddingSmall: '16px',
        paddingMedium: '24px',
        paddingLarge: '32px',
    }
}

//合并基础样式
export const mergeBaseTheme = (theme?: any) => {
    //注入
    injectControlThemes()
    if (theme) {
        merge(baseTheme, theme)
    }
    return baseTheme
}

// const defaultColors = {
//     primary: colors.blue,
//     neutral: colors.gray,
//     danger: colors.red,
//     success: colors.green,
//     warning: colors.yellow,
//     common: {
//         white: '#FFF',
//         black: '#000',
//     },
// };

// export type ColorPaletteProp = 'primary' | 'neutral' | 'danger' | 'success' | 'warning';

// const getCssVarColor = (cssVar: string) => {
//     const prefix = '--tui'
//     const tokens = cssVar.split('-');
//     const color = tokens[1];
//     const index = tokens[2];

//     // @ts-ignore
//     return `var(${prefix}-${cssVar},${defaultColors[color]?.[index]}))`;
// };

// const createLightModeVariantVariables = (color: ColorPaletteProp) => ({
//     plainColor: getCssVarColor(`palette-${color}-500`),
//     plainHoverBg: getCssVarColor(`palette-${color}-100`),
//     plainActiveBg: getCssVarColor(`palette-${color}-200`),
//     plainDisabledColor: getCssVarColor(`palette-neutral-400`),

//     outlinedColor: getCssVarColor(`palette-${color}-500`),
//     outlinedBorder: getCssVarColor(`palette-${color}-300`),
//     outlinedHoverBg: getCssVarColor(`palette-${color}-100`),
//     outlinedActiveBg: getCssVarColor(`palette-${color}-200`),
//     outlinedDisabledColor: getCssVarColor(`palette-neutral-400`),
//     outlinedDisabledBorder: getCssVarColor(`palette-neutral-200`),

//     softColor: getCssVarColor(`palette-${color}-700`),
//     softBg: getCssVarColor(`palette-${color}-100`),
//     softHoverBg: getCssVarColor(`palette-${color}-200`),
//     softActiveColor: getCssVarColor(`palette-${color}-800`),
//     softActiveBg: getCssVarColor(`palette-${color}-300`),
//     softDisabledColor: getCssVarColor(`palette-neutral-400`),
//     softDisabledBg: getCssVarColor(`palette-neutral-50`),

//     solidColor: getCssVarColor(`palette-common-white`),
//     solidBg: getCssVarColor(`palette-${color}-500`),
//     solidHoverBg: getCssVarColor(`palette-${color}-600`),
//     solidActiveBg: getCssVarColor(`palette-${color}-700`),
//     solidDisabledColor: getCssVarColor(`palette-neutral-400`),
//     solidDisabledBg: getCssVarColor(`palette-neutral-100`),
// });

// const createDarkModeVariantVariables = (color: ColorPaletteProp) => ({
//     plainColor: getCssVarColor(`palette-${color}-300`),
//     plainHoverBg: getCssVarColor(`palette-${color}-800`),
//     plainActiveBg: getCssVarColor(`palette-${color}-700`),
//     plainDisabledColor: getCssVarColor(`palette-neutral-500`),

//     outlinedColor: getCssVarColor(`palette-${color}-200`),
//     outlinedBorder: getCssVarColor(`palette-${color}-700`),
//     outlinedHoverBg: getCssVarColor(`palette-${color}-800`),
//     outlinedActiveBg: getCssVarColor(`palette-${color}-700`),
//     outlinedDisabledColor: getCssVarColor(`palette-neutral-500`),
//     outlinedDisabledBorder: getCssVarColor(`palette-neutral-800`),

//     softColor: getCssVarColor(`palette-${color}-200`),
//     softBg: getCssVarColor(`palette-${color}-800`),
//     softHoverBg: getCssVarColor(`palette-${color}-700`),
//     softActiveColor: getCssVarColor(`palette-${color}-100`),
//     softActiveBg: getCssVarColor(`palette-${color}-600`),
//     softDisabledColor: getCssVarColor(`palette-neutral-500`),
//     softDisabledBg: getCssVarColor(`palette-neutral-800`),

//     solidColor: getCssVarColor(`palette-common-white`),
//     solidBg: getCssVarColor(`palette-${color}-500`),
//     solidHoverBg: getCssVarColor(`palette-${color}-600`),
//     solidActiveBg: getCssVarColor(`palette-${color}-700`),
//     solidDisabledColor: getCssVarColor(`palette-neutral-500`),
//     solidDisabledBg: getCssVarColor(`palette-neutral-800`),
// });

// const lightColorSystem = {
//     palette: {
//         mode: 'light',
//         primary: {
//             ...defaultColors.primary,
//             ...createLightModeVariantVariables('primary'),
//         },
//         neutral: {
//             ...defaultColors.neutral,
//             ...createLightModeVariantVariables('neutral'),
//             plainColor: getCssVarColor('palette-neutral-700'),
//             plainHoverColor: getCssVarColor(`palette-neutral-900`),
//             outlinedColor: getCssVarColor('palette-neutral-700'),
//         },
//         danger: {
//             ...defaultColors.danger,
//             ...createLightModeVariantVariables('danger'),
//         },
//         success: {
//             ...defaultColors.success,
//             ...createLightModeVariantVariables('success'),
//         },
//         warning: {
//             ...defaultColors.warning,
//             ...createLightModeVariantVariables('warning'),
//         },
//         common: {
//             white: '#FFF',
//             black: '#000',
//         },
//         text: {
//             primary: getCssVarColor('palette-neutral-800'),
//             secondary: getCssVarColor('palette-neutral-700'),
//             tertiary: getCssVarColor('palette-neutral-600'),
//             icon: getCssVarColor('palette-neutral-500'),
//         },
//         background: {
//             body: getCssVarColor('palette-common-white'),
//             surface: getCssVarColor('palette-neutral-50'),
//             popup: getCssVarColor('palette-common-white'),
//             level1: getCssVarColor('palette-neutral-100'),
//             level2: getCssVarColor('palette-neutral-200'),
//             level3: getCssVarColor('palette-neutral-300'),
//             tooltip: getCssVarColor('palette-neutral-500'),
//         },
//     }
// }

// const darkColorSystem = {

// }

// const defaultScales = {
//     colorSchemes: {
//         light: lightColorSystem,
//         dark: darkColorSystem,
//     },
//     //fontFamily,
// }