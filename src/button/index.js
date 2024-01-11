/** @jsx jsx */
import React, { useEffect, useState, useRef, useContext, forwardRef } from "react"
import PropTypes from "prop-types"
import { css, jsx } from '@emotion/react'

const style = css`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  &:hover {
    color: red;
  }
`

const Button = forwardRef((props, ref) => {
  return <div css={style} {...props}>Button</div >
})

export default Button
