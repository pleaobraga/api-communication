import { db } from '../../db/db'
import { posts } from '../../db/schema'
import { eq } from 'drizzle-orm'
import { ConflictError } from '../../errors/conflict-error'

type Params = {
  title: string
  content: string
  description?: string
}

export async function createPostService({
  content,
  title,
  description
}: Params) {
  const data = {
    title,
    content,
    description
  }

  const [samePost] = await db.select().from(posts).where(eq(posts.title, title))

  if (samePost) {
    throw new ConflictError('This title already exists')
  }

  const [newPost] = await db.insert(posts).values(data).returning()

  return newPost
}
