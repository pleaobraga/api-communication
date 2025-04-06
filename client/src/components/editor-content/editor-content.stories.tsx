import type { Meta, StoryObj } from '@storybook/react'
import { EditorContent } from '.'

const meta: Meta<typeof EditorContent> = {
  title: 'Components/Editor Content',
  component: EditorContent,
  args: {
    content: '<p>Hello World!</p>'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof EditorContent>

export const Default: Story = {}

export const WithError: Story = {
  args: {
    hasError: true
  }
}
