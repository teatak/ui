import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox, ControlGroup, Grid } from '@/components'
import { DarkMode, LightMode } from '@teatak/icons'

const meta = {
  title: 'Inputs/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    children: "Hello World",
    size: 'md',
    outlined: false,
    disabled: false,
    indeterminate: false,
  },
}

export const Variants: Story = {
  args: {
    size: 'md',
    disabled: false,
    outlined: false,
    icon: <LightMode />,
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={4}>
        <Checkbox
          {...component.args}
        >Undefined</Checkbox>
        <Checkbox
          {...component.args}
          variant='text'
        >Text</Checkbox>
        <Checkbox
          {...component.args}
          variant='tonal'
        >Tonal</Checkbox>
        <Checkbox
          {...component.args}
          variant='filled'
        >Filled</Checkbox>
      </Grid>
    },
  ],
}

export const Size: Story = {
  args: {
    disabled: false,
    outlined: false,
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={4} alignItems='center'>
        <Checkbox
          {...component.args}
          size='xs'
        >xs</Checkbox>
        <Checkbox
          {...component.args}
          size='sm'
        >sm</Checkbox>
        <Checkbox
          {...component.args}
          size='md'
        >md</Checkbox>
        <Checkbox
          {...component.args}
          size='lg'
        >lg</Checkbox>
        <Checkbox
          {...component.args}
          size='xl'
        >xl</Checkbox>
      </Grid>
    },
  ],
}

export const Colors: Story = {
  args: {
    disabled: false,
    outlined: false,
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={4}>
        <Checkbox
          {...component.args}
          color='primary'
        >primary</Checkbox>
        <Checkbox
          {...component.args}
          color='neutral'
        >neutral</Checkbox>
        <Checkbox
          {...component.args}
          color='success'
        >success</Checkbox>
        <Checkbox
          {...component.args}
          color='warning'
        >warning</Checkbox>
        <Checkbox
          {...component.args}
          color='danger'
        >danger</Checkbox>
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
    outlined: false,
  },
  decorators: [
    (Story, component) => {
      return <ControlGroup
        options={options}
        defaultValue={['master']}
        onChange={(value) => {
          console.log(value)
        }}
        render={(items) => {
          return <Grid spacing={4}>
            {items.map((item) => {
              const { selected, label, ...rest } = item
              return <Checkbox
                checked={selected}
                {...component.args}
                {...rest}
              >{label}</Checkbox>
            })}
          </Grid>
        }}
      />
    },
  ],
};

