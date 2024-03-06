import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Input, Loading } from '../components'


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Overview: Story = {
  args: {
    defaultValue: 'Normal',
    onChange: (value, e) => { console.log(value, e) }
  },
}

export const Tiny: Story = {
  args: {
    size: 'tiny',
    placeholder: 'startIcon endIcon',
    startIcon: <Loading />,
    endIcon: <Loading />,
  },
}


export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Small',
    startIcon: <Loading />,
    endIcon: <Loading />,
  },
}


export const Large: Story = {
  args: {
    size: 'large',
    placeholder: 'Large',
    startIcon: <Loading />,
    endIcon: <Loading />,
  },
}

export const Outlined: Story = {
  args: {
    placeholder: 'Outlined',
    type: 'outlined',
  },
}

export const Text: Story = {
  args: {
    type: 'text',
    size: 'large',
    disabled: true,
    placeholder: 'Disabled Large Text',
    startIcon: <Loading />,
  },
}

export const Password: Story = {
  args: {
    htmlType: 'password',
    placeholder: 'Password',
  },
}