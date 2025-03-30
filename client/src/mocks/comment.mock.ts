import { Comment } from '@/@types'
import { faker } from '@faker-js/faker'

export function generateFakeComment(): Comment {
  const now = new Date().toISOString()

  const content = faker.lorem.paragraphs(1)

  return {
    id: faker.string.uuid(),
    postId: faker.string.uuid(),
    content,
    createdAt: now,
    lastUpdate: now
  }
}
