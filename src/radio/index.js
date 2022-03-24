import React, { useEffect, forwardRef, useContext } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useMergeState } from "../util"
import { isFunction } from "../util/is"
import Group, { RadioGroupContext } from "./group"

const Radio = forwardRef((props, ref) => {
    const context = useContext(RadioGroupContext);
    const mergeProps = { ...props };
    if (context.isGroup) {
        mergeProps.checked = context.value == props.value;
        mergeProps.disabled = !!(context.disabled || props.disabled);
    }

    const { style, className, prefixClass, value, disabled, onChange, group, children, ...rest } = mergeProps

    const [checked, setChecked] = useMergeState(false, {
        value: mergeProps.checked,
        defaultValue: mergeProps.defaultChecked,
    })

    // useEffect(() => {
    //     if (value) {
    //         context.registerValue(value);
    //     }
    //     return () => {
    //         if (value) {
    //             context.unRegisterValue(value);
    //         }
    //     };
    // }, [value]);

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-disabled`]: disabled,
            [`${prefixClass}-checked`]: checked,
        },
        className,
    )

    const handleChange = (e) => {
        setChecked(e.target.checked)
        if (context.isGroup) {
            context.onChange && context.onChange(props.value, e.target.checked, e);
        }
        onChange && onChange(e.target.checked)
    }

    return <label className={classNames} style={style}>
        <input
            value={value}
            disabled={!!disabled}
            ref={ref}
            checked={!!checked}
            onChange={handleChange}
            onClick={(e) => e.stopPropagation()}
            type="radio"
        />
        {isFunction(children) ? (
            children(checked)
        ) : (
            <>
                <span className={`${prefixClass}-inner`}></span>
                {children && <span className={`${prefixClass}-text`}>{children}</span>}
            </>
        )}
    </label>
})

Radio.propTypes = {
}

Radio.defaultProps = {
    prefixClass: 'tui-radio',
}

Radio.Group = Group

export default Radio