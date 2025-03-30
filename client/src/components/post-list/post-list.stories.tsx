import type { Meta, StoryObj } from '@storybook/react'
import { PostList } from './'

const meta: Meta<typeof PostList> = {
  title: 'Components/Post List',
  component: PostList,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PostList>

export const Default: Story = {}
