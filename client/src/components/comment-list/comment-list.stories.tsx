import type { Meta, StoryObj } from '@storybook/react'
import { CommentList } from '.'
import { generateFakeComment } from '@/mocks/comment.mock'

const meta: Meta<typeof CommentList> = {
  title: 'Components/Comment/Comment List',
  component: CommentList,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CommentList>

const comment1 = generateFakeComment()
const comment2 = generateFakeComment()
const comment3 = generateFakeComment()

export const Default: Story = {
  args: {
    comments: [comment1, comment2, comment3]
  }
}
