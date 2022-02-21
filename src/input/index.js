import React, { useState } from "react"
import PropTypes from "prop-types";
import classnames from 'classnames'

const Input = (props) => {

    const { addon, style, disabled, className, prefixClass, size, startIcon, endIcon, type, ...rest } = props;
    const typeString = (type && type === "text") ? "text" : "password";

    const classNamesRoot = classnames(
        `${prefixClass}-root`,
        `${prefixClass}-size-${size}`,
        {
            [`disabled`]: disabled
        }
    )

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-has-start-icon`]: startIcon,
            [`${prefixClass}--has-end-icon`]: endIcon,
        },
        className,
    )

    const handleChange = (newValue, e) => {
        if (props.onChange) {
            props.onChange(newValue, e)
        }
    }
    return <span className={classNamesRoot} style={style}>
        {startIcon ? <span className={prefixClass + "-start-icon"}>{startIcon}</span> : null}
        <input
            className={classNames}
            style={style}
            type={typeString}
            onChange={(e) => {
                handleChange(e.target.value, e)
            }}
            disabled={disabled}
            {...rest}
        />
        {endIcon ? <span className={prefixClass + "-end-icon"}>{endIcon}</span> : null}
    </span>
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password']),
    size: PropTypes.oneOf(['large', 'medium', 'small']),
};

Input.defaultProps = {
    prefixClass: "tui-input",
    type: "text",
    size: "medium",
    disabled: false,
};
export default Input