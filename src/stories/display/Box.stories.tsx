import React from 'react'
import type { Meta, StoryObj } from '@storybook/react';
import theme from '@/style'
import { Box, Button } from '@/components';
import { ToWords } from 'to-words';

const toWords = new ToWords({
  localeCode: 'en-US',
  converterOptions: {
    currency: false,
    ignoreDecimal: false,
    ignoreZeroCurrency: false,
    doNotAddOnly: false,
  }
});

let words = toWords.convert(210000);
console.log(words)
const meta = {
  title: 'Display/Box',
  component: Box,
} satisfies Meta<typeof Box>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'text',
    styleOverrides: { border: 'dashed 1px #aaa', padding: "32px", borderRadius: "8px", background: theme.vars.palette.surface.body }
  }
};


export const Flex: Story = {
  args: {
    children: <>
      <Button size='xs' icon color="neutral" variant='text' outlined  >
        👍
      </Button >
      <Button size='xs' icon color="neutral" variant='text' outlined >
        🏖
      </Button>
      <Button size='xs' icon color="neutral" variant='text' outlined >
        😍
      </Button>
      <Button variant='filled' color='primary' styleOverrides={{ marginInlineStart: "auto" }} >Clear</Button>
    </>,
    styleOverrides: { display: "flex", gap: "8px", flex: 1, alignItems: 'center' }
  }
};