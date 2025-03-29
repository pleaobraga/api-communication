import { eq } from 'drizzle-orm'
import { db } from '../db/db'
import { posts } from '../db/schema'

type Params = string

export async function deletePostService(postId: Params) {
  await db.delete(posts).where(eq(posts.id, postId))
}
