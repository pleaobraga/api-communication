import { Post } from '@/@types'
import { faker } from '@faker-js/faker'
import { generateFakeComment } from './comment.mock'

export function generateFakePost(): Post {
  const now = new Date().toISOString()

  const paragraphs = faker.lorem.paragraphs(3)
  const comments = [
    generateFakeComment(),
    generateFakeComment(),
    generateFakeComment()
  ]

  return {
    id: faker.string.uuid(),
    title: faker.lorem.sentence(),
    content: paragraphs,
    createdAt: now,
    lastUpdate: now,
    comments
  }
}
