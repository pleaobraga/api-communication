import type { Meta, StoryObj } from '@storybook/react'
import { CreateComment } from '.'

const meta: Meta<typeof CreateComment> = {
  title: 'Components/Comment/Create Comment',
  component: CreateComment,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CreateComment>

export const Default: Story = {}
