import React,{useRef, useState, useEffect} from 'react'
import PropTypes from "prop-types";

const title = (props) => {
    const {prefixClass, children} = props;
    return <div className={`${prefixClass}-title`}>{children}</div>
}

title.defaultProps = {
    prefixClass: "tui-modal",
};

export default title