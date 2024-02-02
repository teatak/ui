import React from "react";
import { baseTheme, generateColor, prerenderGlobalStyle } from '../style'

let theme = {
    borderRadius: {
        none: 0,
        small: "4px",
        medium: "6px",
        large: "10px",
        circle: "50%",
    },
}

prerenderGlobalStyle(theme)

export default ({ dark = false }) => {
    return <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.keys(baseTheme.base).map((k, i) => {
            let v = baseTheme.base[k]
            let rgbs = generateColor(v, { dark: dark })
            return <div key={i} style={{ width: "25%" }}>
                {Object.keys(rgbs).map((_k, _i) => {
                    let _v = rgbs[_k]
                    return <div key={_i} style={{ backgroundColor: `rgb(${_v})` }}>rgb({_v})</div>
                })}
            </div>
        })}
    </div>
}