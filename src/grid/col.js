import React from "react"

const Col = (props) => {

    const { style, className, prefixClass, gap, pull, push, offset, span, xs, sm, md, lg, xl, xxl, ...rest } = props

    let classes = prefixClass

    if (pull) {
        classes += " " + prefixClass + "-pull-" + pull
    }
    if (push) {
        classes += " " + prefixClass + "-push-" + push
    }
    if (offset) {
        classes += " " + prefixClass + "-offset-" + offset
    }
    if (span) {
        classes += " " + prefixClass + "-span-" + span
    }
    if (xs) {
        classes += " " + prefixClass + "-xs-" + xs
    }
    if (sm) {
        classes += " " + prefixClass + "-sm-" + sm
    }
    if (md) {
        classes += " " + prefixClass + "-md-" + md
    }
    if (lg) {
        classes += " " + prefixClass + "-lg-" + lg
    }
    if (xl) {
        classes += " " + prefixClass + "-xl-" + xl
    }
    if (xxl) {
        classes += " " + prefixClass + "-xxl-" + xxl
    }

    if (className) {
        classes += " " + className
    }

    let gapStyle = gap === 0 ? {} : {
        padding: "0 " + gap / 2 + "px"
    }

    return <div className={classes} style={{ ...gapStyle, ...style }}>
        {props.children}
    </div>
}

Col.defaultProps = {
    prefixClass: "tui-col",
}

export default Col