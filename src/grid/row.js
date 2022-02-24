import React from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

const Row = (props) => {
  const { style, gap, className, prefixClass, align, justify, ...rest } = props

  const classNames = classnames(
    prefixClass,
    `${prefixClass}-align-${align}`,
    `${prefixClass}-justify-${justify}`,
    className,
  )

  let gapX = 0
  let gapY = 0
  let gapStyle = {
    rowGap: '0px',
  }
  if (gap) {
    if (Array.isArray(gap)) {
      gapX = gap[0]
      gapY = gap[1]
    } else {
      let gapFixed = gap.replace('px', '')
      gapX = gapFixed
      gapY = gapFixed
    }
  }
  if (gapX != 0) {
    gapStyle = {
      marginLeft: '-' + gapX / 2 + 'px',
      marginRight: '-' + gapX / 2 + 'px',
      rowGap: gapY + 'px',
    }
  } else {
    gapStyle = {
      rowGap: gapY + 'px',
    }
  }

  return (
    <div className={classNames} style={{ ...gapStyle, ...style }}>
      {React.Children.map(props.children, (item, index) => {
        return <item.type key={index} {...item.props} gap={gapX}></item.type>
      })}
    </div>
  )
}

Row.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']), //align
  justify: PropTypes.oneOf(['start', 'center', 'end', 'space-between', 'space-around']), //justify
}

Row.defaultProps = {
  prefixClass: "tui-row",
  align: "start",
  justify: "start"
}

export default Row
