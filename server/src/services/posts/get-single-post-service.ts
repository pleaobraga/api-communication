import { db } from '../../db/db'
import { comments, posts } from '../../db/schema'
import { eq, sql } from 'drizzle-orm'

export async function getSinglePostService(postId: string) {
  const postslist = await db
    .select({
      id: posts.id,
      title: posts.title,
      content: posts.content,
      description: posts.description,
      createdAt: posts.createdAt,
      lastUpdate: posts.lastUpdate,
      comments: sql<string>`COALESCE(
        json_agg(json_build_object(
          'id', ${comments.id},
          'postId', ${comments.postId},
          'content', ${comments.content},
          'createdAt', ${comments.createdAt},
          'lastUpdate', ${comments.lastUpdate}
        )) FILTER (WHERE ${comments.id} IS NOT NULL), '[]'
      )`
    })
    .from(posts)
    .leftJoin(comments, eq(comments.postId, posts.id))
    .where(eq(posts.id, postId))
    .groupBy(posts.id)

  return postslist
}
