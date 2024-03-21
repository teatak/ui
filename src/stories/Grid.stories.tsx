import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid } from '../components';
import styled from 'styled-components';
import theme from '../style'

const Div = styled.div`
  border-radius: 8px;
  background: ${theme.vars.scheme.background.level1};
  padding: 8px;
`

const meta = {
  title: 'Example/Grid',
  component: Grid,
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    columns: { xs: 6, sm: 24 },
    spacing: { xs: 6, sm: 12, md: 16 },
    children: [
      <Grid.Item span={{ xs: 0, sm: 12, md: 0, lg: 12 }}>
        <Div>
          {"span={{ xs: 0, sm: 12, md: 0, lg: 12 }}"}
        </Div>
      </Grid.Item>,
      <Grid.Item>
        <Div>undefined auto fill with content</Div>
      </Grid.Item>,
      <Grid.Item span>
        <Div>span</Div>
      </Grid.Item>,
      <Grid.Item span={6}>
        <Div>{"span={6}"}</Div>
      </Grid.Item>,
      <Grid.Item span={6}>
        <Div>{"span={6}"}</Div>
      </Grid.Item>,
      <Grid.Item span={6}>
        <Div>{"span={6}"}</Div>
      </Grid.Item>,
      <Grid.Item span={6}>
        <Div>{"span={6}"}</Div>
      </Grid.Item>,
      <Div>wraper with grid item</Div>
    ]
  },
}

export const SpaceLike: Story = {
  args: {
    spacing: 6,
    direction: 'column',
    children: [
      <Div>text</Div>,
      <Div>text</Div>,
      <Div>text</Div>,
    ]
  },
}
