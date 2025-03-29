import { db } from '../../db/db'
import { comments } from '../../db/schema'
import { eq } from 'drizzle-orm'

type Params = {
  content: string
  id: string
}

export async function updateCommentService({ content, id }: Params) {
  const [existing] = await db.select().from(comments).where(eq(comments.id, id))
  if (!existing) throw new Error('Comment not found')

  const data = {
    content,
    lastUpdate: new Date()
  }

  const [comment] = await db
    .update(comments)
    .set(data)
    .where(eq(comments.id, id))
    .returning()

  return comment
}
