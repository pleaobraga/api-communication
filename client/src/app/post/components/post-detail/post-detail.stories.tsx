import type { Meta, StoryObj } from '@storybook/react'
import { PostDetail } from '.'
import { generateFakePost } from '@/mocks/post.mock'

const meta: Meta<typeof PostDetail> = {
  title: 'Components/Post/Post Detail',
  component: PostDetail,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PostDetail>

const post = generateFakePost()

export const Default: Story = {
  args: post
}
