/**
 * Created by yanggang on 2018/12/22.
 */


import React,{useState} from "react";
import PropTypes from "prop-types";

const Button = (props) => {

    const [clicked,setClicked] = useState(false);

    const handleClick = (e) => {
        setClicked(true);
        setTimeout(() => {
            setClicked(false);
        },200);
        if(props.onClick) {
            props.onClick(e);
        }
    };
    const {style, htmlType, type, size, className, prefixClass, color, startIcon, endIcon, rounded, ...rest} = props;
    
    const classSize = (size && size !== "default") ? " " + prefixClass + "-size-" + size : "";
    const classType = type? " " + prefixClass + "-" + type : "";
    const classColor = (color && color !== "default")? " " + prefixClass + "-color-" + color : "";
    const classRounded = rounded? " " + prefixClass + "-rounded" : "";
    const classClicked = clicked? " clicked":""
    const classNameString = className? className : ""

    const classes = prefixClass + classSize + classType + classColor + classRounded + classClicked + classNameString;

    return <button
    {...rest}
    onClick={handleClick}
    type={htmlType || 'button'}
    className={classes}
    style={style}>
        {startIcon?<span className={prefixClass+"-start-icon"}>{startIcon}</span>:null}
        {props.children}
        {endIcon?<span className={prefixClass+"-end-icon"}>{endIcon}</span>:null}
    </button>
    
}

Button.propTypes = {
    type: PropTypes.oneOf(['filled','outlined','default']),
    rounded: PropTypes.bool,
    color: PropTypes.oneOf(['primary','default','danger']),
    size: PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']),
};

Button.defaultProps = {
    prefixClass: "tui-button",
    type: "default",
};

export default Button