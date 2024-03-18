import Color from "color"

//根据基础颜色生成10级的颜色
export const generateColor = (
    baseColor: string,
    option: { dark: boolean } = { dark: false },
) => {
    let lines: any = {}
    for (let i = 1; i <= 10; i++) {
        let rgb: any = null
        if (option.dark) {
            //dark
            rgb = colorPaletteDark(baseColor, i)
        } else {
            //light
            rgb = colorPalette(baseColor, i)
        }
        let str = `${rgb.r}, ${rgb.g}, ${rgb.b}`
        lines[i] = str
    }
    return lines
}

const colorPaletteGray = (baseColor: Color | string, i: number) => {
    const color = Color(baseColor)
    const h = color.hue()
    const s = color.saturationv()
    const v = color.value()

    const maxValue = 94
    const minValue = 20

    function getNewValue(isLight: boolean, i: number) {
        return isLight ? v + ((maxValue - v) / 5) * i : (v <= minValue ? v : v - ((v - minValue) / 4) * i)
    }

    const isLight = i < 6
    const index = isLight ? 6 - i : i - 6

    const retColor = i === 6
        ? Color({
            h: h,
            s: s,
            v: v,
        })
        : Color({
            h: h,
            s: s,
            v: getNewValue(isLight, index),
        })

    let rgb = retColor.rgb().round().object()
    return rgb
}

const colorPalette = (baseColor: Color | string, i: number) => {
    let color = Color(baseColor)
    const h = color.hue()
    const s = color.saturationv()
    const v = color.value()

    //detect if gray
    if (s < 5) {
        return colorPaletteGray(baseColor, i)
    }

    const hueStep = 2
    const maxSaturationStep = 100
    const minSaturationStep = 10

    const maxValue = 100
    const minValue = 40

    function getNewHue(isLight: boolean, i: number) {
        let hue
        if (h >= 60 && h <= 240) {
            hue = isLight ? h - hueStep * i : h + hueStep * i
        } else {
            hue = isLight ? h + hueStep * i : h - hueStep * i
        }
        if (hue < 0) {
            hue += 360
        } else if (hue >= 360) {
            hue -= 360
        }
        return Math.round(hue)
    }

    function getNewSaturation(isLight: boolean, i: number) {
        let newSaturation
        if (isLight) {
            newSaturation = s <= minSaturationStep ? s : s - ((s - minSaturationStep) / 5) * i
        } else {
            newSaturation = s + ((maxSaturationStep - s) / 4) * i
        }
        return newSaturation
    }

    function getNewValue(isLight: boolean, i: number) {
        return isLight ? v + ((maxValue - v) / 5) * i : (v <= minValue ? v : v - ((v - minValue) / 4) * i)
    }

    const isLight = i < 6
    const index = isLight ? 6 - i : i - 6

    let retColor = i === 6
        ? color :
        Color({
            h: getNewHue(isLight, index),
            s: getNewSaturation(isLight, index),
            v: getNewValue(isLight, index),
        })

    let rgb = retColor.rgb().round().object()
    return rgb
}

const colorPaletteDark = (baseColor: Color | string, i: number) => {
    let color = Color(baseColor)
    const h = color.hue()
    const s = color.saturationv()
    const v = color.value()
    i = 10 - i + 1

    //detect if gray
    if (s < 5) {
        return colorPaletteGray(baseColor, i)
    }

    const hueStep = 2
    const maxSaturationStep = 80
    const minSaturationStep = 20

    const maxValue = 100
    const minValue = 40

    function getNewHue(isLight: boolean, i: number) {
        let hue
        if (h >= 60 && h <= 240) {
            hue = isLight ? h - hueStep * i : h + hueStep * i
        } else {
            hue = isLight ? h + hueStep * i : h - hueStep * i
        }
        if (hue < 0) {
            hue += 360
        } else if (hue >= 360) {
            hue -= 360
        }
        return Math.round(hue)
    }

    function getNewSaturation(isLight: boolean, i: number) {
        let newSaturation
        if (isLight) {
            newSaturation = s <= minSaturationStep ? s : s - ((s - minSaturationStep) / 5) * i
        } else {
            newSaturation = s + ((maxSaturationStep - s) / 4) * i
        }
        return newSaturation
    }

    function getNewValue(isLight: boolean, i: number) {
        return isLight ? v + ((maxValue - v) / 5) * i : (v <= minValue ? v : v - ((v - minValue) / 4) * i)
    }

    const isLight = i < 6
    const index = isLight ? 6 - i : i - 6

    let retColor = i === 6
        ? color :
        Color({
            h: getNewHue(isLight, index),
            s: getNewSaturation(isLight, index),
            v: getNewValue(isLight, index),
        })

    let rgb = retColor.rgb().round().object()
    return rgb
}