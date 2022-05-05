import React, { useRef, useState, useEffect } from 'react'
import Portal from '../util/portal';
import classNames from 'classnames'
import { CSSTransition } from 'react-transition-group';
import Title from './title'
import Content from './content'
import Actions from './actions'

const modal = (props) => {
    const { style, className, keyboard, prefixClass, transitionClass, visible, title, footer, onClose, ...rest } = props;

    const timeout = 225
    const [animatedVisible, setAnimatedVisible] = useState(visible);
    const [portalVisible, setPortalVisible] = useState(visible);

    const getScrollBarWidth = (element) => {
        return element.tagName === 'BODY'
            ? window.innerWidth - (document.body.clientWidth || document.documentElement.clientWidth)
            : element.offsetWidth - element.clientWidth;
    };

    useEffect(() => {
        if (visible) {
            let container = document.body
            const containerScrollBarWidth = getScrollBarWidth(container);
            if (containerScrollBarWidth) {
                container.style.width = `calc(${container.style.width || '100%'
                    } - ${containerScrollBarWidth}px)`;
            }
            container.style.overflow = "hidden";
            setPortalVisible(true)
            setTimeout(() => { setAnimatedVisible(true) }, 0);
        } else {
            setAnimatedVisible(false)
        }
    }, [visible]);

    const onExited = (e) => {
        setPortalVisible(false)
        let container = document.body
        container.style.width = null
        container.style.overflow = null;
    }

    const wrapperRef = useRef();
    const contentRef = useRef();

    const onWrapperClick = (e) => {
        if (wrapperRef.current === e.target) {
            onInternalClose(e);
        }
    }
    const onInternalClose = (e) => {
        if (onClose) {
            onClose(e)
        }
    }
    const onWrapperKeyDown = (e) => {
        if (keyboard && e.keyCode === 27) {
            e.stopPropagation();
            onInternalClose(e);
            return;
        }

        //focus inside dialog
        if (visible) {
            if (e.keyCode === 9) {
                contentRef.current.changeActive(!e.shiftKey);
            }
        }
    }

    return <Portal visible={portalVisible}>
        <div className={`${prefixClass}-root`}>
            <CSSTransition
                in={animatedVisible}
                timeout={timeout}
                classNames={`${prefixClass}-fade`}
                unmountOnExit
            >
                <div className={classNames(`${prefixClass}-mask`)}></div>
            </CSSTransition>
            <CSSTransition
                in={animatedVisible}
                timeout={timeout}
                classNames={`${prefixClass}-${transitionClass}`}
                onEntered={() => {
                    if (wrapperRef.current) {
                        wrapperRef.current.focus()
                    }
                }}
                onExited={onExited}
                unmountOnExit
            >
                <div className={`${prefixClass}-wrap`}
                    tabIndex={-1}
                    ref={wrapperRef}
                    onKeyDown={onWrapperKeyDown}
                    onClick={onWrapperClick}
                >
                    <div
                        className={`${prefixClass}-container`}
                        style={
                            style?.maxWidth ? { maxWidth: style.maxWidth } : {}.
                                style?.width ? { width: style.width } : {}
                        }
                        ref={contentRef}
                    >
                        {props.children}
                    </div>
                </div>
            </CSSTransition>
        </div>
    </Portal>
}

modal.propTypes = {
};

modal.defaultProps = {
    prefixClass: "tui-modal",
    keyboard: true,
    transitionClass: "fade"
};

modal.Title = Title
modal.Content = Content
modal.Actions = Actions

export default modal
