import type { Meta, StoryObj } from '@storybook/react'
import { SanitizedContent } from '.'

const meta: Meta<typeof SanitizedContent> = {
  title: 'Components/Sanitized Content',
  component: SanitizedContent,
  args: {
    content: '<p>paragrahph 1</p><p>paragrahph 2</p><p>paragrahph 3</p>'
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof SanitizedContent>

export const Default: Story = {}
