import React from "react"

const Row = (props) => {

    const {style, className, prefixClass, ...rest} = props;

    let classes = prefixClass 

    if (className) {
        classes += " " + className;
    }

    let flexStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px"
    }

    return <div className={classes} style={{...flexStyle, ...style}}>
        {props.children}
    </div>
}

Row.defaultProps = {
    prefixClass: "tui-row",
};

export default Row