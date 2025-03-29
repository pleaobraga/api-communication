import { db } from '../../db/db'
import { posts } from '../../db/schema'

export async function getPostService() {
  const postslist = await db.select().from(posts)

  return postslist
}
