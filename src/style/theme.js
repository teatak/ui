import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import { globalStyle, baseSetting } from './base'

const storageKey = 'color-scheme'
let loaded = false

// 获取用户倾向样式
const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
        return localStorage.getItem(storageKey)
    else {
        return "auto"
    }
}

// 应用用户倾向样式
const reflectPreference = () => {
    let theme = getColorPreference()
    document.firstElementChild
        .setAttribute('data-tui-color-scheme', theme)
}

// 提前加载全局样式，在DOM渲染之前加载
export const prerenderGlobalStyle = (theme) => {
    if (!loaded) {
        if (theme) {
            Object.assign(baseSetting.light, theme.light)
            Object.assign(baseSetting.dark, theme.dark)
        }
        ReactDOM.createRoot(document.createElement("div")).render(
            <Global styles={globalStyle()} />
        )
        reflectPreference()
        loaded = true
    }
}
// 全局样式
export const GlobalStyle = (props) => {
    const { theme } = props
    if (theme) {
        Object.assign(baseSetting.light, theme.light)
        Object.assign(baseSetting.dark, theme.dark)
    }
    reflectPreference()
    loaded = true
    return <Global styles={global()} />
}
