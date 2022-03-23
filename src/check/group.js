import React, { useCallback, forwardRef, useState, createContext } from "react"
import Check from "./index"
import classnames from "classnames"
import { useMergeState } from "../util"
import { isArray, isObject } from "../util/is"

export const CheckGroupContext = createContext({
    disabled: false,
    isCheckGroup: false,
    checkGroupValue: [],
    onGroupChange: () => { },
    registerValue: () => { },
    unRegisterValue: () => { },
});

const Group = (props) => {
    const [value, setValue] = useMergeState([], {
        defaultValue: 'defaultValue' in props ? props.defaultValue || [] : undefined,
        value: 'value' in props ? props.value || [] : undefined,
    });
    const [allOptionValues, setAllOptionValues] = useState([]);
    const { disabled, options, style, className, error, children, prefixClass, direction = 'horizontal' } = props;

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
            const newVal = value.slice();
            if (checked) {
                newVal.push(optionValue);
            } else {
                newVal.splice(value.indexOf(optionValue), 1);
            }

            setValue(newVal);
            props.onChange &&
                props.onChange(
                    newVal.filter((v) => allOptionValues.indexOf(v) > -1),
                    e
                );
        },
        [value, props.onChange, allOptionValues]
    );
    return (
        <span className={classNames} style={style}>
            <CheckGroupContext.Provider
                value={{
                    isCheckGroup: true,
                    checkGroupValue: value,
                    onGroupChange: onChange,
                    disabled,
                    registerValue: (value) => {
                        setAllOptionValues((allOptionValues) => {
                            return Array.from(new Set([...allOptionValues, value]));
                        });
                    },
                    unRegisterValue: (value) => {
                        setAllOptionValues((allOptionValues) => {
                            return allOptionValues.filter((x) => x !== value);
                        });
                    },
                }}
            >
                {isArray(options)
                    ? options.map((option) => {
                        const label = isObject(option) ? option.label : option;
                        const checkValue = isObject(option) ? option.value : option;

                        return (
                            <Check
                                disabled={disabled || (isObject(option) && option.disabled)}
                                key={checkValue}
                                value={checkValue}
                            >
                                {label}
                            </Check>
                        );
                    })
                    : children}
            </CheckGroupContext.Provider>
        </span>
    );
}

Group.propTypes = {
}

Group.defaultProps = {
    prefixClass: 'tui-check',
}

export default Group