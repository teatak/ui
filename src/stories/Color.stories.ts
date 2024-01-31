import type { Meta, StoryObj } from '@storybook/react';
import Color from './Color'

const meta = {
    title: 'Example/Color',
    component: Color,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
    },
} satisfies Meta<typeof Color>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    parameters: {
        backgrounds: { default: 'light' },
    },
    args: {
        dark: false
    },
};

export const Dark: Story = {
    parameters: {
        backgrounds: { default: 'dark' },
    },
    args: {
        dark: true
    },
};
