import type { Meta, StoryObj } from '@storybook/react'
import { Comment } from '.'
import { generateFakeComment } from '@/mocks/comment.mock'

const meta: Meta<typeof Comment> = {
  title: 'Components/Comment/Comment',
  component: Comment,
  args: generateFakeComment(),
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Comment>

export const Default: Story = {}
