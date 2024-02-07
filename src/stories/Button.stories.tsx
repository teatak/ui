import type { Meta, StoryObj } from '@storybook/react';

import { prerenderVariable } from '../style'
import { ButtonWithType } from './ButtonWithType'

const theme = {
  button: {
    standard: {
      color: "red"
    }
  }
}
prerenderVariable(theme)

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: ButtonWithType,
  parameters: {
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof ButtonWithType>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonTypes: Story = {
  args: {
    type: 'outlined',
    shape: 'round',
    loading: true,

  },
};

export const Small: Story = {
  args: {
    type: "outlined",
    size: "small"
  },
};

export const Rounded: Story = {
  args: {
    type: "text",
    shape: "round",
    loading: true,
  },
};

export const Circle: Story = {
  args: {
    type: "outlined",
    shape: "circle",
  },
};
