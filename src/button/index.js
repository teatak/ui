/**
 * Created by yanggang on 2018/12/22.
 */


import React,{useState} from "react";
import PropTypes from "prop-types";

const  Button  = (props) => {

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
    let classes = prefixClass;
    if (className) {
        classes += " " + className;
    }
    if (size && size !== "default") {
        classes += " " + prefixClass + "-size-" + size;
    }
    if (type) {
        classes += " " + prefixClass + "-" + type;
    }
    if (color && color !== "default") {
        classes += " " + prefixClass + "-color-" + color;
    }
    if (rounded) {
        classes += " " + prefixClass + "-rounded";
    }
    if (clicked) {
        classes += " clicked";
    }
    return <button
        {...rest}
        onClick={handleClick}
        type={htmlType || 'button'}
        className={classes}
        style={style}>
            {startIcon?<span className="start-icon">{startIcon}</span>:null}
            {props.children}
            {endIcon?<span className="end-icon">{endIcon}</span>:null}
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
    prefixClass: "teatak-button",
    type: "default",
};

export default Button