import React from "react"
import PropTypes from "prop-types";

const Input = (props) => {

    const {addon, style, className, prefixClass, size, startIcon, endIcon, type, ...rest} = props;
    const classSize = size ? " " + prefixClass + "-" + size : ""
    const hasStartIcon = startIcon ? " " + prefixClass+ "-has-start-icon" : ""
    const hasEndIcon = endIcon ? " " + prefixClass+ "-has-end-icon" : ""
    const typeString = (type && type === "text" )? "text" : "password";
    const disabled = props.disabled ? " disabled" : "";
    const classNameString = className? className : ""

    const classes = prefixClass + hasStartIcon + hasEndIcon + classNameString;
    
    const handelChange = (e) => {
        if(props.onChange) {
            props.onChange(e)
        }
    }
    return <span className={prefixClass + "-root" + classSize + disabled} style={style}>
        {startIcon?<span className={prefixClass+"-start-icon"}>{startIcon}</span>:null}
        <input 
        className={classes}
        style={style}
        type={typeString} 
        onChange={handelChange}
        {...rest}     
        />
        {endIcon?<span className={prefixClass+"-end-icon"}>{endIcon}</span>:null}
    </span>
}

Input.propTypes = {
    type: PropTypes.oneOf(['text','password']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
};

Input.defaultProps = {
    prefixClass: "tui-input",
    type: "text",
};
export default Input