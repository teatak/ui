import { useRef, useState, useEffect } from 'react';

const isObject = (item) => {
    return (!!item && typeof item === 'object' && !Array.isArray(item));
};
const merge = (target, ...sources) => {
    let _target = { ...target };
    if (!sources.length)
        return _target;
    for (const source of sources) {
        if (isObject(_target) && isObject(source)) {
            for (const key in source) {
                if (isObject(source[key])) {
                    _target[key] = merge(_target[key], source[key]);
                }
                else {
                    _target[key] = source[key];
                }
            }
        }
    }
    return _target;
};
const definedProps = (obj) => Object.fromEntries(Object.entries(obj).filter(([k, v]) => v !== undefined));
const mergeProps = (contexts, props, defaultValues) => {
    let target = { ...contexts };
    if (isObject(target) && isObject(props)) {
        Object.assign(target, definedProps(props));
    }
    if (defaultValues) {
        for (const key in defaultValues) {
            if (target[key] === undefined) {
                target[key] = defaultValues[key];
            }
        }
    }
    return target;
};
const useMergeState = (defaultStateValue, props) => {
    const { defaultValue, value } = props || {};
    const mounted = useRef(false);
    const [stateValue, setStateValue] = useState(value !== undefined ? value : defaultValue !== undefined ? defaultValue : defaultStateValue);
    useEffect(() => {
        if (!mounted.current) {
            //fist mounted
            mounted.current = true;
            return;
        }
        if (value === undefined) {
            setStateValue(value);
        }
    }, [value]);
    const mergedValue = (value === undefined) ? stateValue : value;
    return [mergedValue, setStateValue, stateValue];
};

export { isObject, merge, mergeProps, useMergeState };
//# sourceMappingURL=common.js.map
