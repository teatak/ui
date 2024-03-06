import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '../components'
import theme, { setMode, restoreMode } from '../style'

const Color = (props: any) => {
  const { name } = props
  return <div className="colors">
    <div style={{ background: `rgb(var(--tui-${name}-1))`, borderRadius: "8px 8px 0 0" }}>--tui-{name}-1</div>
    <div style={{ background: `rgb(var(--tui-${name}-2))` }}>--tui-{name}-2</div>
    <div style={{ background: `rgb(var(--tui-${name}-3))` }}>--tui-{name}-3</div>
    <div style={{ background: `rgb(var(--tui-${name}-4))` }}>--tui-{name}-4</div>
    <div style={{ background: `rgb(var(--tui-${name}-5))` }}>--tui-{name}-5</div>
    <div style={{ background: `rgb(var(--tui-${name}-6))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-6</div>
    <div className="reverse" style={{ background: `rgb(var(--tui-${name}-7))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-7</div>
    <div className="reverse" style={{ background: `rgb(var(--tui-${name}-8))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-8</div>
    <div className="reverse" style={{ background: `rgb(var(--tui-${name}-9))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-9</div>
    <div className="reverse" style={{ background: `rgb(var(--tui-${name}-10))`, borderRadius: "0 0 8px 8px", color: `var(--tui-color-background-2)` }} >--tui-{name}-10</div>
  </div>
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
        <Color name="mint"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="cyan"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="neutral"></Color>
      </Grid.Item>
      <Grid.Item span={4}>
        <Color name="gray"></Color>
      </Grid.Item>
    </Grid>
  </>
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Themes',
  component: Themes,
  parameters: {
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
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

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Overview: Story = {
  args: {
  },
}
