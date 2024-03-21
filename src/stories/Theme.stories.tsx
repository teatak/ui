import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '../components'
import theme, { setMode, restoreMode } from '../style'
import styled from 'styled-components'

const StyledColor = styled.div`
    &>div {
      color: var(--tui-text-primary);
      font-size: 14px;
      padding: 8px;
      text-align: center;
      cursor: pointer;
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.05);
      }
      &:nth-child(1) {
        border-radius: 8px 8px 0 0;
      }
      &:nth-child(10) {
        border-radius: 0 0 8px 8px;
      }
      &:nth-child(n+6){
        color: var(--tui-text-revert);
      }
    }
`

const Color = (props: any) => {
  const { name } = props
  return <StyledColor className="colors">
    <div style={{ background: `rgb(var(--tui-${name}-1))` }}>--tui-{name}-1</div>
    <div style={{ background: `rgb(var(--tui-${name}-2))` }}>--tui-{name}-2</div>
    <div style={{ background: `rgb(var(--tui-${name}-3))` }}>--tui-{name}-3</div>
    <div style={{ background: `rgb(var(--tui-${name}-4))` }}>--tui-{name}-4</div>
    <div style={{ background: `rgb(var(--tui-${name}-5))` }}>--tui-{name}-5</div>
    <div style={{ background: `rgb(var(--tui-${name}-6))` }} >--tui-{name}-6</div>
    <div style={{ background: `rgb(var(--tui-${name}-7))` }} >--tui-{name}-7</div>
    <div style={{ background: `rgb(var(--tui-${name}-8))` }} >--tui-{name}-8</div>
    <div style={{ background: `rgb(var(--tui-${name}-9))` }} >--tui-{name}-9</div>
    <div style={{ background: `rgb(var(--tui-${name}-10))` }} >--tui-{name}-10</div>
  </StyledColor>
}

const Themes = () => {
  return <>
    <div style={{ background: theme.vars.scheme.background.body, padding: 8 }}>
      <a onClick={() => {
        setMode('system')
      }}>system</a>&nbsp;
      <a onClick={() => {
        setMode('light')
      }}>light</a>&nbsp;
      <a onClick={() => {
        setMode('dark')
      }}>dark</a>&nbsp;
      <a onClick={() => {
        restoreMode()
      }}>clear</a>
    </div>
    <Grid
      columns={{ xs: 8, md: 16, lg: 24, xl: 32 }}
      spacing={{ xs: 8, md: 12 }}
    >
      <Grid.Item span={4}>
        <Color name="primary"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="neutral"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="red"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="orange"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="yellow"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="green"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="cyan"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="blue"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="indigo"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="purple"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="pink"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="gray"></Color>
      </Grid.Item>
    </Grid>
  </>
}

const meta = {
  title: 'Example/Themes',
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
