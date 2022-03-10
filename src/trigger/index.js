import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { CSSTransition } from 'react-transition-group';
import Portal from '../util/portal';

const Trigger = (props) => {

    const timeout = 225

    const { style, className, prefixClass, arrow, position, autoFit, onVisibleChange, tooltip, action, visible, defaultVisible, content, transitionClass, ...rest } = props

    const children = React.Children.only(props.children)
    const triggerRef = children.ref || useRef()
    const portalRef = useRef()

    const [portalVisible, setPortalVisible] = useState(visible || defaultVisible || false)
    const [animatedVisible, setAnimatedVisible] = useState(visible || defaultVisible || false);
    const [popupStyle, setPopupStyle] = useState(props.popupStyle || {})
    const [realPosition, setRealPosition] = useState(position)
    const [arrowStyle, setArrowStyle] = useState({})

    const setPosition = () => {
        const offset = props.offset || [0, 4]
        const t = triggerRef.current.getBoundingClientRect()
        const p = portalRef.current.getBoundingClientRect()
        let top, left
        let mergeStyle = {}
        let mergeArrowStyle = {}
        switch (position) {
            case "bottom":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                if (autoFit && (t.top + t.height + offset[1] + p.height - window.innerHeight > 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                    setRealPosition("top")
                } else {
                    setRealPosition("bottom")
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.left - (p.width - t.width) / 2 + offset[0]
                mergeStyle = { top: top, left: left }
                break
            case "bottomLeft":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                if (autoFit && (t.top + t.height + offset[1] + p.height - window.innerHeight > 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                    setRealPosition("topLeft")
                } else {
                    setRealPosition("bottomLeft")
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.left + offset[0]
                mergeStyle = { top: top, left: left }
                mergeArrowStyle = { left: t.width / 2 - 10 }
                break
            case "bottomRight":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                if (autoFit && (t.top + t.height + offset[1] + p.height - window.innerHeight > 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                    setRealPosition("topRight")
                } else {
                    setRealPosition("bottomRight")
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.right - p.width - offset[0]
                mergeStyle = { top: top, left: left }
                mergeArrowStyle = { right: t.width / 2 - 10 }
                break
            case "top":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                if (autoFit && (t.top - p.height - offset[1] < 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                    setRealPosition("bottom")
                } else {
                    setRealPosition("top")
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.left - (p.width - t.width) / 2 + offset[0]
                mergeStyle = { top: top, left: left }
                break
            case "topLeft":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                if (autoFit && (t.top - p.height - offset[1] < 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                    setRealPosition("bottomLeft")
                } else {
                    setRealPosition("topLeft")
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.left + offset[0]
                mergeStyle = { top: top, left: left }
                mergeArrowStyle = { left: t.width / 2 - 10 }
                break
            case "topRight":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                if (autoFit && (t.top - p.height - offset[1] < 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                    setRealPosition("bottomRight")
                } else {
                    setRealPosition("topRight")
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.right - p.width - offset[0]
                mergeStyle = { top: top, left: left }
                mergeArrowStyle = { right: t.width / 2 - 10 }
                break
        }
        setPopupStyle({ ...popupStyle, ...mergeStyle })
        setArrowStyle(mergeArrowStyle)
    }

    const handleClickOutSide = (e) => {
        if (
            (triggerRef.current && !triggerRef.current.contains(e.target))
            &&
            (portalRef.current && !portalRef.current.contains(e.target))
        ) {
            toggle(false)
        }
    }

    useEffect(() => {
        toggle(visible)
    }, [visible]);

    useEffect(() => {
        if (portalVisible) {
            document.documentElement.addEventListener("click", handleClickOutSide)
        }
        return () => {
            if (portalVisible) {
                document.documentElement.removeEventListener("click", handleClickOutSide)
            }
        }
    }, [portalVisible])

    const toggle = (v) => {
        setPortalVisible(v);
        if (v) {
            setTimeout(() => { setAnimatedVisible(v) }, 0);
            setTimeout(() => { setPosition() }, 0)
        } else {
            setAnimatedVisible(v)
        }
        onVisibleChange && onVisibleChange(v)
    }

    //clone children Element
    const newChildProps = {}
    if (!tooltip && action === "click") {
        if (!children.props.onClick) {
            newChildProps.onClick = (e) => {
                toggle(!portalVisible)
            }
        }
    }

    if (tooltip || action === "hover") {
        newChildProps.onMouseEnter = (e) => {
            toggle(true)
        }
        newChildProps.onMouseLeave = (e) => {
            toggle(false)
        }
    }

    newChildProps.ref = triggerRef
    const trigger = React.cloneElement(children, newChildProps)

    const classNames = classnames(
        `${prefixClass}`,
        `${prefixClass}-${realPosition}`,
        {
            [`${prefixClass}-no-arrow`]: !arrow,
            [`${prefixClass}-tooltip`]: tooltip,
        },
        className,
    )

    const portal = <Portal visible={portalVisible}>
        <CSSTransition
            in={animatedVisible}
            timeout={timeout}
            classNames={`${prefixClass}-${transitionClass}`}
            // onEntered={(e) => {}}
            // onExited={(e) => {}}
            unmountOnExit
        >
            <div className={classNames} ref={portalRef} onClick={(e) => {
                //e.stopPropagation()
            }} style={popupStyle}>
                {arrow ? <div className={`${prefixClass}-arrow`} style={arrowStyle}></div>
                    : null}
                <div className={`${prefixClass}-inner`}>
                    {content}
                </div>
            </div>
        </CSSTransition>
    </Portal>

    return <>
        {trigger}
        {portal}
    </>
}
Trigger.propTypes = {
    action: PropTypes.oneOf(['click', 'hover']), //方式
    position: PropTypes.oneOf(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight']), //位置
}

Trigger.defaultProps = {
    action: 'click',
    prefixClass: 'tui-trigger',
    position: "bottom",
    transitionClass: "fade",
    autoFit: true,
    arrow: true,
    tooltip: false
}

export default Trigger