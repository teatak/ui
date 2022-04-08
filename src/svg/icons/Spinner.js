import React from 'react';
import Svg from "../index"
import classnames from "classnames"

const Spinner = (props) => {
    const { prefixClass, className, ...rest } = props
    const classNames = classnames(
        prefixClass,
        className,
    );

    return <Svg className={classNames} {...rest} viewBox="12 12 24 24">
        <circle cx="24" cy="24" r="10" fill="none" strokeWidth="2" strokeLinecap="round" />
    </Svg>
}

Spinner.defaultProps = {
    prefixClass: "tui-spinner",
};

export default Spinner