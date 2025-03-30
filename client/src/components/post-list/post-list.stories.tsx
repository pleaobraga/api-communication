import type { Meta, StoryObj } from '@storybook/react'
import { PostList } from './'
import { generateFakePost } from '@/mocks/post.mock'

const meta: Meta<typeof PostList> = {
  title: 'Components/Post/Post List',
  component: PostList,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PostList>

const post1 = generateFakePost()
const post2 = generateFakePost()
const post3 = generateFakePost()

export const Default: Story = {
  args: {
    posts: [post1, post2, post3]
  }
}
