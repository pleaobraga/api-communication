import type { Meta, StoryObj } from '@storybook/react'
import { PostListItem } from './'

const meta: Meta<typeof PostListItem> = {
  title: 'Components/Post List Item',
  component: PostListItem,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PostListItem>

export const Default: Story = {}
