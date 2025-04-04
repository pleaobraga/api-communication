import type { Meta, StoryObj } from '@storybook/react'
import { MutateComment } from '.'

const meta: Meta<typeof MutateComment> = {
  title: 'Components/Comment/Mutate Comment',
  component: MutateComment,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof MutateComment>

export const Default: Story = {}
