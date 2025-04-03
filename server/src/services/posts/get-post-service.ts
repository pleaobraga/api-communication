import { sql, eq } from 'drizzle-orm'
import { db } from '../../db/db'
import { comments, posts } from '../../db/schema'

export async function getPostService() {
  const postslist = await db
    .select({
      id: posts.id,
      title: posts.title,
      content: posts.content,
      description: posts.description,
      createdAt: posts.createdAt,
      lastUpdate: posts.lastUpdate,
      comments: sql`COALESCE(json_agg(${comments}) FILTER (WHERE ${comments.id} IS NOT NULL), '[]')`
    })
    .from(posts)
    .leftJoin(comments, eq(comments.postId, posts.id))
    .groupBy(posts.id)

  return postslist
}
