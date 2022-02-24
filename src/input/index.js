import React, { useContext } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import FormContext from "../formcontext"

const Input = (props) => {

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

    const handleChange = (e, newValue) => {
        if (onChange) {
            onChange(e, newValue)
        }
    }
    return <span className={classNamesRoot} style={style}>
        {startIcon ? <span className={prefixClass + "-start-icon"}>{startIcon}</span> : null}
        <input
            className={classNames}
            style={style}
            type={typeString}
            onChange={(e) => {
                handleChange(e, e.target.value)
            }}
            disabled={disabled}
            {...rest}
        />
        {endIcon ? <span className={prefixClass + "-end-icon"}>{endIcon}</span> : null}
    </span>
}

Input.propTypes = {
    type: PropTypes.oneOf(['text', 'password']),
    size: PropTypes.oneOf(['large', 'medium', 'small', 'mini']),
}

Input.defaultProps = {
    prefixClass: "tui-input",
    type: "text",
    disabled: false,
}

export default Input