import React, { forwardRef, useRef } from "react"
import PropTypes from 'prop-types';
import classnames from 'classnames'
import Styled from './styled'
import { withGlobalVariable } from '../../style'

const Button = withGlobalVariable(forwardRef((props, ref) => {
    const prefixClass = "tui-button"
    const {
        style, long, rounded, circle, htmlType, type, size,
        className, color, startIcon, endIcon, ...rest
    } = props

    const buttonRef = ref || useRef()

    const classNames = classnames(
        prefixClass,
        `${prefixClass}-${type}`,
        `${prefixClass}-size-${size || "medium"}`,
        `${prefixClass}-color-${color}`,
        {
            [`${prefixClass}-long`]: long,
            [`${prefixClass}-rounded`]: rounded,
            [`${prefixClass}-circle`]: circle,
        },
        className,
    )

    return <Styled
        $prefixClass={prefixClass}
        ref={buttonRef}
        type={htmlType || 'button'}
        className={classNames}
        style={style}
        {...rest}
    >
        {startIcon ? <span className={`${prefixClass}-start-icon`}>{startIcon}</span> : null}
        <span className={`${prefixClass}-text`}>
            {props.children}
        </span>
        {endIcon ? <span className={`${prefixClass}-end-icon`}>{endIcon}</span> : null}
    </Styled>
}))

Button.propTypes = {
    type: PropTypes.oneOf(['filled', 'outlined', 'standard']), //类型
    long: PropTypes.bool, //长按钮
    rounded: PropTypes.bool, //圆角按钮
    circle: PropTypes.bool, //圆形按钮
    color: PropTypes.oneOfType([
        PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
        PropTypes.string,
    ]), //颜色
    size: PropTypes.oneOf(['mini', 'small', 'medium', 'large']), //大小
    htmlType: PropTypes.oneOf(['submit', 'button', 'reset']), //类型
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
}

Button.defaultProps = {
    long: false,
    rounded: false,
    circle: false,
    type: 'standard',
    color: 'primary',
}

export default Button