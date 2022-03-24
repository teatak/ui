import React, { useCallback, forwardRef, useState, createContext } from "react"
import Radio from "./index"
import classnames from "classnames"
import { useMergeState } from "../util"
import { isArray, isObject } from "../util/is"

export const RadioGroupContext = createContext({
    disabled: false,
    isGroup: false,
    value: undefined,
    onChange: () => { },
});

const Group = (props) => {
    const [value, setValue] = useMergeState([], {
        defaultValue: 'defaultValue' in props ? props.defaultValue : undefined,
        value: 'value' in props ? props.value : undefined,
    });
    const [allOptionValues, setAllOptionValues] = useState([]);
    const { disabled, options, style, className, error, children, prefixClass, checkAll, direction = 'horizontal' } = props;

    const classNames = classnames(
        `${prefixClass}-group`,
        {
            [`${prefixClass}-group-is-error`]: error,
            [`${prefixClass}-group-direction-${direction}`]: direction,
        },
        className
    );
    const onChange = useCallback(
        (optionValue, checked, e) => {
            if (checked) {
                setValue(optionValue);
                props.onChange &&
                    props.onChange(
                        optionValue,
                        e
                    );
            }
        },
        [value, props.onChange, allOptionValues]
    );

    return (
        <span className={classNames} style={style}>
            <RadioGroupContext.Provider
                value={{
                    isGroup: true,
                    value: value,
                    onChange: onChange,
                    disabled,
                }}
            >
                {isArray(options)
                    ? options.map((option) => {
                        const label = isObject(option) ? option.label : option;
                        const checkValue = isObject(option) ? option.value : option;

                        return (
                            <Radio
                                disabled={disabled || (isObject(option) && option.disabled)}
                                key={checkValue}
                                value={checkValue}
                            >
                                {label}
                            </Radio>
                        );
                    })
                    : children}
            </RadioGroupContext.Provider>
        </span>
    );
}

Group.propTypes = {
}

Group.defaultProps = {
    prefixClass: 'tui-radio',
}

export default Group