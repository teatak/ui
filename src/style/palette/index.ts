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


const colorPaletteGray = (baseColor: string, i: number) => {
    const color = Color(baseColor)
    const h = color.hue()
    const s = color.saturationv()
    const v = color.value()

    const maxValue = 99
    const minValue = 10

    function getNewValue(isLight: boolean, i: number) {
        let b = 2
        let c = 0.6
        let _v = v
        if (isLight) {
            _v = v + ((maxValue - v) / 5) * (5 - 5 * Math.pow(b, -i * c))
        } else {
            _v = (v <= minValue ? v : v - ((v - minValue) / 4) * (4 - 4 * Math.pow(b, -i * c)))
        }
        return _v
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

const colorPalette = (baseColor: string, i: number) => {
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
    const minSaturationStep = 9

    const maxValue = 100
    const minValue = 30

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


const colorPaletteDarkGray = (baseColor: string, i: number) => {
    const lightColor = Color(colorPaletteGray(baseColor, 10 - i + 1))
    const retColor = lightColor
    let rgb = retColor.rgb().round().object()
    return rgb
}

const colorPaletteDark = (baseColor: string, i: number) => {
    const lightColor = Color(colorPalette(baseColor, 10 - i + 1))
    const originBaseColor = Color(baseColor)
    const s = originBaseColor.saturationv()

    //detect if gray
    if (s < 5) {
        return colorPaletteDarkGray(baseColor, i)
    }

    const originBaseHue = originBaseColor.hue()
    const originBaseSaturation = originBaseColor.saturationv()
    const _baseColor: Color = Color({
        h: originBaseColor.hue(),
        s: getNewSaturation(6),
        v: originBaseColor.value(),
    })

    const baseSaturation = _baseColor.saturationv()
    const step = Math.ceil((baseSaturation - 9) / 4)
    const step1to5 = Math.ceil((100 - baseSaturation) / 5)

    function getNewSaturation(_index: number) {
        if (_index < 6) {
            return baseSaturation + (6 - _index) * step1to5
        }
        if (_index === 6) {
            if (originBaseHue >= 0 && originBaseHue < 50) {
                return originBaseSaturation - 15
            }
            if (originBaseHue >= 50 && originBaseHue < 191) {
                return originBaseSaturation - 20
            }
            if (originBaseHue >= 191 && originBaseHue <= 360) {
                return originBaseSaturation - 15
            }
        }
        return baseSaturation - step * (_index - 6)
    }

    const retColor = Color({
        h: lightColor.hue(),
        s: getNewSaturation(i),
        v: lightColor.value(),
    })

    let rgb = retColor.rgb().round().object()
    return rgb
}