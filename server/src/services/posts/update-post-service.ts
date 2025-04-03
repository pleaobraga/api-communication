import { db } from '../../db/db'
import { posts } from '../../db/schema'
import { eq, and, ne } from 'drizzle-orm'
import { ConflictError } from '../../errors/conflict-error'

type Params = {
  title: string
  content: string
  id: string
  description?: string
}

export async function updatePostService({
  content,
  title,
  id,
  description
}: Params) {
  const [currentPost] = await db.select().from(posts).where(eq(posts.id, id))

  if (!currentPost) {
    throw new Error('This Post does not exists')
  }

  const [samePost] = await db
    .select()
    .from(posts)
    .where(and(eq(posts.title, title), ne(posts.id, id)))

  if (samePost) {
    throw new ConflictError('This title already exists')
  }

  const data = {
    title,
    content,
    description,
    updatedAt: new Date()
  }

  const [post] = await db
    .update(posts)
    .set(data)
    .where(eq(posts.id, id))
    .returning()

  return post
}
