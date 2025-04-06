import type { Meta, StoryObj } from '@storybook/react'
import { PageHeader } from '.'

const meta: Meta<typeof PageHeader> = {
  title: 'Components/Page Header',
  component: PageHeader,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof PageHeader>

export const Default: Story = {}

export const WithTitle: Story = {
  args: {
    title: 'Title Page'
  }
}
