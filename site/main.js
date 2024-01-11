import React from 'react'
import ReactDOM from 'react-dom/client'
import { prerenderGlobalStyle, ConfigProvider, Button } from '../src'
let theme = {
    dark: {
        colorPrimary: '#00b96b',
        borderRadius: 2,
        colorBgContainer: '#f6ffed',
        backGround: "#111"
    },
}
prerenderGlobalStyle(theme)

const Main = () => {
    return <ConfigProvider>
        <Button className="test">AAA</Button>
    </ConfigProvider>
}

window.onload = () => {
    const root = ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
}