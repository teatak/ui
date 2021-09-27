import React,{useRef, useState, useEffect} from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames'

const content = (props) => {
    const {prefixClass, dividers, children} = props;
    let dividersClass = ""
    if(dividers) {
        dividersClass = `${prefixClass}-dividers`
    }
    return <div className={classNames(`${prefixClass}-content`, dividersClass)}>{children}</div>
}

content.defaultProps = {
    prefixClass: "tui-modal",
};

export default content