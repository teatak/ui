import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Input, Button, Checkbox, Switch, Grid, GridItem } from '@/components'
import { Loading } from '@/icons'

const meta = {
  title: 'Inputs/Input',
  component: Input,
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    variant: 'text',
    defaultValue: "Hello World",
    disabled: false,
  },
}

export const Size: Story = {
  args: {
    disabled: false,
    outlined: false,
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={8} alignItems='center'>
        <GridItem><Story args={{ ...component.args, defaultValue: 'xs', size: 'xs' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: 'sm', size: 'sm' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: 'md', size: 'md' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: 'lg', size: 'lg' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: 'xl', size: 'xl' }} /></GridItem>
      </Grid>
    },
  ],
}


export const Variant: Story = {
  args: {
    disabled: false,
    outlined: false,
  },
  argTypes: {
    size: {
      table: {
        disable: true
      }
    },
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={8} alignItems='center'>
        <GridItem><Story args={{ ...component.args, defaultValue: "filled", variant: 'filled' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: "tonal", variant: 'tonal' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: "text", variant: 'text' }} /></GridItem>
      </Grid>
    },
  ],
}

export const Textarea: Story = {
  args: {
    defaultValue: "Hello World",
    size: 'md',
    component: 'textarea',
    disabled: false,
  },
}

export const Decorator: Story = {
  args: {
    defaultValue: 'Decorator',
    variant: 'tonal',
    startDecorator: <Loading />,
    endDecorator: <Button variant='filled' color='primary'>Button</Button>,
    disabled: false,
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
    disabled: false,
  },
}