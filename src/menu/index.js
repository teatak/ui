import React from 'react'
import PropTypes from "prop-types";

const menu = (props) => {
    const {style, type, className, prefixClass, ...rest} = props;
    const classType = type? " " + prefixClass + "-" + type : ""
    const classNameString = className? className : ""

    const classes = prefixClass + classType + classNameString;

    return <ul className={classes} {...rest} style={style}>{props.children}</ul>
} 

menu.propTypes = {
    type: PropTypes.oneOf(['vertical','horizontal']),
};

menu.defaultProps = {
    prefixClass: "tui-menu",
    type: "horizontal",
};

const item = (props) => {
    const {style, className, prefixClass, ...rest} = props;
    const classNameString = className? className : ""

    const classes = prefixClass + classNameString;

    return <li className={classes} {...rest} style={style}>{props.children}</li>
}

item.defaultProps = {
    prefixClass: "tui-menu-item",
};

menu.Item = item
export default menu