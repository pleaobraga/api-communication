import { eq } from 'drizzle-orm'
import { db } from '../db/db'
import { comments } from '../db/schema'

export async function getCommentService(postId: string) {
  const postslist = await db
    .select()
    .from(comments)
    .where(eq(comments.postId, postId))

  return postslist
}
