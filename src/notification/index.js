import React, { forwardRef, useRef, useImperativeHandle, useState } from "react"
import ReactDOM from 'react-dom';
import classnames from "classnames"
import Notice from "./notice";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

let instance = {};
let container = undefined
let maxCount = 100
let duration = 3000

const addNotification = (props) => {
    const { position = 'topRight' } = props
    const _props = {
        ...props,
        id: props.id ? props.id : Date.now(),
        showIcon: props.showIcon === undefined ? true : props.showIcon,
        duration: props.duration === undefined ? duration : props.duration
    }
    if (instance[position]) {
        const notices = instance[position].notices;
        if (notices.length >= maxCount) {
            notices.shift();
            instance[position].add(_props)
        } else {
            instance[position].add(_props)
        }
    } else {
        const div = document.createElement('div');
        (container || document.body).appendChild(div);

        ReactDOM.render(
            <Notification position={position} ref={(ref) => {
                if (ref) {
                    if (instance[position]) {
                        instance[position] = ref
                    } else {
                        instance[position] = ref
                        instance[position].add(_props)
                    }
                }
            }}></Notification>,
            div
        )
    }

}

const useNotification = () => {
    const notification = {
        info: (props) => {
            const _props = { ...props, color: "info" }
            addNotification(_props)
        },
        success: (props) => {
            const _props = { ...props, color: "success" }
            addNotification(_props)
        },
        warning: (props) => {
            const _props = { ...props, color: "warning" }
            addNotification(_props)
        },
        error: (props) => {
            const _props = { ...props, color: "error" }
            addNotification(_props)
        },
    }
    const setConfig = (config) => {
        config.getContainer && (container = config.getContainer())
        config.maxCount && (maxCount = config.maxCount)
        config.duration && (duration = config.duration)
        config.prefixClass && (prefixClass = config.prefixClass)
    }
    return [notification, setConfig]
}

const Notification = forwardRef((props, ref) => {
    const { position, prefixClass } = props
    const divRef = useRef();
    const [notices, setNotices] = useState([])

    useImperativeHandle(ref, () => ({
        dom: divRef,
        notices: notices,
        add: (props) => {
            let _n = [...notices]
            _n.push(props)
            setNotices(_n)
        },
        remove: (id) => {
            let index = notices.findIndex(item => item.id === id)
            if (index > -1) {
                let _n = [...notices]
                _n.splice(index, 1);
                setNotices(_n)
            }
        }
    }), [notices]);

    const classNamesWrapper = classnames(
        `${prefixClass}-wrapper`,
        `${prefixClass}-wrapper-${position}`
    );

    let transitionClass = "";
    switch (position) {
        case 'top':
            transitionClass = 'zoomInTop';
            break
        case 'bottom':
            transitionClass = 'zoomInBottom';
            break
        case 'topLeft':
        case 'bottomLeft':
            transitionClass = 'slideNoticeLeft';
            break
        default:
            transitionClass = 'slideNoticeRight';
            break
    }
    const remove = (id) => {
        setTimeout(() => {
            Object.keys(instance).forEach((ins) => {
                instance[ins].remove(id);
            });
        }, 200);
    }

    return <div className={classNamesWrapper} ref={divRef}>
        <TransitionGroup component={null}>
            {notices.map((notice) => (
                <CSSTransition
                    key={notice.id}
                    timeout={{
                        enter: 400,
                        exit: 300,
                    }}
                    classNames={transitionClass}
                    onExit={(e) => {
                        e.style.height = `${e.scrollHeight}px`;
                    }}
                    onExiting={(e) => {
                        e.style.height = 0;
                    }}
                    onExited={(e) => {
                        e.style.height = 0;
                        notice.onClose && notice.onClose();
                    }}
                >
                    <div>
                        <Notice
                            {...notice}
                            onClose={remove}
                            prefixClass={prefixClass}
                        />
                    </div>
                </CSSTransition>
            ))}
        </TransitionGroup>
    </div>
})
Notification.defaultProps = {
    prefixClass: 'tui-notification'
}

export default Notification
export { useNotification }
