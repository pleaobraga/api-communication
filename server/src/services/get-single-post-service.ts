import { db } from '../db/db'
import { posts } from '../db/schema'
import { eq } from 'drizzle-orm'

export async function getSinglePostService(postId: string) {
  const postslist = await db.select().from(posts).where(eq(posts.id, postId))

  return postslist
}
