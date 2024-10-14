import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonGroup, Grid, GridItem } from '@/components';
import { Search } from '@teatak/icons';

const meta = {
  title: 'Inputs/Button',
  component: Button,
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    children: "Button",
    shape: 'round',
    color: 'primary',
    disabled: false,
  },
}

export const Overview: Story = {
  args: {
    children: "Button",
    disabled: false,
    shape: 'square',
    outlined: false,
  },
  argTypes: {
    color: {
      table: {
        disable: true
      }
    },
    children: {
      table: {
        disable: true
      }
    }
  },
  decorators: [
    (Story, component) => {
      const { ...rest } = component.args
      return <Grid spacing={4}>
        <GridItem><Button variant='filled' color='primary' elevation={[1, 2, 1]} {...rest}>Filled</Button></GridItem>
        <GridItem><Button variant='tonal' color='primary' {...rest}>Tonal</Button></GridItem>
        <GridItem><Button variant='text' color='neutral' {...rest} outlined>Text</Button></GridItem>
        <GridItem><Button variant='filled' color='success' {...rest}>Success</Button></GridItem>
        <GridItem><Button variant='tonal' color='success' {...rest}>Success</Button></GridItem>
        <GridItem><Button variant='filled' color='danger' {...rest}>Danger</Button></GridItem>
        <GridItem><Button variant='tonal' color='danger' {...rest}>Danger</Button></GridItem>
        <GridItem><Button variant='text' color='danger' {...rest} outlined>Danger</Button></GridItem>
        <GridItem><Button color='warning' {...rest}>Warning</Button></GridItem>
        <GridItem><Button href='#' icon {...rest}><Search /></Button></GridItem>
        <GridItem><Button onClick={() => {
        }} {...rest} disabled>Disabled</Button></GridItem>
        <GridItem><Button color='primary' loading  {...rest}>Loading</Button></GridItem>
        <GridItem><Button color='neutral' loading loadingPosition='end' {...rest}>Loading end</Button></GridItem>
        <GridItem><Button color='success' loading loadingPosition='center' {...rest}>Center</Button></GridItem>
      </Grid>
    },
  ],
}

export const Size: Story = {
  args: {
    disabled: false,
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
        <GridItem><Story args={{ ...component.args, children: "xs", size: 'xs' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, children: "sm", size: 'sm' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, children: "md", size: 'md' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, children: "lg", size: 'lg' }} /></GridItem>
      </Grid>
    },
  ],
}


export const Icon: Story = {
  args: {
    color: 'primary',
    children: <Search />,
    icon: true,
    disabled: false,
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={8} alignItems='center'>
        <GridItem><Story args={{ ...component.args, children: <Search />, size: 'xs', color: 'primary', shape: 'round' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, children: <Search />, size: 'sm', color: 'success', shape: 'round' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, children: <Search />, color: 'warning', shape: 'square' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, children: <Search />, size: 'lg', color: 'danger', shape: 'square' }} /></GridItem>
      </Grid>
    },
  ],
}

export const Groups: Story = {
  args: {
    children: "Button",
    shape: 'round',
    color: 'primary',
    disabled: false,
  },
  decorators: [
    (Story, component) => {
      return <ButtonGroup shape={component.args.shape} direction='row' variant={component.args.variant} outlined={component.args.outlined} color={component.args.color} size={component.args.size}>
        <Story />
        <Story />
        <Story />
      </ButtonGroup>
    },
  ],
};

