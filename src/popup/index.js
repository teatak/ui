import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { CSSTransition } from 'react-transition-group';
import Portal from '../util/portal';

const Popup = (props) => {

    const timeout = 225

    const { style, className, prefixClass, size, onChange, visible, content, transitionClass, ...rest } = props
    const selectRef = useRef()
    const rootRef = useRef()
    const [rect, setRect] = useState({ left: 0, right: 0 })
    const [portalVisible, setPortalVisible] = useState(visible || false)
    const [animatedVisible, setAnimatedVisible] = useState(visible || false);

    const handleClickOutSide = (e) => {
        // if (
        //     (selectRef.current && !selectRef.current.contains(e.target))
        //     ||
        //     (rootRef.current && !rootRef.current.contains(e.target))
        // ) {
        setPortalVisible(false)
        setAnimatedVisible(false)
        onChange && onChange(false)
        // }
    }

    // useEffect(() => {
    //     console.log("add")
    //     document.documentElement.addEventListener("click", handleClickOutSide)
    //     return () => {
    //         console.log("remove")
    //         document.documentElement.removeEventListener("click", handleClickOutSide)
    //     }
    // }, [])
    // useEffect(() => {
    //     if (visible) {
    //     }
    //     return () => {
    //         if (visible) {
    //             console.log("remove")
    //             document.documentElement.removeEventListener("click", handleClickOutSide)
    //         }
    //     }
    // }, [visible])

    useEffect(() => {
        if (visible) {
            setPortalVisible(true)
            setTimeout(() => { setAnimatedVisible(true) }, 0);
            console.log("add")
            document.documentElement.addEventListener("click", handleClickOutSide)

        } else {
            setPortalVisible(false)
            setAnimatedVisible(false)
        }
        autoPosition()
        onChange && onChange(visible)
        return () => {
            if (visible) {
                console.log("remove")
                document.documentElement.removeEventListener("click", handleClickOutSide)
            }
        }
    }, [visible]);

    const classNames = classnames(
        `${prefixClass}`,
        {
            [`${prefixClass}-open`]: portalVisible,
        },
        className
    )

    React.Children.only(props.children)

    const component = props.children

    const toggle = (e) => {
        console.log("click")
        e.stopPropagation()
        e.preventDefault()
        setPortalVisible(!portalVisible)
        if (!portalVisible) {
            setTimeout(() => { setAnimatedVisible(true) }, 0);
        } else {
            setAnimatedVisible(false)
        }
        autoPosition()
        onChange && onChange(!portalVisible)
    }

    const autoPosition = () => {
        const r = selectRef.current.getBoundingClientRect()
        const left = (document.documentElement.scrollLeft || document.body.scrollLeft) + r.left
        const top = (document.documentElement.scrollTop || document.body.scrollTop) + r.top + r.height + 4
        setRect({ left: left, top: top })
    }

    return <>
        <component.type {...component.props} onClick={toggle} ref={selectRef}></component.type>
        <Portal visible={portalVisible}>
            <CSSTransition
                in={animatedVisible}
                timeout={timeout}
                classNames={`${prefixClass}-${transitionClass}`}
                onEntered={(e) => {
                    //console.log("onEntered")
                }}
                onExited={(e) => {
                    //console.log("onExited")
                }}
                unmountOnExit
            >
                <div className={`${prefixClass}-root`} ref={rootRef} onClick={(e) => {
                    console.log("body click")
                    e.stopPropagation()
                    e.preventDefault()
                }} style={{ "left": rect.left, "top": rect.top }}>
                    {content}
                </div>
            </CSSTransition>
        </Portal>
    </>
}

Popup.propTypes = {
}

Popup.defaultProps = {
    prefixClass: 'tui-popup',
    transitionClass: "fade"
}

export default Popup