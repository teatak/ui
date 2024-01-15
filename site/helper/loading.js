import { useEffect, useRef } from "react";
import NProgress from "nprogress"

const useComponentWillMount = (func) => {
    const willMount = useRef(true)
    if (willMount.current) func()
    willMount.current = false
}
const useComponentDidMount = func => useEffect(func, []);

const Progress = () => {
    useComponentWillMount(() => {
        NProgress.set(0.3);
        NProgress.start()
    });
    useComponentDidMount(() => {
        return () => {
            //unmount
            NProgress.done();
            NProgress.remove();
        }
    });
    return null
}

export { Progress }