import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Grid, GridItem, ButtonGroup } from '@/components'
import theme, { setMode, restoreMode, ColorTone, getMode, DefaultColorTones, DefaultColorTone, detectMode, ColorVariant, ColorName } from '@/style'
import styled from 'styled-components'
import Color from "color"

const StyledColorPalette = styled.div`
  border-radius: 8px;
  overflow: hidden;
  &>div { 
    color: var(--tui-text-primary);
    font-size: 14px;
    padding: 8px;
    cursor: pointer;
    transition: transform 0.2s;
    display: flex;
    justify-content: space-between;
    height: 40px;
  }
`

const StyledColor = styled.div`
  &:hover {
    &>div>.color {
      display: inline-block;
    }
  }
  &>div {
    color: var(--tui-text-primary);
    font-size: 14px;
    padding: 8px;
    cursor: pointer;
    transition: transform 0.2s;
    display: flex;
    justify-content: space-between;
    & .text {
    }
    & .color {
      display: none;
      font-size: 12px;
    }
    &:hover {
      transform: scale(1.05);
    }
    &:first-child {
      border-radius: 8px 8px 0 0;
    }
    &:last-child {
      border-radius: 0 0 8px 8px;
    }
    &:nth-child(n+12){
      color: var(--tui-surface-inverseOnMain);
    }
  }
`

const ColorPalette = (props: any) => {
  const {
    name,
    colorMode = 'hex',
  } = props
  let p: Record<ColorName, ColorTone & ColorVariant> = theme.entries.colorSchemes.light
  const mode = detectMode()
  if (mode == 'dark') {
    p = theme.entries.colorSchemes.dark
  }

  return <StyledColorPalette className="colors" style={{ border: `solid 1px var(--tui-${name}-main)` }}>
    <div style={{ color: `var(--tui-${name}-onDark)`, background: `var(--tui-${name}-dark)` }}>
      <span className='text'>--tui-{name}-dark</span>
    </div>
    <div style={{ color: `var(--tui-${name}-dark)`, background: `var(--tui-${name}-onDark)` }}>
      <span className='text'>--tui-{name}-onDark</span>
    </div>
    <div style={{ color: `var(--tui-${name}-onMain)`, background: `var(--tui-${name}-main)` }}>
      <span className='text'>--tui-{name}-main</span>
    </div>
    <div style={{ color: `var(--tui-${name}-main)`, background: `var(--tui-${name}-onMain)` }}>
      <span className='text'>--tui-{name}-onMain</span>
    </div>
    <div style={{ color: `var(--tui-${name}-onContainer)`, background: `var(--tui-${name}-container)` }}>
      <span className='text'>--tui-{name}-container</span>
    </div>
    <div style={{ color: `var(--tui-${name}-container)`, background: `var(--tui-${name}-onContainer)` }}>
      <span className='text'>--tui-{name}-onContainer</span>
    </div>
    <div style={{ color: `var(--tui-${name}-onLight)`, background: `var(--tui-${name}-light)` }}>
      <span className='text'>--tui-{name}-light</span>
    </div>
    <div style={{ color: `var(--tui-${name}-light)`, background: `var(--tui-${name}-onLight)` }}>
      <span className='text'>--tui-{name}-onLight</span>
    </div>
    {/* {DefaultColorTones.map((k, i) => {
    return <div key={k} style={{ background: `rgb(var(--tui-${name}-${k}))` }}>
      <span className='text'>--tui-{name}-{k}</span><span className='color'>{toColor(range[k as DefaultColorTone])}</span>
    </div>
  })} */}
  </StyledColorPalette>
}

const ColorRange = (props: any) => {
  const {
    name,
    colorMode = 'hex',
  } = props
  let p: Record<ColorName, ColorTone & ColorVariant> = theme.entries.colorSchemes.light
  const mode = detectMode()
  if (mode == 'dark') {
    p = theme.entries.colorSchemes.dark
  }

  let range = p[name as ColorName] as ColorTone

  //@ts-ignore
  function round(number, precision) {
    //@ts-ignore
    return Math.round(+number + "e" + precision) / Math.pow(10, precision);
  }

  function toColor(_color: string) {
    let arr
    const color = Color("rgb(" + _color + ")")
    switch (colorMode) {
      case 'rgb':
        return color.rgb().string()
      case 'hsl':
        arr = color.hsl().array()
        return "hsv(" + round(arr[0], 0) + ', ' + round(arr[1], 0) + '%, ' + round(arr[2], 0) + '%)'
      case 'hsv':
        arr = color.hsv().array()
        return "hsv(" + round(arr[0], 0) + ', ' + round(arr[1], 0) + '%, ' + round(arr[2], 0) + '%)'
      default:
        return color.hex()
    }
  }


  return range && <StyledColor className="colors">
    {DefaultColorTones.map((k, i) => {
      return <div key={k} style={{ background: `rgb(var(--tui-${name}-${k}))` }}>
        <span className='text'>--tui-{name}-{k}</span><span className='color'>{toColor(range[k as DefaultColorTone])}</span>
      </div>
    })}
  </StyledColor>
}

const StyleShadow = styled.div`
  padding:16px;
  border-radius: 8px;
  text-align: center;
`
const Themes = () => {
  const [colorMode, setColorMode] = useState("rgb")
  const initMode = getMode()
  const [themeMode, setThemeMode] = useState(initMode)
  return <>
    <Grid spacing={8}>
      <ButtonGroup variant='text' outlined color='primary'>
        <Button
          variant={themeMode === 'system' ? 'filled' : 'text'}
          onClick={() => {
            setMode('system')
            setThemeMode('system')
          }} >System</Button>
        <Button
          variant={themeMode === 'light' ? 'filled' : 'text'}
          onClick={() => {
            setMode('light')
            setThemeMode('light')
          }} >Light</Button>
        <Button
          variant={themeMode === 'dark' ? 'filled' : 'text'}
          onClick={() => {
            setMode('dark')
            setThemeMode('dark')
          }} >Dark</Button>
        <Button
          onClick={() => {
            restoreMode()
            setThemeMode('system')
          }} >Clear</Button>
      </ButtonGroup>
      <ButtonGroup variant='text' outlined color='primary'>
        <Button
          variant={colorMode === 'hex' ? 'filled' : 'text'}
          onClick={() => {
            setColorMode('hex')
          }} >HEX</Button>
        <Button
          variant={colorMode === 'rgb' ? 'filled' : 'text'}
          onClick={() => {
            setColorMode('rgb')
          }} >RGB</Button>
        <Button
          variant={colorMode === 'hsl' ? 'filled' : 'text'}
          onClick={() => {
            setColorMode('hsl')
          }} >HSL</Button>
        <Button
          variant={colorMode === 'hsv' ? 'filled' : 'text'}
          onClick={() => {
            setColorMode('hsv')
          }} >HSV</Button>
      </ButtonGroup>
    </Grid>
    <Grid
      columns={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 20 }}
      spacing={{ xs: 8, md: 12 }}
    >
      <GridItem span={{ xs: 4, sm: 8, md: 12, lg: 16, xl: 20 }}>
        <Grid spacing={8} columns={{ xs: 4, sm: 8, md: 16 }}>
          {Object.keys(theme.entries.shadow).map((k, i) => {
            return <GridItem key={k} span={4}>
              <StyleShadow style={{ boxShadow: "var(--tui-shadow-" + k + ")" }}>shadow-{k}</StyleShadow>
            </GridItem>
          })}
        </Grid>
      </GridItem>
      {Object.keys(theme.entries.color).map((k, i) => {
        return <GridItem key={k} span={4}>
          <ColorPalette name={k} colorMode={colorMode}></ColorPalette>
        </GridItem>
      })}
      {Object.keys(theme.entries.color).map((k, i) => {
        return <GridItem key={k} span={4}>
          <ColorRange name={k} colorMode={colorMode}></ColorRange>
        </GridItem>
      })}
    </Grid>
  </>
}

const meta = {
  title: 'Themes/Themes',
  component: Themes,
  decorators: [
    (Story) => (
      <div style={{ margin: '1em' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Themes>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {}