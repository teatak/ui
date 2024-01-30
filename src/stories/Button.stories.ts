import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: { 
      control:"select", 
      options: ['small', 'medium', 'large']
    },
    disabled:{ type: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    size: 'small',
    text: 'Button',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    text: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    text: 'Button',
  },
};
