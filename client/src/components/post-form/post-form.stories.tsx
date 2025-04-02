import type { Meta, StoryObj } from '@storybook/react'
import { PostForm } from '.'
import { generateFakePost } from '@/mocks/post.mock'

const meta: Meta<typeof PostForm> = {
  title: 'Components/Post/Post Form',
  component: PostForm,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PostForm>

const post = generateFakePost()

export const Default: Story = {}
