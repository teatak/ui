import React from 'react';
import classnames from "classnames"
import styled from 'styled-components';

const StyledSvg = styled.svg`
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
`

export const Svg = (props: any) => {
  const { className, viewBox, ...rest } = props;
  const prefixClass = 'tui-svg'
  const classNames = classnames(
    prefixClass,
    className,
  );

  return <StyledSvg className={classNames} viewBox={viewBox ? viewBox : "0 0 24 24"} {...rest}>
    {props.children}
  </StyledSvg>
}

export default function createSvgIcon(path: any, displayName: string) {
  function Component(props: any, ref: any) {
    return (
      <Svg ref={ref} {...props}>
        {path}
      </Svg >
    );
  }

  if (process.env.NODE_ENV !== 'production') {
    Component.displayName = `${displayName}Icon`;
  }

  return React.memo(React.forwardRef(Component))
}