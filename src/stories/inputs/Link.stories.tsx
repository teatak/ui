import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Link, Grid } from '@/components'

const meta = {
  title: 'Inputs/Link',
  component: Link,
} satisfies Meta<typeof Link>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    children: "Overview",
    href: "#",
    disabled: false,
    target: "_blank",
    size: "md",
  },
}

export const Colors: Story = {
  args: {
    href: "#",
    disabled: false,
    target: "_blank",
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={4}>
        <Link
          {...component.args}
          color='primary'
        >Primary</Link>
        <Link
          {...component.args}
          color='neutral'
        >Neutral</Link>
        <Link
          {...component.args}
          color='success'
        >Success</Link>
        <Link
          {...component.args}
          color='warning'
        >Warning</Link>
        <Link
          {...component.args}
          color='danger'
        >Danger</Link>
      </Grid>
    },
  ],
}
