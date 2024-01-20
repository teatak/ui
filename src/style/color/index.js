import { colorPalette, colorPaletteGray } from './palette'
import { colorPaletteDark, colorPaletteDarkGray } from './palette-dark'
import Color from 'color'

const getRgbStr = (color) => {
    return Color(color)
        .rgb()
        .round()
        .color
        .join(',')
}

export const generateColor = (color, option) => {
    option = Object.assign({ gray: false, dark: false, format: "rgb" }, option)
    let colorObj = {}
    for (let i = 1; i <= 10; i++) {
        option.index = i
        if (!option.dark) {
            //light
            if (option.gray) {
                colorObj[i] = colorPaletteGray(color, option.index, option.format)
            } else {
                colorObj[i] = colorPalette(color, option.index, option.format)
            }
        } else {
            //dark
            if (option.gray) {
                colorObj[i] = colorPaletteDarkGray(color, option.index, option.format)
            } else {
                colorObj[i] = colorPaletteDark(color, option.index, option.format)
            }
        }
        colorObj[i] = getRgbStr(colorObj[i])
    }
    return colorObj
}
