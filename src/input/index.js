import React from "react"
import PropTypes from "prop-types";

const Input = (props) => {

    const {addon, style, className, prefixClass, size, startIcon, endIcon, type, ...rest} = props;
    const classSize = size ? " " + prefixClass + "-" + size : ""
    const hasStartIcon = startIcon ? " " + prefixClass+ "-has-start-icon" : ""
    const hasEndIcon = endIcon ? " " + prefixClass+ "-has-end-icon" : ""
    const typeString = (type && type === "text" )? "text" : "password";
    let classes = prefixClass + hasStartIcon + hasEndIcon;
    if (className) {
        classes += " " + className;
    }
    
    return <span className={prefixClass + "-root" + classSize}>
        {startIcon?<span className={prefixClass+"-start-icon"}>{startIcon}</span>:null}
        <input 
        className={classes}
        {...rest}     
        type={typeString} 
        />
        {endIcon?<span className={prefixClass+"-end-icon"}>{endIcon}</span>:null}
    </span>
}

Input.propTypes = {
    type: PropTypes.oneOf(['text','password']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
};

Input.defaultProps = {
    prefixClass: "teatak-input",
    type: "text",
};

export default Input