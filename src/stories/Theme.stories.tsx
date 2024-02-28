import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Space } from '../components'
import theme, { setColorPreference } from '../style'

const Color = (props: any) => {
  const { name } = props
  return <div className="colors">
    <div style={{ background: `rgb(var(--tui-${name}-1))` }}>--tui-{name}-1</div>
    <div style={{ background: `rgb(var(--tui-${name}-2))` }}>--tui-{name}-2</div>
    <div style={{ background: `rgb(var(--tui-${name}-3))` }}>--tui-{name}-3</div>
    <div style={{ background: `rgb(var(--tui-${name}-4))` }}>--tui-{name}-4</div>
    <div style={{ background: `rgb(var(--tui-${name}-5))` }}>--tui-{name}-5</div>
    <div style={{ background: `rgb(var(--tui-${name}-6))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-6</div>
    <div className="reverse" style={{ background: `rgb(var(--tui-${name}-7))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-7</div>
    <div className="reverse" style={{ background: `rgb(var(--tui-${name}-8))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-8</div>
    <div className="reverse" style={{ background: `rgb(var(--tui-${name}-9))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-9</div>
    <div className="reverse" style={{ background: `rgb(var(--tui-${name}-10))`, color: `var(--tui-color-background-2)` }} >--tui-{name}-10</div>
  </div>
}

const Themes = () => {
  return <>
    <div style={{ background: theme.vars.scheme.background.body }}>
      <a onClick={() => {
        setColorPreference('system')
      }}>system</a>&nbsp;
      <a onClick={() => {
        setColorPreference('light')
      }}>light</a>&nbsp;
      <a onClick={() => {
        setColorPreference('dark')
      }}>dark</a>
    </div>
    <Space>
      <Color name="blue"></Color>
      <Color name="indigo"></Color>
      <Color name="purple"></Color>
      <Color name="pink"></Color>
      <Color name="red"></Color>
      <Color name="orange"></Color>
      <Color name="yellow"></Color>
      <Color name="green"></Color>
      <Color name="mint"></Color>
      <Color name="cyan"></Color>
      <Color name="neutral"></Color>
      <Color name="gray"></Color>
    </Space>
  </>
}

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Themes',
  component: Themes,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Themes>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
  },
}
