'use strict';

var Color = require('color');
var bezier = require('./bezier.js');
var palette = require('../types/palette.js');

//根据基础颜色生成颜色
const generateColor = (baseColor, option = { dark: false }) => {
    // import { Hct, argbFromHex, rgbaFromArgb, TonalPalette, Rgba } from "@material/material-color-utilities";
    // let hex = ""
    // if (baseColor.indexOf('rgb') > -1) {
    //     const rgb = baseColor.split("(")[1].split(")")[0].split(",");
    //     hex = rgb.map(function (x) {
    //         x = parseInt(x).toString(16);
    //         return (x.length == 1) ? "0" + x : x;
    //     }).join("")
    // }
    // if (baseColor.indexOf('#') > -1) {
    //     hex = baseColor
    // }
    // const argb = argbFromHex(hex)
    // const color = TonalPalette.fromInt(argb)
    // DefaultColorTones.map((k) => {
    //     let rgba: Rgba
    //     if (option.dark) {
    //         rgba = rgbaFromArgb(color.tone(k))
    //     } else {
    //         rgba = rgbaFromArgb(color.tone(100 - k))
    //     }
    //     let str = `${rgba.r}, ${rgba.g}, ${rgba.b}`
    //     lines[k as DefaultColorTone] = str
    // })
    // return lines
    let lines = {};
    palette.DefaultColorTones.map((k) => {
        let rgba = null;
        if (option.dark) {
            rgba = colorPaletteDark(baseColor, k);
        }
        else {
            rgba = colorPalette(baseColor, k);
        }
        let str = `${rgba.r}, ${rgba.g}, ${rgba.b}`;
        lines[k] = str;
    });
    return lines;
};
const sBezier = bezier(); //线性
const vBezier = bezier(); //线性
const colorPalette = (baseColor, tone) => {
    let color = Color(baseColor);
    const h = color.hue();
    const s = color.saturationv();
    const v = color.value();
    // 处理 tone
    tone = tone < 0 ? 0 : tone;
    tone = tone > 100 ? 100 : tone;
    // 根据饱和度定义最大最小值
    let hueStep = 2;
    let minSaturationv = 0;
    let maxSaturationv = 100;
    let minValue = 0;
    let maxValue = 100;
    if (s < 10) {
        //<10
        minSaturationv = s;
        maxSaturationv = s;
        minValue = 10;
        maxValue = 98;
    }
    const isLight = tone < 50;
    let i = Math.abs(tone - 50) / 10;
    function getNewHue() {
        let hue;
        if (h >= 60 && h <= 240) {
            hue = isLight ? h - hueStep * i : h + hueStep * i;
        }
        else {
            hue = isLight ? h + hueStep * i : h - hueStep * i;
        }
        if (hue < 0) {
            hue += 360;
        }
        else if (hue >= 360) {
            hue -= 360;
        }
        return Math.round(hue);
    }
    function getNewSaturation() {
        let newSaturation;
        if (isLight) {
            newSaturation = s <= minSaturationv ? s : s - (s - minSaturationv) * sBezier(i * 1 / 5);
        }
        else {
            newSaturation = s >= maxSaturationv ? maxSaturationv : s + (maxSaturationv - s) * sBezier(i * 1 / 5);
        }
        return newSaturation;
    }
    function getNewValue() {
        let newValue;
        if (isLight) {
            newValue = v >= maxValue ? maxValue : v + (maxValue - v) * vBezier(i * 1 / 5);
        }
        else {
            newValue = v <= minValue ? v : v - (v - minValue) * vBezier(i * 1 / 5);
        }
        return newValue;
    }
    let retColor = tone === 50
        ? color :
        Color({
            h: getNewHue(),
            s: getNewSaturation(),
            v: getNewValue(),
        });
    let rgb = retColor.rgb().round().object();
    return rgb;
};
const colorPaletteDark = (baseColor, tone) => {
    let color = Color(baseColor);
    let h = color.hue();
    let s = color.saturationv();
    let v = color.value();
    // 处理 tone
    tone = tone < 0 ? 0 : tone;
    tone = tone > 100 ? 100 : tone;
    // 根据饱和度定义最大最小值
    let hueStep = 2;
    let minSaturationv = 30;
    let maxSaturationv = 90;
    let minValue = 25;
    let maxValue = 100;
    if (s < 10) {
        //<10
        minSaturationv = s;
        maxSaturationv = s;
        minValue = 10;
        maxValue = 98;
    }
    if (s > maxSaturationv) {
        s = maxSaturationv;
    }
    else if (s < minSaturationv) {
        s = minSaturationv;
    }
    if (v > maxValue) {
        v = maxValue;
    }
    else if (v < minValue) {
        v = minValue;
    }
    const isLight = tone > 50;
    let i = Math.abs(tone - 50) / 10;
    function getNewHue() {
        let hue;
        if (h >= 60 && h <= 240) {
            hue = isLight ? h - hueStep * i : h + hueStep * i;
        }
        else {
            hue = isLight ? h + hueStep * i : h - hueStep * i;
        }
        if (hue < 0) {
            hue += 360;
        }
        else if (hue >= 360) {
            hue -= 360;
        }
        return Math.round(hue);
    }
    function getNewSaturation() {
        let newSaturation;
        if (isLight) {
            newSaturation = s <= minSaturationv ? s : s - (s - minSaturationv) * sBezier(i * 1 / 5);
        }
        else {
            newSaturation = s >= maxSaturationv ? maxSaturationv : s + (maxSaturationv - s) * sBezier(i * 1 / 5);
        }
        return newSaturation;
    }
    function getNewValue() {
        let newValue;
        if (isLight) {
            newValue = v >= maxValue ? maxValue : v + (maxValue - v) * vBezier(i * 1 / 5);
        }
        else {
            newValue = v <= minValue ? v : v - (v - minValue) * vBezier(i * 1 / 5);
        }
        return newValue;
    }
    let retColor = tone === 50
        ? Color({
            h,
            s,
            v,
        }) :
        Color({
            h: getNewHue(),
            s: getNewSaturation(),
            v: getNewValue(),
        });
    let rgb = retColor.rgb().round().object();
    return rgb;
};

exports.generateColor = generateColor;
//# sourceMappingURL=index.js.map
