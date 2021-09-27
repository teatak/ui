import React,{useRef, useEffect, forwardRef} from 'react'
import PropTypes from "prop-types";
import ReactDOM from 'react-dom';

const portal = (props) => {

    const { visible,children } = props;

    const container = useRef()
    const initRef = useRef(false);
    
    if (!initRef.current) {
        if(visible) {
            if (!container.current) {
                container.current = document.createElement('div');
                const parent = document.body
                parent.appendChild(container.current)
            }
            initRef.current = true;
        }
    }

    useEffect(() => {
        
    });

    useEffect(() => {
        return () => {
            //remove dom
            if(container.current) {
                container.current.parentNode.removeChild(container.current)
            }
        };
    }, []);

    return container.current && visible ? ReactDOM.createPortal(children, container.current) : null;
} 

export default portal
