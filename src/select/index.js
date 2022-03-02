import React, { forwardRef, useContext, useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import FormContext from "../formcontext"

const Option = forwardRef((props, ref) => {
    const { children, ...rest } = props
    return <option {...rest}>{children}</option>
})

const Select = forwardRef((props, ref) => {

    const { size: ctxSize } = useContext(FormContext);
    const { style, disabled, className, prefixClass, size, onChange, ...rest } = props

    const [focused, setFocused] = useState(props.focused)

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-size-${size || ctxSize || "medium"}`,
        {
            [`${prefixClass}-focused`]: focused,
            [`disabled`]: disabled,
        },
        className,
    )

    const handleChange = (e, newValue) => {
        // setValue(newValue)
        if (onChange) {
            onChange(e, newValue)
        }
    }

    return <div
        tabIndex={0}
        className={classNames}
        ref={ref}
        {...rest}
        // value={value}
        onKeyPress={(e) => {
            console.log(e)
        }}
        onFocus={(e) => {
            setFocused(true)
        }}
        onBlur={(e) => {
            setFocused(false)
        }}
        onChange={(e) => {
            handleChange(e, e.target.value)
        }}
        disabled={disabled}
    >
        {props.children}
    </div>
})

Select.propTypes = {
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny']), //大小
}

Select.defaultProps = {
    prefixClass: 'tui-select',
}

Select.Option = Option

export default Select