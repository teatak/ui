import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '../components';

const meta = {
  title: 'Example/Grid',
  component: Grid,
  parameters: {
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
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
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    columns: { xs: 12, sm: 24, lg: 48 },
    styleOverrides: {

    },
    spacing: { xs: 12, sm: 16, md: 24 },
    children: [
      <Grid.Item span={{ xs: 0, sm: 12, md: 0, lg: 12 }}>
        <div style={{ background: "red", color: "white", height: "100px", padding: 10, borderRadius: 10 }}>
          {"span={{ xs: 0, sm: 12, md: 0, lg: 12 }}"}
        </div>
      </Grid.Item>,
      <Grid.Item>
        <div style={{ background: "black", color: "white", height: "60px", padding: 10, borderRadius: 10 }}>undefined auto fill with content</div>
      </Grid.Item>,
      <Grid.Item span>
        <div style={{ background: "blue", color: "white", height: "60px", padding: 10, borderRadius: 10 }}>span</div>
      </Grid.Item>,
      <Grid.Item span={6}>
        <div style={{ background: "yellow", height: "60px", padding: 10, borderRadius: 10 }}>{"span={6}"}</div>
      </Grid.Item>,
      <Grid.Item span={6}>
        <div style={{ background: "green", color: "white", height: "30px", padding: 10, borderRadius: 10 }}>{"span={6}"}</div>
      </Grid.Item>,
      <Grid.Item span={6}>
        <div style={{ background: "purple", color: "white", height: "60px", padding: 10, borderRadius: 10 }}>{"span={6}"}</div>
      </Grid.Item>,
      <Grid.Item span={6}>
        <div style={{ background: "pink", height: "60px", padding: 10, borderRadius: 10 }}>{"span={6}"}</div>
      </Grid.Item>,
    ]
  },
}
