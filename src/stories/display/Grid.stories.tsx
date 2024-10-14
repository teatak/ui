import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Grid, GridItem } from '@/components';
import styled from 'styled-components';
import theme from '@/style'

const Div = styled.div`
  border-radius: 8px;
  background: ${theme.vars.palette.surface.container};
  padding: 8px;
`

const meta = {
  title: 'Display/Grid',
  component: Grid,
} satisfies Meta<typeof Grid>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    columns: { xs: 6, sm: 24 },
    spacing: { xs: 6, sm: 12, md: 16 },
    children: [
      <GridItem span={{ xs: 0, sm: 12, md: 0, lg: 12 }}>
        <Div>
          {"span={{ xs: 0, sm: 12, md: 0, lg: 12 }}"}
        </Div>
      </GridItem>,
      <GridItem>
        <button>undefined auto fill with content</button>
      </GridItem>,
      <GridItem span>
        <span>span</span>
      </GridItem>,
      <GridItem span={6}>
        <Div>{"span={6}"}</Div>
      </GridItem>,
      <GridItem span={6}>
        <Div>{"span={6}"}</Div>
      </GridItem>,
      <GridItem span={6}>
        <Div>{"span={6}"}</Div>
      </GridItem>,
      <GridItem span={6}>
        <Div>{"span={6}"}</Div>
      </GridItem>,
      <Div>wraper with grid item</Div>
    ]
  },
}

export const SpaceLike: Story = {
  args: {
    spacing: 6,
    direction: 'column',
    children: [
      <span>span</span>,
      <input defaultValue={'input'} />,
      <Div>text</Div>,
    ]
  },
}
