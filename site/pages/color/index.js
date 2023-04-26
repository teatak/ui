import React from 'react'
import { Space } from '../../../src'
import '../../../src/space/style'
import { Row, Col } from '../../../src'
import '../../../src/row/style'
import '../../../src/col/style'
import './index.less'

const Color = (props) => {
  const { name } = props
  return (
    <div className="colors">
      <div style={{ background: `rgb(var(--tt-${name}-1))` }}>--tt-{name}-1</div>
      <div style={{ background: `rgb(var(--tt-${name}-2))` }}>--tt-{name}-2</div>
      <div style={{ background: `rgb(var(--tt-${name}-3))` }}>--tt-{name}-3</div>
      <div style={{ background: `rgb(var(--tt-${name}-4))` }}>--tt-{name}-4</div>
      <div style={{ background: `rgb(var(--tt-${name}-5))` }}>--tt-{name}-5</div>
      <div style={{ background: `rgb(var(--tt-${name}-6))`, color: `var(--tt-color-background-2)` }} >--{name}-6</div>
      <div className="reverse" style={{ background: `rgb(var(--${name}-7))`, color: `var(--tt-color-background-2)` }} >--{name}-7</div>
      <div className="reverse" style={{ background: `rgb(var(--${name}-8))`, color: `var(--tt-color-background-2)` }} >--{name}-8</div>
      <div className="reverse" style={{ background: `rgb(var(--${name}-9))`, color: `var(--tt-color-background-2)` }} >--{name}-9</div>
      <div className="reverse" style={{ background: `rgb(var(--${name}-10))`, color: `var(--tt-color-background-2)` }} >--{name}-10</div>
    </div>
  )
}

export default () => {
  return (
    <div className="color-page">
      <h1>Color</h1>
      <h2>Foreground:</h2>
      <div className="examples">
        <Space>
          <span style={{ color: `var(--tt-color-foreground-1)` }}>--color-foreground-1</span>
          <span style={{ color: `var(--tt-color-foreground-2)` }}>--color-foreground-2</span>
          <span style={{ color: `var(--tt-color-foreground-3)` }}>--color-foreground-3</span>
          <span style={{ color: `var(--tt-color-foreground-4)` }}>--color-foreground-4</span>
        </Space>
      </div>
      <h2>Background:</h2>
      <Row gap="16px" className="bgs">
        <Col xs="24" sm="12" lg="6">
          <div style={{ background: `var(--tt-color-background-1)` }}>--color-background-1</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ background: `var(--tt-color-background-2)` }}>--color-background-2</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ background: `var(--tt-color-background-3)` }}>--color-background-3</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ background: `var(--tt-color-background-4)` }}>--color-background-4</div>
        </Col>
      </Row>
      <h2>Border:</h2>
      <Row gap="16px" className="borders">
        <Col xs="24" sm="12" lg="6">
          <div style={{ border: `solid 4px var(--tt-color-border-1)` }}>--color-border-1</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ border: `solid 4px var(--tt-color-border-2)` }}>--color-border-2</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ border: `solid 4px var(--tt-color-border-3)` }}>--color-border-3</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ border: `solid 4px var(--tt-color-border-4)` }}>--color-border-4</div>
        </Col>
      </Row>
      <h2>Fill:</h2>
      <Row gap="16px" className="bgs">
        <Col xs="24" sm="12" lg="6">
          <div style={{ background: `var(--tt-color-fill-1)` }}>--color-fill-1</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ background: `var(--tt-color-fill-2)` }}>--color-fill-2</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ background: `var(--tt-color-fill-3)` }}>--color-fill-3</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ background: `var(--tt-color-fill-4)` }}>--color-fill-4</div>
        </Col>
      </Row>
      <h2>Box shadow:</h2>
      <Row gap="16px" className="shadows">
        <Col xs="24" sm="12" lg="6">
          <div style={{ boxShadow: `var(--tt-box-shadow-1)` }}>--box-shadow-1</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ boxShadow: `var(--tt-box-shadow-2)` }}>--box-shadow-2</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ boxShadow: `var(--tt-box-shadow-3)` }}>--box-shadow-3</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ boxShadow: `var(--tt-box-shadow-4)` }}>--box-shadow-4</div>
        </Col>

        <Col xs="24" sm="12" lg="6">
          <div style={{ boxShadow: `var(--tt-box-shadow-btn)` }}>--box-shadow-btn</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ boxShadow: `var(--tt-box-shadow-popup)` }}>--box-shadow-popup</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ boxShadow: `var(--tt-box-shadow-popup-up)` }}>--box-shadow-popup-up</div>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <div style={{ boxShadow: `var(--tt-box-shadow-popup-down)` }}>--box-shadow-popup-down</div>
        </Col>
      </Row>
      <h2>Color:</h2>
      <Row gap="16px">
        <Col xs="24" sm="12" lg="6">
          <Color name="red"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="pink"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="purple"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="deeppurple"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="blue"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="cyan"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="green"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="lime"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="yellow"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="amber"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="orange"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="deeporange"></Color>
        </Col>
        <Col xs="24" sm="12" lg="6">
          <Color name="grey"></Color>
        </Col>
      </Row>
    </div>
  )
}
