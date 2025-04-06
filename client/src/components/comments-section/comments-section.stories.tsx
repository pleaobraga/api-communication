import type { Meta, StoryObj } from '@storybook/react'
import { CommentsSection } from '.'
import { generateFakeComment } from '@/mocks/comment.mock'

const meta: Meta<typeof CommentsSection> = {
  title: 'Components/Comment/Comments Section',
  component: CommentsSection,
  args: {
    postId: '1'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof CommentsSection>

const comment1 = generateFakeComment()
const comment2 = generateFakeComment()
const comment3 = generateFakeComment()

export const Default: Story = {
  args: {
    comments: [comment1, comment2, comment3]
  }
}
