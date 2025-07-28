import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Switch, ControlGroup, Grid } from '@/components'
import { DarkMode, LightMode } from '@teatak/icons'

const meta = {
  title: 'Inputs/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    children: "Hello World",
    size: 'md',
    outlined: false,
    disabled: false,
    thinTrack: false,
    icon: <DarkMode />,
    checkedIcon: <LightMode />,
  },
}

export const Variants: Story = {
  args: {
    size: 'md',
    disabled: false,
    outlined: false,
    thinTrack: false,
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={4}>
        <Switch
          {...component.args}
          variant='text'
        >Text</Switch>
        <Switch
          {...component.args}
          variant='tonal'
        >Tonal</Switch>
        <Switch
          {...component.args}
          variant='filled'
        >Filled</Switch>
      </Grid>
    },
  ],
}

export const Size: Story = {
  args: {
    disabled: false,
    outlined: false,
    thinTrack: false,
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={4} alignItems='center'>
        <Switch
          {...component.args}
          size='xs'
        >xs</Switch>
        <Switch
          {...component.args}
          size='sm'
        >sm</Switch>
        <Switch
          {...component.args}
          size='md'
        >md</Switch>
        <Switch
          {...component.args}
          size='lg'
        >lg</Switch>
        <Switch
          {...component.args}
          size='xl'
        >xl</Switch>
      </Grid>
    },
  ],
}

export const Colors: Story = {
  args: {
    variant: 'tonal',
    icon: <DarkMode />,
    disabled: false,
    outlined: false,
    thinTrack: false,
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={4}>
        <Switch
          {...component.args}
          color='primary'
        >primary</Switch>
        <Switch
          {...component.args}
          color='neutral'
        >neutral</Switch>
        <Switch
          {...component.args}
          color='success'
        >success</Switch>
        <Switch
          {...component.args}
          color='warning'
        >warning</Switch>
        <Switch
          {...component.args}
          color='danger'
        >danger</Switch>
      </Grid>
    },
  ],
}

const options = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Dev",
    value: "dev",
  },
  {
    label: "Tester",
    value: "tester",
  },
  {
    label: "Master",
    value: "master",
    disabled: true,
  },
]

export const Groups: Story = {
  args: {
    disabled: false,
    outlined: false,
    thinTrack: false,
  },
  decorators: [
    (Story, component) => {
      return <ControlGroup
        options={options}
        defaultValue={['master']}
        onChange={(value) => {
          console.log(value)
        }}
        render={(options) => {
          return <Grid spacing={4}>
            {options.map((option, i) => {
              const { selected, label, ...rest } = option
              return <Switch
                checked={selected}
                {...component.args}
                {...rest}
              >{label}</Switch>
            })}
          </Grid>
        }}
      />
    },
  ],
};

