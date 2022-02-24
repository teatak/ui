import React from "react"

const Space = (props) => {
  const {
    style,
    gap,
    alignItems,
    className,
    itemClassName,
    prefixClass,
    ...rest
  } = props

  let classes = prefixClass

  if (className) {
    classes += ' ' + className
  }

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
    alignItems: alignItems || 'center',
  }

  return (
    <div className={classes} style={{ ...gapStyle, ...style }}>
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

Space.defaultProps = {
  prefixClass: 'tui-space',
}

export default Space
