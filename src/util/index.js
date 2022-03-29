import React, { useRef, useState, useEffect } from "react";

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    }, [value]);
    return ref.current;
}

const useMergeState = (defaultStateValue, props) => {
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

export { usePrevious, useMergeState } 