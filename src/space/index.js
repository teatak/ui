import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Space = (props) => {
  const {
    style,
    gap,
    className,
    itemClassName,
    prefixClass,
    direction = "horizontal",
    ...rest
  } = props
  const classNames = classnames(
    prefixClass,
    `${prefixClass}-${direction}`,
    className
  );

  let itemClasses = prefixClass + '-item'

  if (itemClassName) {
    itemClasses += ' ' + itemClassName
  }
  let gapCss = '8px'
  if (gap) {
    if (Array.isArray(gap)) {
      gapCss = gap[0] + 'px ' + gap[1] + 'px'
    } else {
      if (gap.endsWith('px')) {
        gapCss = gap
      } else {
        gapCss = gap + 'px'
      }
    }
  }

  const gapStyle = {
    gap: gapCss,
  }

  return (
    <div className={classNames} style={{ ...gapStyle, ...style }}>
      {React.Children.map(props.children, (item, index) => {
        return (
          <div key={index} className={itemClasses}>
            {item}
          </div>
        )
      })}
    </div>
  )
}

Space.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']), //方向
}

Space.defaultProps = {
  prefixClass: 'tui-space',
}

export default Space
