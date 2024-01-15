import colorPalette from './palette'
import colorPaletteDark from './palette-dark'
import Color from 'color'

const getRgbStr = (color) => {
    return Color(color)
        .rgb()
        .round()
        .color
        .join(',')
}

export const generateColor = (color, option = { gray: false, dark: false, format: "rgb" }) => {
    let colorObj = {}
    for (let i = 1; i <= 10; i++) {
        option.index = i
        colorObj[i] = option.dark ? colorPaletteDark(color, option.index, option.format) : colorPalette(color, option.index, option.format)
        if (option.gray) {
            let _gray = Color(colorObj[i]).grayscale().rgb().string()
            colorObj[i] = _gray
        }
        colorObj[i] = getRgbStr(colorObj[i])
    }
    return colorObj
}
