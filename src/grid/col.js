import React from "react"

const Col = (props) => {

    const {style, className, prefixClass, ...rest} = props;

    let classes = prefixClass 

    if (className) {
        classes += " " + className;
    }

    return <div className={classes} style={style}>      
        {props.children}
    </div>
}

Col.defaultProps = {
    prefixClass: "tui-col",
};

export default Col