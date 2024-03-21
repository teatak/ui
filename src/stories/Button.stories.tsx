import type { Meta, StoryObj } from '@storybook/react'
import { ButtonInner } from './ButtonInner'

const meta = {
  title: 'Example/Button',
  component: ButtonInner,
} satisfies Meta<typeof ButtonInner>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
  },
}

export const Tiny: Story = {
  args: {
    size: 'xs',
  },
}

export const Rounded: Story = {
  args: {
    shape: 'round',
  },
}

export const Circle: Story = {
  args: {
    variant: 'solid',
    shape: 'circle',
  },
}
