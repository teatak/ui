import { composeStories } from "@storybook/react/*";
import { useRef, useState, useEffect } from "react";

export type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
}

export type Partial2Level<T> = {
    [K in keyof T]?: T[K] extends Record<any, any>
    ? {
        [J in keyof T[K]]?: T[K][J];
    }
    : T[K];
};

export type Partial3Level<T> = {
    [K in keyof T]?: {
        [J in keyof T[K]]?: T[K][J] extends Record<any, any>
        ? {
            [P in keyof T[K][J]]?: T[K][J][P];
        }
        : T[K][J];
    };
};

export const isObject = (item: any) => {
    return (!!item && typeof item === 'object' && !Array.isArray(item))
}

export const merge: any = (target: any, ...sources: any) => {
    let _target = { ...target }
    if (!sources.length) return _target
    for (const source of sources) {
        if (isObject(_target) && isObject(source)) {
            for (const key in source) {
                if (isObject(source[key])) {
                    _target[key] = merge(_target[key], source[key])
                } else {
                    _target[key] = source[key]
                }
            }
        }
    }
    return _target
}

const definedProps = (obj: any) => Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => v !== undefined)
);

export const mergeProps: any = (contexts: any, props: any, defaultValues: any) => {
    let target = { ...contexts }
    if (isObject(target) && isObject(props)) {
        Object.assign(target, definedProps(props));
    }
    if (defaultValues) {
        for (const key in defaultValues) {
            if (target[key] === undefined) {
                target[key] = defaultValues[key]
            }
        }
    }
    return target
}

export const useMergeState = (defaultStateValue: any, props: { defaultValue: any, value: any }) => {
    const { defaultValue, value } = props || {};
    const mounted = useRef(false);

    const [stateValue, setStateValue] = useState(
        value !== undefined ? value : defaultValue !== undefined ? defaultValue : defaultStateValue
    );

    useEffect(() => {
        if (!mounted.current) {
            //fist mounted
            mounted.current = true
            return
        }

        if (value === undefined) {
            setStateValue(value);
        }
    }, [value]);

    const mergedValue = (value === undefined) ? stateValue : value;

    return [mergedValue, setStateValue, stateValue];
}
