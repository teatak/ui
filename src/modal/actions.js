import React,{useRef, useState, useEffect} from 'react'
import PropTypes from "prop-types";

const actions = (props) => {
    const {prefixClass, children} = props;
    return <div className={`${prefixClass}-actions`}>{children}</div>
}

actions.defaultProps = {
    prefixClass: "tui-modal",
};

export default actions