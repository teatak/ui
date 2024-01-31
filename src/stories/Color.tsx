import React from "react";
import { baseStyle, generateColor, prerenderGlobalStyle } from '../style'

prerenderGlobalStyle()

export default (props: { dark: boolean } = { dark: false }) => {
    return <div style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.keys(baseStyle.base).map((k, i) => {
            let v = baseStyle.base[k]
            let rgbs = generateColor(v, { dark: props.dark })
            return <div key={i} style={{ width: "25%" }}>
                {Object.keys(rgbs).map((_k, _i) => {
                    let _v = rgbs[_k]
                    return <div key={_i} style={{ backgroundColor: `rgb(${_v})` }}>rgb({_v})</div>
                })}
            </div>
        })}
    </div>
}