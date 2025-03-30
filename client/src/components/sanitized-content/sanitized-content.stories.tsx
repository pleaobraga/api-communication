import type { Meta, StoryObj } from '@storybook/react'
import { SanitizedContent } from '.'
import { faker } from '@faker-js/faker'

const meta: Meta<typeof SanitizedContent> = {
  title: 'Components/Sanitized Content',
  component: SanitizedContent,
  args: {
    content: faker.lorem.paragraphs(3, '</br>\n')
  },
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof SanitizedContent>

export const Default: Story = {
  args: {
    content: faker.lorem.paragraphs(3, '</br>\n')
  }
}
