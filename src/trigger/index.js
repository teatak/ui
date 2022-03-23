import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { CSSTransition } from 'react-transition-group';
import Portal from '../util/portal';

const Trigger = forwardRef((props, ref) => {

    const timeout = 225

    const { className, prefixClass, arrow, position, autoFit, onVisibleChange, onClickOutSide, tooltip, action, visible, defaultVisible, content, disabled, transitionClass, ...rest } = props

    const children = React.Children.only(props.children)
    const triggerRef = children.ref || useRef()
    const portalRef = useRef()

    const [portalVisible, setPortalVisible] = useState(visible || defaultVisible || false)
    const [exiting, setExiting] = useState(false)
    const [popupStyle, setPopupStyle] = useState({})
    const [realPosition, setRealPosition] = useState(position)
    const [arrowStyle, setArrowStyle] = useState({})

    useImperativeHandle(ref, () => ({
        dom: portalRef.current,
        setPosition: setPosition
    }));

    const setPosition = () => {
        const offset = props.offset || [0, 4]
        const t = triggerRef.current.getBoundingClientRect()
        const p = portalRef.current.getBoundingClientRect()
        let top, left
        let mergeStyle = {}
        let mergeArrowStyle = {}
        let realPos = position
        switch (position) {
            case "bottom":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                if (autoFit && (t.top + t.height + offset[1] + p.height - window.innerHeight > 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                    realPos = "top"
                } else {
                    realPos = "bottom"
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.left - (p.width - t.width) / 2 + offset[0]
                mergeStyle = { top: top, left: left }
                break
            case "bottomLeft":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                if (autoFit && (t.top + t.height + offset[1] + p.height - window.innerHeight > 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                    realPos = "topLeft"
                } else {
                    realPos = "bottomLeft"
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.left + offset[0]
                mergeStyle = { top: top, left: left }
                mergeArrowStyle = { left: t.width / 2 - 10 }
                break
            case "bottomRight":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                if (autoFit && (t.top + t.height + offset[1] + p.height - window.innerHeight > 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                    realPos = "topRight"
                } else {
                    realPos = "bottomRight"
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.right - p.width - offset[0]
                mergeStyle = { top: top, left: left }
                mergeArrowStyle = { right: t.width / 2 - 10 }
                break
            case "top":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                if (autoFit && (t.top - p.height - offset[1] < 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                    realPos = "bottom"
                } else {
                    realPos = "top"
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.left - (p.width - t.width) / 2 + offset[0]
                mergeStyle = { top: top, left: left }
                break
            case "topLeft":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                if (autoFit && (t.top - p.height - offset[1] < 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                    realPos = "bottomLeft"
                } else {
                    realPos = "topLeft"
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.left + offset[0]
                mergeStyle = { top: top, left: left }
                mergeArrowStyle = { left: t.width / 2 - 10 }
                break
            case "topRight":
                top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top - p.height - offset[1]
                if (autoFit && (t.top - p.height - offset[1] < 0)) {
                    top = (document.documentElement.scrollTop || document.body.scrollTop) + t.top + t.height + offset[1]
                    realPos = "bottomRight"
                } else {
                    realPos = "topRight"
                }
                left = (document.documentElement.scrollLeft || document.body.scrollLeft) + t.right - p.width - offset[0]
                mergeStyle = { top: top, left: left }
                mergeArrowStyle = { right: t.width / 2 - 10 }
                break
        }
        setRealPosition(realPos)
        setPopupStyle({ ...props.style, ...mergeStyle })
        setArrowStyle(mergeArrowStyle)
    }

    const handleClickOutSide = (e) => {
        if (
            (triggerRef.current && !triggerRef.current.contains(e.target))
            &&
            (portalRef.current && !portalRef.current.contains(e.target))
        ) {
            toggle(false)
            onClickOutSide && onClickOutSide()
        }
    }

    useEffect(() => {
        //避免重复render
        if (visible) {
            if (portalVisible != visible) {
                toggle(visible)
            }
        } else {
            if (portalVisible != visible) {
                toggle(visible)
            }
        }
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
        if (v) {
            setPortalVisible(v);
            setTimeout(() => { setPosition() }, 0)
        } else {
            setExiting(true)
            setPortalVisible(v)
        }
        onVisibleChange && onVisibleChange(v)
    }

    //clone children Element
    const newChildProps = {}
    const newPortalProps = {}
    if (!tooltip && action === "click") {
        if (!children.props.onClick) {
            newChildProps.onClick = (e) => {
                toggle(!portalVisible)
            }
        }
    }

    if (tooltip || action === "hover") {
        newChildProps.onMouseEnter = (e) => {
            delayToDo(0, () => {
                toggle(true)
            })
        }
        newChildProps.onMouseLeave = (e) => {
            delayToDo(100, () => {
                toggle(false)
            })
        }
        newPortalProps.onMouseEnter = (e) => {
            delayToDo(0, () => {
                toggle(true)
            })
        }
        newPortalProps.onMouseLeave = (e) => {
            delayToDo(100, () => {
                toggle(false)
            })
        }
    }

    let delayTimer = null
    const delayToDo = (delay, callback) => {
        if (delay) {
            clearDelayTimer();
            delayTimer = setTimeout(() => {
                callback();
                clearDelayTimer();
            }, delay);
        } else {
            clearDelayTimer();
            callback();
        }
    };

    const clearDelayTimer = () => {
        if (delayTimer) {
            clearTimeout(delayTimer);
            delayTimer = null;
        }
    }

    newChildProps.ref = triggerRef
    const trigger = React.cloneElement(children, disabled ? {} : newChildProps)

    const classNames = classnames(
        `${prefixClass}`,
        {
            [`${prefixClass}-no-arrow`]: !arrow,
            [`${prefixClass}-tooltip`]: tooltip,
        },
        className,
    )

    const classNamesPos = classnames(
        `${prefixClass}-position`,
        {
            [`${prefixClass}-${realPosition}`]: realPosition !== undefined,
        }
    )

    const portal = <Portal visible={portalVisible || exiting}>
        <CSSTransition
            in={portalVisible}
            timeout={timeout}
            classNames={`${prefixClass}-${transitionClass}`}
            appear
            mountOnEnter
            unmountOnExit
            onExited={(e) => {
                setExiting(false)
            }}
        >
            <span className={classNames} ref={portalRef} style={popupStyle} {...newPortalProps}>
                <div trigger-position={realPosition} className={classNamesPos}>
                    {arrow ? <div className={`${prefixClass}-arrow`} style={arrowStyle}></div>
                        : null}
                    <div className={`${prefixClass}-inner`}>
                        {content}
                    </div>
                </div>
            </span>
        </CSSTransition>
    </Portal>

    return <>
        {trigger}
        {portal}
    </>
})

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