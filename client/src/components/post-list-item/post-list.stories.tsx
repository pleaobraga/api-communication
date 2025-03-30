import type { Meta, StoryObj } from '@storybook/react'
import { PostListItem } from './'
import { generateFakePost } from '@/mocks/post.mock'

const meta: Meta<typeof PostListItem> = {
  title: 'Components/Post/Post List Item',
  component: PostListItem,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PostListItem>

const post = generateFakePost()

export const Default: Story = {
  args: post
}
