import React, { useEffect, forwardRef, useContext } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { useMergeState } from "../util"
import { isFunction } from "../util/is"
import Group, { CheckGroupContext } from "./group"

const Check = forwardRef((props, ref) => {
    const context = useContext(CheckGroupContext);
    const mergeProps = { ...props };
    if (context.isCheckGroup) {
        mergeProps.checked = context.checkGroupValue.indexOf(props.value) !== -1;
        mergeProps.disabled = 'disabled' in props ? props.disabled : context.disabled;
    }

    const { style, className, prefixClass, value, disabled, onChange, group, indeterminate, children, ...rest } = mergeProps

    const [checked, setChecked] = useMergeState(false, {
        value: mergeProps.checked,
        defaultValue: mergeProps.defaultChecked,
    })

    useEffect(() => {
        context.registerValue(value);
        return () => {
            context.unRegisterValue(value);
        };
    }, [value]);

    const classNames = classnames(
        prefixClass,
        {
            [`${prefixClass}-disabled`]: disabled,
            [`${prefixClass}-indeterminate`]: checked ? false : indeterminate,
            [`${prefixClass}-checked`]: checked,
        },
        className,
    )

    const handleChange = (e) => {
        setChecked(e.target.checked)
        if (context.isCheckGroup) {
            context.onGroupChange && context.onGroupChange(props.value, e.target.checked, e);
        }
        onChange && onChange(e.target.checked)
    }

    return <label className={classNames}>
        <input
            value={value}
            disabled={!!disabled}
            ref={ref}
            checked={!!checked}
            onChange={handleChange}
            onClick={(e) => e.stopPropagation()}
            type="checkbox"
        />
        {isFunction(children) ? (
            children(checked, indeterminate)
        ) : (
            <>
                <span className={`${prefixClass}-inner`}></span>
                {children && <span className={`${prefixClass}-text`}>{children}</span>}
            </>
        )}
    </label>
})

Check.propTypes = {
    group: PropTypes.bool
}

Check.defaultProps = {
    prefixClass: 'tui-check',
    group: false,
}

Check.Group = Group

export default Check