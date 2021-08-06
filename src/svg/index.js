import React from "react"

const Svg = (props) => {

    const {className, viewBox, prefixClass, ...rest} = props;

    let classes = prefixClass 

    if (className) {
        classes += " " + className;
    }

    return <svg className={classes} viewBox={viewBox?viewBox:"0 0 24 24"} {...rest}>
        {props.children}
    </svg>
}

Svg.defaultProps = {
    prefixClass: "tui-icon",
};

export default Svg 