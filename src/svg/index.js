import React from "react"
import classnames from "classnames"

const Svg = (props) => {
    const { className, viewBox, prefixClass, ...rest } = props;
    const classNames = classnames(
        prefixClass,
        className,
    );

    return <svg className={classNames} viewBox={viewBox ? viewBox : "0 0 24 24"} {...rest}>
        {props.children}
    </svg>
}

Svg.defaultProps = {
    prefixClass: "tui-icon",
};

export default Svg 