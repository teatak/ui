import React from "react";
import { baseTheme, generateColor } from '../style'

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