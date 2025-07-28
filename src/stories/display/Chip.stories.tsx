import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Chip, Grid, GridItem, ChipDelete } from '@/components';
import { Search, WbSunnyOutlined as Sunny, CloudOutlined as Cloud, DeleteOutline } from '@teatak/icons';
import { css } from 'styled-components';

const meta = {
  title: 'Display/Chip',
  component: Chip,
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Simple: Story = {
  args: {
    children: "Chip",
    shape: 'round',
    disabled: false,
  },
}

export const Overview: Story = {
  args: {
    children: "Chip",
    disabled: false,
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
        <GridItem><Chip variant='filled' color='primary' elevation={[1, 2, 1]} {...rest}
          onClick={() => { console.log(222) }}
          endDecorator={<ChipDelete onClick={() => {
            console.log(111)
          }} >X</ChipDelete>}
        >Filled</Chip></GridItem>
        <GridItem><Chip variant='tonal' color='primary' {...rest}
          startDecorator={<ChipDelete icon onClick={() => {
            console.log(111)
          }} ><DeleteOutline /></ChipDelete>}
        >Tonal</Chip></GridItem>
        <GridItem><Chip variant='text' startDecorator={<Sunny />} color='neutral' {...rest}
          endDecorator={<ChipDelete icon color='danger' onClick={() => {
            console.log(111)
          }} ><DeleteOutline /></ChipDelete>}
        >Text</Chip></GridItem>
        <GridItem><Chip variant='filled' color='success' {...rest} endDecorator={<Cloud />}>Success</Chip></GridItem>
        <GridItem><Chip variant='tonal' color='success' {...rest}>Success</Chip></GridItem>
        <GridItem><Chip variant='text' color='danger' {...rest}>Danger</Chip></GridItem>
        <GridItem><Chip color='warning' {...rest}>Warning</Chip></GridItem>
        <GridItem><Chip href='#' {...rest}><Search /></Chip></GridItem>
        <GridItem><Chip onClick={() => {
        }} {...rest} disabled>Disabled</Chip></GridItem>
        <GridItem><Chip color='primary' loading  {...rest}>Loading</Chip></GridItem>
        <GridItem><Chip color='neutral' loading loadingPosition='end' {...rest}>Loading end</Chip></GridItem>
        <GridItem><Chip color='success' loading loadingPosition='center' {...rest}>Center</Chip></GridItem>
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
        <GridItem><Story args={{ ...component.args, children: "xl", size: 'xl' }} /></GridItem>
      </Grid>
    },
  ],
}

export const Delete: Story = {
  args: {
    outlined: false,
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
      const { ...rest } = component.args
      return <Grid spacing={4}>
        <GridItem><Chip variant='filled' color='primary' {...rest}
          onClick={() => { console.log(222) }}
          endDecorator={<ChipDelete color='danger' onClick={() => {
            console.log(111)
          }} >x</ChipDelete>}
        >Filled</Chip></GridItem>
        <GridItem><Chip variant='tonal' color='danger' {...rest}
          endDecorator={<ChipDelete icon onClick={() => {
            console.log(111)
          }} ><DeleteOutline /></ChipDelete>}
        >Tonal</Chip></GridItem>
        <GridItem><Chip variant='text' startDecorator={<Sunny />} color='neutral' {...rest}
          endDecorator={<ChipDelete icon color='danger' onClick={() => {
            console.log(111)
          }} ><DeleteOutline /></ChipDelete>}
        >Text</Chip></GridItem>
      </Grid>
    },
  ],
}

export const Icon: Story = {
  args: {
    icon: true,
    color: 'primary',
    children: <Search />,
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
