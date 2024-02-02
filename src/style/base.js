import { merge } from '../helper/common'

//基础样式
export const baseTheme = {
    base: {
        // color
        primary: "rgb(0, 122, 255)",
        red: "rgb(255, 59, 48)",
        orange: "rgb(255, 149, 0)",
        yellow: "rgb(255, 204, 0)",
        green: "rgb(52, 199, 89)",
        mint: "rgb(0, 199, 190)",
        cyan: "rgb(50, 173, 230)",
        blue: "rgb(0, 122, 255)",
        indigo: "rgb(88, 86, 214)",
        purple: "rgb(175, 82, 222)",
        pink: "rgb(255, 45, 85)",
        gray: "rgb(130, 130, 130)",
    },
    backgroundColor: {
        base: {
            0: "rgb(255, 255, 255)",
            1: "rgb(var(--tui-gray-9))",
            2: "rgb(var(--tui-gray-8))",
            3: "rgb(var(--tui-gray-6))",
            4: "rgb(var(--tui-gray-4))",
        },
        light: {
            0: "rgb(255, 255, 255)",
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
        dark: {
            0: "rgb(30, 30, 30)",
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
    },
    textColor: {
        base: {
            1: "rgb(var(--tui-gray-10))",
            2: "rgb(var(--tui-gray-8))",
            3: "rgb(var(--tui-gray-6))",
            4: "rgb(var(--tui-gray-4))",
        },
        light: {
            1: "rgb(var(--tui-gray-10))",
            2: "rgb(var(--tui-gray-8))",
            3: "rgb(var(--tui-gray-6))",
            4: "rgb(var(--tui-gray-4))",
        },
        dark: {
            1: "rgb(var(--tui-gray-10))",
            2: "rgb(var(--tui-gray-8))",
            3: "rgb(var(--tui-gray-6))",
            4: "rgb(var(--tui-gray-4))",
        },
    },
    borderColor: {
        base: {
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
        light: {
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
        dark: {
            1: "rgb(var(--tui-gray-1))",
            2: "rgb(var(--tui-gray-2))",
            3: "rgb(var(--tui-gray-3))",
            4: "rgb(var(--tui-gray-4))",
        },
    },
    borderRadius: {
        none: 0,
        small: "2px",
        medium: "4px",
        large: "8px",
        circle: "50%",
    },
    size: {
        mini: "24px",
        small: "28px",
        medium: "32px",
        large: "36px",
        //空隙
        gapMini: "4px",
        gapSmall: "8px",
        gapMedium: "16px",
        gapLarge: "24px",
        //距离，按钮，输入框，padding
        spaceMini: "8px",
        spaceSmall: "12px",
        spaceMedium: "16px",
        spaceLarge: "20px",
        //填充
        paddingMini: "8px",
        paddingSmall: "16px",
        paddingMedium: "24px",
        paddingLarge: "32px",
    }
}

//合并基础样式
export const mergeBaseTheme = (theme) => {
    if (theme) {
        merge(baseTheme, theme)
    }
    return baseTheme
}
