import React from 'react'
import PropTypes from "prop-types";

const Menu = (props) => {
    const { style, type, className, prefixClass, ...rest } = props;
    const classType = type ? " " + prefixClass + "-" + type : ""
    const classNameString = className ? className : ""

    const classes = prefixClass + classType + classNameString;

    return <ul className={classes} {...rest} style={style}>{props.children}</ul>
}

Menu.propTypes = {
    type: PropTypes.oneOf(['vertical', 'horizontal']),
};

Menu.defaultProps = {
    prefixClass: "tui-menu",
    type: "horizontal",
};

const Item = (props) => {
    const { style, className, prefixClass, ...rest } = props;
    const classNameString = className ? className : ""

    const classes = prefixClass + classNameString;

    return <li className={classes} {...rest} style={style}>{props.children}</li>
}

Item.defaultProps = {
    prefixClass: "tui-menu-item",
};

Menu.Item = Item
export default Menu