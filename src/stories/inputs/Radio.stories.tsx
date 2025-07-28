import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Radio, ControlGroup, Grid } from '@/components'
import { css } from 'styled-components'
import theme from '@/style'
import { CheckCircle } from '@teatak/icons'
const meta = {
  title: 'Inputs/Radio',
  component: Radio,
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    children: "Hello World",
    size: 'md',
    outlined: false,
    disabled: false,
  },
}

export const Variants: Story = {
  args: {
    size: 'md',
    disabled: false,
    outlined: false,
  },
  decorators: [
    (Story, component) => {
      return <Grid spacing={4}>
        <Radio
          {...component.args}
        >Undefined</Radio>
        <Radio
          {...component.args}
          variant='text'
        >Text</Radio>
        <Radio
          {...component.args}
          variant='tonal'
        >Tonal</Radio>
        <Radio
          {...component.args}
          variant='filled'
        >Filled</Radio>
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
        <Radio
          {...component.args}
          size='xs'
        >xs</Radio>
        <Radio
          {...component.args}
          size='sm'
        >sm</Radio>
        <Radio
          {...component.args}
          size='md'
        >md</Radio>
        <Radio
          {...component.args}
          size='lg'
        >lg</Radio>
        <Radio
          {...component.args}
          size='xl'
        >xl</Radio>
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
        <Radio
          {...component.args}
          color='primary'
        >primary</Radio>
        <Radio
          {...component.args}
          color='neutral'
        >neutral</Radio>
        <Radio
          {...component.args}
          color='success'
        >success</Radio>
        <Radio
          {...component.args}
          color='warning'
        >warning</Radio>
        <Radio
          {...component.args}
          color='danger'
        >danger</Radio>
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
    variant: "tonal",
    color: "warning",
    children: "Warning",
    size: 'md',
    outlined: true,
  },
  decorators: [
    (Story, component) => {
      return <ControlGroup
        options={options}
        defaultValue={'master'}
        onChange={(value) => {
          console.log(value)
        }}
        render={(options) => {
          return <Grid spacing={4}>
            {options.map((option, i) => {
              const { selected, label, ...rest } = option
              return <Radio
                checked={selected}
                {...component.args}
                {...rest}
                styleOverrides={(props) => {
                  return css`
                    
                  `
                }}
              >{label}</Radio>
            })}
          </Grid>
        }}
      />
    },
  ],
};

export const CustomGroups: Story = {
  args: {
    size: 'md',
    color: 'success',
  },
  decorators: [
    (Story, component) => {
      return <ControlGroup
        options={options}
        defaultValue={'master'}
        onChange={(value) => {
          console.log(value)
        }}
        render={(options) => {
          return <Grid spacing={8} direction='column'>
            {options.map((option, i) => {
              const { selected, label, ...rest } = option
              return <Radio
                icon={<CheckCircle />}
                checked={selected}
                {...component.args}
                {...rest}
                styleOverrides={(props) => {
                  const { prefixClass: _, color } = props
                  let palette = theme.vars.palette[color!]
                  if (palette === undefined) {
                    palette = theme.vars.palette.primary
                  }
                  const surface = theme.vars.palette.surface.main
                  return css`
                    height: 60px;
                    width: 200px;
                    border: solid 1px ${surface};
                    border-radius: ${theme.vars.radius.md};
                    box-shadow: ${theme.vars.shadow.sm};
                    cursor: pointer;
                    & .${_} {
                      position: absolute;
                      right: calc(var(--Radio-baseSize) * -2px + 2px);
                      top: calc(var(--Radio-baseSize) * -2px + 2px);
                      z-index: 1;
                      &::before {
                        display: none;
                      }
                      & .${_}-inner {
                        outline: none;
                        border-width: 0px;
                        background: none;
                        & svg {
                          fill: ${palette.main};
                        }
                      }
                    }
                    & .${_}-action {
                      inset: -1px;
                    }
                    &:has(\.${_}-element:focus-visible) {
                      outline-style: solid;
                      outline-offset: 2px;
                      outline-width: 2px;
                      outline-color: ${palette.main};
                    }
                    &:has(\.${_}-element:checked) {
                      .${_} .${_}-inner { 
                        background: ${theme.vars.palette.surface.body};
                      }
                      .${_}-action {
                        border-radius: inherit;
                        border: solid 2px ${palette.main};
                      }
                    }
                  `
                }}
              ><div style={{ position: "absolute", inset: 0, padding: "8px" }}>{label}</div></Radio>
            })}
          </Grid>
        }}
      />
    },
  ],
};

