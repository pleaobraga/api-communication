import { eq } from 'drizzle-orm'
import { db } from '../db/db'
import { posts } from '../db/schema'

export async function deletePostService(postId: string) {
  await db.delete(posts).where(eq(posts.id, postId))
}
