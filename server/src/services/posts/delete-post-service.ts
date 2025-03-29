import { eq } from 'drizzle-orm'
import { db } from '../../db/db'
import { posts } from '../../db/schema'

export async function deletePostService(postId: string) {
  const [post] = await db.select().from(posts).where(eq(posts.id, postId))

  if (!post) throw new Error('his Post does not exists')

  await db.delete(posts).where(eq(posts.id, postId))

  return true
}
