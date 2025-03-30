import { Post } from '@/@types'
import { faker } from '@faker-js/faker'

export function generateFakePost(): Post {
  const now = new Date().toISOString()

  const paragraphs = faker.lorem.paragraphs(3)

  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: paragraphs,
    createdAt: now,
    lastUpdate: now
  }
}
