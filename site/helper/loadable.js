import React, { useEffect, useRef } from "react";
import loadable from "@loadable/component";
import Spinner from "../components/spinner";
import NProgress from "nprogress"

const useComponentWillMount = (func) => {
    const willMount = useRef(true)
    if (willMount.current) func()
    willMount.current = false
}
const useComponentDidMount = func => useEffect(func, []);

export const Loading = () => {
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
export default (loader) => {
    return loadable(() => loader,{
        fallback: <Loading />
    })
}
