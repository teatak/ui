import React from "react"
import PropTypes from "prop-types";

const Input = (props) => {

    const {addon, style, className, prefixClass, size, ...rest} = props;
    let classes = prefixClass;
    if (className) {
        classes += " " + className;
    }
    return <input 
    {...rest}     
    className={classes}
    type="text" 
    />
}  

Input.defaultProps = {
    prefixClass: "teatak-input",
    type: "default",
};

export default Input