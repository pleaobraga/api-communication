import { db } from '../../db/db'
import { comments, posts } from '../../db/schema'
import { eq, sql } from 'drizzle-orm'

export async function getSinglePostService(postId: string) {
  const postslist = await db
    .select({
      id: posts.id,
      title: posts.title,
      content: posts.content,
      createdAt: posts.createdAt,
      lastUpdate: posts.lastUpdate,
      comments: sql`COALESCE(json_agg(${comments}) FILTER (WHERE ${comments.id} IS NOT NULL), '[]')`
    })
    .from(posts)
    .leftJoin(comments, eq(comments.postId, posts.id))
    .where(eq(posts.id, postId))
    .groupBy(posts.id)

  return postslist
}
