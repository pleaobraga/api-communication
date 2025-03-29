import { db } from '../../db/db'
import { comments, posts } from '../../db/schema'
import { eq } from 'drizzle-orm'

type Params = {
  content: string
  postId: string
}

export async function createCommentService({ content, postId }: Params) {
  const [currentPost] = await db
    .select()
    .from(posts)
    .where(eq(posts.id, postId))

  if (!currentPost) {
    throw new Error('This Post does not exists')
  }

  const data = {
    postId,
    content
  }

  const [comment] = await db.insert(comments).values(data).returning()

  return comment
}
