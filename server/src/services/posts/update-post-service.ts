import { db } from '../../db/db'
import { posts } from '../../db/schema'
import { eq } from 'drizzle-orm'
import { ConflictError } from '../../errors/conflict-error'

type Params = {
  title: string
  content: string
  id: string
}

export async function updatePostService({ content, title, id }: Params) {
  const [currentPost] = await db.select().from(posts).where(eq(posts.id, id))

  if (!currentPost) {
    throw new Error('This Post does not exists')
  }

  const [samePost] = await db.select().from(posts).where(eq(posts.title, title))

  if (samePost) {
    throw new ConflictError('This title already exists')
  }

  const data = {
    title,
    content,
    updatedAt: new Date()
  }

  const [post] = await db
    .update(posts)
    .set(data)
    .where(eq(posts.id, id))
    .returning()

  return post
}
