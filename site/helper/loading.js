import React, { useEffect, useRef } from "react";
import NProgress from "nprogress"
import Spinner from "../../src/svg/icons/Spinner";

const useComponentWillMount = (func) => {
    const willMount = useRef(true)
    if (willMount.current) func()
    willMount.current = false
}
const useComponentDidMount = func => useEffect(func, []);

const Progress = () => {
    useComponentWillMount(() => {
        NProgress.set(0.3);
    });
    useComponentDidMount(() => {
        return () => {
            NProgress.done();
            NProgress.remove();
        }
    });
    return null
}

const Loading = () => <div className="content-page"><Spinner /></div>

export { Progress, Loading }