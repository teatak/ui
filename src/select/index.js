import React, { forwardRef, useContext, useRef, useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import FormContext from "../formcontext"
import Popup from "../popup"
import "../popup/style"
// import Portal from '../util/portal';

const Option = forwardRef((props, ref) => {
    const { children, ...rest } = props
    return <li {...rest}>{children}</li>
})

const Select = forwardRef((props, ref) => {

    const selectRef = ref || useRef()

    const { size: ctxSize } = useContext(FormContext);
    const { style, disabled, className, prefixClass, size, onChange, ...rest } = props
    const [value, setValue] = useState()
    const [focused, setFocused] = useState(false)
    const [portalVisible, setPortalVisible] = useState(false)

    console.log(focused)
    const classNames = classnames(
        `${prefixClass}`,
        `${prefixClass}-size-${size || ctxSize || "medium"}`,
        {
            [`${prefixClass}-open`]: portalVisible,
            [`${prefixClass}-focused`]: focused,
            [`disabled`]: disabled
        },
        className
    )

    const handleChange = (e, newValue) => {
        if (onChange) {
            onChange(e, newValue)
        }
    }

    const toggle = () => {
        setPortalVisible(!portalVisible)
    }

    const close = () => {
        setFocused(false)
        setPortalVisible(false)
    }

    const down = () => {
    }

    const up = () => {
    }

    const options = <ul className={`${prefixClass}-options`}>
        {props.children}
    </ul>

    return <Popup
        content={options}
        visible={portalVisible}
        onChange={(v) => {
            setPortalVisible(v)
        }}
    >
        <span
            tabIndex={0}
            className={classNames}
            {...rest}
            ref={selectRef}
            onKeyDown={(e) => {
                console.log(e.key)
                switch (e.key) {
                    case "Enter":
                        toggle()
                        break
                    case "Escape":
                    case "Tab":
                        close()
                        break
                    case "ArrowDown":
                        //down
                        down()
                        e.stopPropagation()
                        e.preventDefault()
                        break
                    case "ArrowUp":
                        //up
                        up()
                        e.stopPropagation()
                        e.preventDefault()
                        break
                }
            }}
            onFocus={(e) => {
                setFocused(true)
            }}
            onBlur={(e) => {
                //e.preventDefault()
                //setFocused(false)
            }}
            onChange={(e) => {
                handleChange(e, e.target.value)
            }}
            disabled={disabled}
        >
            {value}
            <div className={`${prefixClass}-suffix`}>
                <i className={`${prefixClass}-arrow`} />
            </div>
        </span>
    </Popup>

})

Select.propTypes = {
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny']), //大小
}

Select.defaultProps = {
    prefixClass: 'tui-select',
}

Select.Option = Option

export default Select