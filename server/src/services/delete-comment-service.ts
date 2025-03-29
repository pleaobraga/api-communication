import { eq } from 'drizzle-orm'
import { db } from '../db/db'
import { comments } from '../db/schema'

export async function deleteCommentService(commentId: string) {
  const [comment] = await db
    .select()
    .from(comments)
    .where(eq(comments.id, commentId))

  if (!comment) throw new Error('invalid id')

  await db.delete(comments).where(eq(comments.id, commentId))
}
