import { eq } from 'drizzle-orm'
import { db } from '../../db/db'
import { comments, posts } from '../../db/schema'

export async function getCommentService(postId: string) {
  const [currentPost] = await db
    .select()
    .from(posts)
    .where(eq(posts.id, postId))

  if (!currentPost) {
    throw new Error('This Post does not exists')
  }

  const result = await db
    .select()
    .from(comments)
    .where(eq(comments.postId, postId))

  return result
}
