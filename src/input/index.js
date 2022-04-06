import React, { useState, useContext, forwardRef } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import FormContext from "../form/form-context"

const Input = forwardRef((props, ref) => {

    const { size: ctxSize } = useContext(FormContext);

    const { addon, style, disabled, className, prefixClass, size, startIcon, endIcon, type, onChange, ...rest } = props

    const typeString = (type && type === "text") ? "text" : "password"

    const classNamesRoot = classnames(
        `${prefixClass}-root`,
        `${prefixClass}-size-${size || ctxSize || "medium"}`,
        {
            [`disabled`]: disabled
        }
    )

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-has-start-icon`]: startIcon,
            [`${prefixClass}-has-end-icon`]: endIcon,
        },
        className,
    )

    const handleChange = (e) => {
        if (onChange) {
            onChange(e.target.value)
        }
    }
    return <span className={classNamesRoot} style={style}>
        {startIcon ? <span className={prefixClass + "-start-icon"}>{startIcon}</span> : null}
        <input
            className={classNames}
            style={style}
            type={typeString}
            ref={ref}
            {...rest}
            // value={value}
            onChange={(e) => {
                handleChange(e)
            }}
            disabled={disabled}
        />
        {endIcon ? <span className={prefixClass + "-end-icon"}>{endIcon}</span> : null}
    </span>
})

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password']),
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny']),
}

Input.defaultProps = {
    prefixClass: "tui-input",
    type: "text",
}

export default Input