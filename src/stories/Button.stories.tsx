import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ButtonInner } from './ButtonInner'

const meta = {
  title: 'Example/Button',
  component: ButtonInner,
  parameters: {
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: [''],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof ButtonInner>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
  },
}

export const Tiny: Story = {
  args: {
    type: 'solid',
    size: 'tiny'
  },
}

export const Rounded: Story = {
  args: {
    shape: 'round',
  },
}

export const Circle: Story = {
  args: {
    type: 'solid',
    shape: 'circle',
  },
}
