import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames"

import InfoOutlinedIcon from '../svg/icons/InfoOutlined';
import ErrorOutlinedIcon from '../svg/icons/ErrorOutlined';
import SuccessOutlinedIcon from '../svg/icons/SuccessOutlined';
import WarningOutlinedIcon from '../svg/icons/WarningOutlined';

import CloseIcon from '../svg/icons/Close';

const Notice = (props) => {
    const { prefixClass, duration, onClose, id } = props;

    const [style, setStyle] = useState(props.style)
    let delayTimer = null
    const startTimer = () => {
        // 自动关闭
        if (duration !== 0) {
            delayTimer = setTimeout(() => {
                setStyle({ opacity: 0 })
                onClose && onClose(id);
            }, duration);
        }
    };

    useEffect(() => {
        startTimer()
        return () => {
            clearTimeout(delayTimer)
        }
    }, [])

    const renderIcon = (color) => {
        switch (color) {
            case "info":
                return <InfoOutlinedIcon />
            case "success":
                return <SuccessOutlinedIcon />
            case "warning":
                return <WarningOutlinedIcon />
            case "error":
                return <ErrorOutlinedIcon />
            default:
                return <InfoOutlinedIcon />
        }
    }

    const handleClose = (e) => {
        setStyle({ opacity: 0 })
        onClose && onClose(id);
    }

    return <div style={style} className={classnames(
        prefixClass,
        `${prefixClass}-${props.color}`
    )}>
        {props.showIcon && <div className={`${prefixClass}-icon-wrapper`}>
            {renderIcon(props.color)}
        </div>}
        <div className={`${prefixClass}-content-wrapper`}>
            {props.content}
        </div>
        {props.actions && <div className={`${prefixClass}-actions-wrapper`}>{props.actions}</div>}
        {props.closeable && (
            <button className={`${prefixClass}-btn-close`} onClick={handleClose}  >{props.closeElement || <CloseIcon />}</button>
        )}
    </div>
}

export default Notice