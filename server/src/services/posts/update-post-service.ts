import { db } from '../../db/db'
import { posts } from '../../db/schema'
import { eq } from 'drizzle-orm'

type Params = {
  title: string
  content: string
  id: string
}

export async function updatePostService({ content, title, id }: Params) {
  const [existing] = await db.select().from(posts).where(eq(posts.id, id))
  if (!existing) throw new Error('Post not found')

  const [postUpdated] = await db
    .update(posts)
    .set({ content, title, lastUpdate: new Date() })
    .where(eq(posts.id, id))
    .returning()

  return postUpdated
}
