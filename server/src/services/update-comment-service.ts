import { db } from '../db/db'
import { comments } from '../db/schema'
import { eq } from 'drizzle-orm'

type Params = {
  content: string
  id: string
}

export async function updateCommentService({ content, id }: Params) {
  const [existing] = await db.select().from(comments).where(eq(comments.id, id))
  if (!existing) throw new Error('Comment not found')

  const [commentUpdated] = await db
    .update(comments)
    .set({ content, lastUpdate: new Date() })
    .where(eq(comments.id, id))
    .returning()

  return commentUpdated
}
