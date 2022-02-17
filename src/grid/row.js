import React from 'react'

const Row = (props) => {
  const { style, gap, className, prefixClass, ...rest } = props

  let classes = prefixClass

  if (className) {
    classes += ' ' + className
  }

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
    <div className={classes} style={{ ...gapStyle, ...style }}>
      {React.Children.map(props.children, (item, index) => {
        return <item.type key={index} {...item.props} gap={gapX}></item.type>
      })}
    </div>
  )
}

Row.defaultProps = {
  prefixClass: 'tui-row',
}

export default Row
