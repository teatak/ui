import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import { css } from '@emotion/react'
import classnames from "classnames"

const Space = forwardRef((props, ref) => {
  const {
    prefixClass = 'tui-space',
    direction = 'horizontal',
    align,
    size = 'small',
    className,
    itemClassName,
    style,
    ...rest
  } = props

  const _align = align === undefined && direction === 'horizontal' ? 'center' : align;

  const classNames = classnames(
    prefixClass,
    `${prefixClass}-direction-${direction}`,
    `${prefixClass}-size-${size}`,
    {
      [`${prefixClass}-align-${_align}`]: _align,
    },
    className
  );
  const itemClassNames = classnames(
    `${prefixClass}-item`,
    itemClassName,
  )

  const base = css`
  /* base */
  &.${prefixClass} {
    display: inline-flex;
    flex-wrap: wrap;
  }
  &.${prefixClass}-direction-horizontal {
    align-items: center;
    flex-direction: row;
  }
  &.${prefixClass}-direction-vertical {
    align-items: flex-start;
    flex-direction: column;
  }
  &.${prefixClass}-size-mini {
    gap: var(--tui-size-1)
  }
  &.${prefixClass}-size-small {
    gap: var(--tui-size-2)
  }
  &.${prefixClass}-size-medium {
    gap: var(--tui-size-4)
  }
  &.${prefixClass}-size-large {
    gap: var(--tui-size-6)
  }
  &.${prefixClass}-align-center {
    align-items: center;
  }
  &.${prefixClass}-align-start {
    align-items: flex-start;
  }
  &.${prefixClass}-align-end {
    align-items: flex-end;
  }
  &.${prefixClass}-align-baseline {
    align-items: baseline;
  }
  &.${prefixClass}-align-stretch {
    align-items: stretch;
  }
  /* item */
  .${prefixClass}-item {
    display: flex;
  }
`

  return <div css={base} className={classNames} style={style} {...rest}>
    {React.Children.map(props.children, (item, index) => {
      return (
        <div key={index} className={itemClassNames}>
          {item}
        </div>
      )
    })}
  </div>

})

Space.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']), //方向
  size: PropTypes.oneOf(['mini', 'small', 'medium', 'large']), //大小
  align: PropTypes.oneOf(['center', 'start', 'end', 'baseline', 'stretch']), //对齐方式
}

export default Space
