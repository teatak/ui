import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Space } from '../components';

const meta = {
  title: 'Example/Space',
  component: Space,
  parameters: {
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
  // decorators: [
  //   (Story) => (
  //     <div style={{ margin: '3em' }}>
  //       <Story />
  //     </div>
  //   ),
  // ],
} satisfies Meta<typeof Space>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <span style={{ padding: 4, background: "red" }}>hello</span>,
      <span style={{ padding: 4, background: "yellow" }}>text</span>,
      <span style={{ padding: 4, background: "blue" }}>whoam</span>
    ]
  },
}
