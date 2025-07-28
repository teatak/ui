import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { FormInner } from './FormInner'

const meta = {
  title: 'Inputs/Form',
  component: FormInner,
} satisfies Meta<typeof FormInner>

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
}
