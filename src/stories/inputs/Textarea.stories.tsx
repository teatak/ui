import React from 'react'
import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Textarea, Switch, Grid, GridItem, Button, Box } from '@/components'
import { Loading } from '@/icons'
import { css } from 'styled-components'

const meta = {
  title: 'Inputs/Textarea',
  component: Textarea,
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  args: {
    defaultValue: "Hello World",
    minRows: 2,
    maxRows: 8,
    disabled: false,
    outlined: false,
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
        <GridItem><Story args={{ ...component.args, defaultValue: "xs", size: 'xs' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: "sm", size: 'sm' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: "md", size: 'md' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: "lg", size: 'lg' }} /></GridItem>
        <GridItem><Story args={{ ...component.args, defaultValue: "xl", size: 'xl' }} /></GridItem>
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

const TextareaDecorators = (props: any) => {
  const [text, setText] = React.useState('');
  const addEmoji = (emoji: string) => () => setText(`${text}${emoji}`);
  return <Textarea
    {...props}
    placeholder="Type in here…"
    value={text}
    onChange={(event) => setText(event.target.value)}
    minRows={1}
    startDecorator={
      <Box styleOverrides={{ display: "flex", gap: "8px", flex: 1, alignItems: 'start' }}>
        <Button size='xs' icon color="neutral" variant='text' outlined onClick={addEmoji('👍')} >
          👍
        </Button >
        <Button size='xs' icon color="neutral" variant='text' outlined onClick={addEmoji('🏖')}>
          🏖
        </Button>
        <Button size='xs' icon color="neutral" variant='text' outlined onClick={addEmoji('😍')}>
          😍
        </Button>
        <Button variant='filled' color='primary' styleOverrides={{ marginInlineStart: "auto" }} onClick={() => {
          setText('')
        }}>Clear</Button>
      </Box >
    }
    endDecorator={
      <div style={{ marginInlineStart: "auto" }}>
        {text.length} character(s)
      </div >
    }
  />
}

export const Decorator: Story = {
  args: {
    outlined: false,
  },
  decorators: [
    (Story, component) => {
      return <TextareaDecorators {...component.args} />
    },
  ],
}
