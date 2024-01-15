import ReactDOM from 'react-dom/client'
import { Global } from '@emotion/react'
import { globalStyle, mergeBaseStyle } from './style'

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
export const prerenderGlobalStyle = (style) => {
    if (!loaded) {
        if (style) {
            mergeBaseStyle(style)
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
    if (!loaded) {
        const { style } = props
        if (style) {
            mergeBaseStyle(style)
        }
        reflectPreference()
        loaded = true
        return <Global styles={globalStyle()} />
    }
}
