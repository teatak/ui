import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../components'
import { Loading } from '../icons'

const meta = {
  title: 'Example/Input',
  component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    defaultValue: "Hello World",
  },
}

export const Tiny: Story = {
  args: {
    defaultValue: "Hello World",
    shape: 'round',
    size: 'xs',
    startDecorator: <Loading />,
  },
}


export const Small: Story = {
  args: {
    defaultValue: "Hello World",
    size: 'sm',
    startDecorator: <Loading />,
  },
}


export const Large: Story = {
  args: {
    defaultValue: "Hello World",
    size: 'lg',
  },
}

export const Outlined: Story = {
  args: {
    defaultValue: 'Outlined',
    variant: 'outlined',
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 'Disabled',
    size: 'lg',
    disabled: true,
    startDecorator: <Loading />,
  },
}

export const Password: Story = {
  args: {
    defaultValue: 'Password',
    type: 'password',
  },
}