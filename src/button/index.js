import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = (props) => {
  const timerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  const [clicked, setClicked] = useState(false)

  const handleClick = (e) => {
    setClicked(true)
    if (props.onClick) {
      props.onClick(e)
    }
    timerRef.current = setTimeout(() => {
      setClicked(false)
    }, 200)
  }

  const { style, long, rounded, circle, htmlType, type, size, className, prefixClass, color, startIcon, endIcon, ...rest } = props

  const classNames = classnames(
    prefixClass,
    `${prefixClass}-${type}`,
    `${prefixClass}-size-${size}`,
    `${prefixClass}-color-${color}`,
    {
      [`${prefixClass}-long`]: long,
      [`${prefixClass}-rounded`]: rounded,
      [`${prefixClass}-circle`]: circle,
      [`clicked`]: clicked,
    },
    className,
  )

  return (
    <button
      {...rest}
      onClick={handleClick}
      type={htmlType || 'button'}
      className={classNames}
      style={style}
    >
      {startIcon ? <span className={prefixClass + '-start-icon'}>{startIcon}</span> : null}
      <span>{props.children}</span>
      {endIcon ? <span className={prefixClass + '-end-icon'}>{endIcon}</span> : null}
    </button>
  )
}

Button.propTypes = {
  type: PropTypes.oneOf(['filled', 'outlined', 'text']), //类型
  long: PropTypes.bool, //长按钮
  rounded: PropTypes.bool, //圆角按钮
  circle: PropTypes.bool, //圆形按钮
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'success', 'error', 'info', 'warning']),
    PropTypes.string,
  ]), //颜色
  size: PropTypes.oneOf(['large', 'medium', 'small']), //大小
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset']), //类型
}

Button.defaultProps = {
  prefixClass: 'tui-button',
  long: false,
  rounded: false,
  circle: false,
  type: 'text',
  size: 'default',
  color: 'primary',
}

export default Button
