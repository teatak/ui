import React from 'react'
import classnames from "classnames"
import styled from 'styled-components'

const Svg = styled.svg`
  width: 1em;
  height: 1em;
  fill: currentColor;
`

export const createSvg = (...path: any) => {
  return React.memo(React.forwardRef((props: any, ref: any) => {
    const { className, viewBox, ...rest } = props;
    const classNames = classnames(
      'tui-icon',
      className,
    );
    return <Svg className={classNames} viewBox={viewBox ? viewBox : "0 0 24 24"} {...rest} >
      {...path}
    </Svg>
  }))
}

export default Svg
