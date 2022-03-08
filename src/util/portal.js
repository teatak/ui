import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';

const getContainer = (container) => {
    return typeof container === 'function' ? container() : container;
}

const portal = (props) => {
    const { children, container, visible = false } = props;
    const [mountNode, setMountNode] = useState(null);

    useEffect(() => {
        if (visible) {
            let node = getContainer(container) || document.body
            setMountNode(node);
        } else {
            setMountNode(null);
        }
    }, [container, visible]);

    return mountNode ? ReactDOM.createPortal(children, mountNode) : mountNode;
}

export default portal
