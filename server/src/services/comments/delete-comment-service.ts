import { eq } from 'drizzle-orm'
import { db } from '../../db/db'
import { comments } from '../../db/schema'

export async function deleteCommentService(id: string) {
  const [currentComment] = await db
    .select()
    .from(comments)
    .where(eq(comments.id, id))

  if (!currentComment) {
    throw new Error('This Comment  does not exists')
  }

  await db.delete(comments).where(eq(comments.id, id))

  return true
}
