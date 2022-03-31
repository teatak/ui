import React, { useState, forwardRef } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { CSSTransition } from 'react-transition-group';

import InfoIcon from '../svg/icons/Info';
import ErrorIcon from '../svg/icons/Error';
import SuccessIcon from '../svg/icons/Success';
import WarningIcon from '../svg/icons/Warning';

import CloseIcon from '../svg/icons/Close';

const Title = forwardRef((props, ref) => {
    const {
        style, className, prefixClass, children, ...rest
    } = props
    const classNames = classnames(
        prefixClass,
        className
    );
    return <div style={style} className={classNames}>
        {children}
    </div>
})

const Alert = forwardRef((props, ref) => {
    const {
        style, icon, showIcon, className, prefixClass, onClose, afterClose,
        closeable, closeElement, color = 'info', type = "standard", children, actions, ...rest
    } = props

    const [visible, setVisible] = useState(true);

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${type}`,
        `${prefixClass}-${color}`,
        className
    );

    const handleClose = (e) => {
        setVisible(false);
        onClose && onClose(e);
    }

    const renderIcon = (color) => {
        if (icon) {
            return icon;
        }
        switch (color) {
            case 'info':
                return <InfoIcon />
            case 'success':
                return <SuccessIcon />
            case 'warning':
                return <WarningIcon />
            case 'error':
                return <ErrorIcon />
            default:
                return null;
        }
    }

    return <CSSTransition
        in={visible}
        timeout={300}
        classNames="zoomInTop"
        unmountOnExit
        onExited={() => {
            afterClose && afterClose();
        }}
    >
        <div ref={ref} style={style} className={classNames}>
            {showIcon && <div className={`${prefixClass}-icon-wrapper`}>{renderIcon(color)}</div>}
            <div className={`${prefixClass}-content-wrapper`}>
                {children}
            </div>
            {actions && <div className={`${prefixClass}-actions-wrapper`}>{actions}</div>}
            {closeable && (
                <button className={`${prefixClass}-btn-close`} onClick={handleClose} >{closeElement || <CloseIcon />}</button>
            )}
        </div>
    </CSSTransition>
})

Alert.propTypes = {
    type: PropTypes.oneOf(['filled', 'outlined', 'standard']), //类型
    color: PropTypes.oneOfType([
        PropTypes.oneOf(['success', 'error', 'info', 'warning']),
        PropTypes.string,
    ]), //颜色
}

Alert.defaultProps = {
    prefixClass: 'tui-alert',
    showIcon: true,
    closeable: false,
}


Title.defaultProps = {
    prefixClass: 'tui-alert-title',
}

Alert.Title = Title

export default Alert