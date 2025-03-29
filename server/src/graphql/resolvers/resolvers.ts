import { db } from '../../db/db'
import { comments, posts } from '../../db/schema'
import { eq } from 'drizzle-orm'
import { ConflictError } from '../../errors/conflict-error'

export const GraphQLResolvers = {
  Query: {
    getPost: async (_: any, { id }: { id: string }) => {
      const result = await db.select().from(posts).where(eq(posts.id, id))
      return result
    },
    getPosts: async () => {
      const result = await db.select().from(posts)
      return result
    },
    getComments: async (_: any, { postId }: { postId: string }) => {
      const result = await db
        .select()
        .from(comments)
        .where(eq(comments.postId, postId))

      return result
    }
  },
  Mutation: {
    createPost: async (
      _: any,
      { title, content }: { title: string; content: string }
    ) => {
      const data = {
        title,
        content
      }
      const [samePost] = await db
        .select()
        .from(posts)
        .where(eq(posts.title, title))

      if (samePost) {
        throw new ConflictError('This title already exists')
      }

      const [newPost] = await db.insert(posts).values(data).returning()

      return newPost
    },
    updatePost: async (
      _: any,
      { id, title, content }: { id: string; title: string; content: string }
    ) => {
      const [currentPost] = await db
        .select()
        .from(posts)
        .where(eq(posts.id, id))

      if (!currentPost) {
        throw new Error('This Post does not exists')
      }

      const [samePost] = await db
        .select()
        .from(posts)
        .where(eq(posts.title, title))

      if (samePost) {
        throw new ConflictError('This title already exists')
      }

      const data = {
        title,
        content,
        updatedAt: new Date()
      }

      const [post] = await db
        .update(posts)
        .set(data)
        .where(eq(posts.id, id))
        .returning()

      return post
    },
    deletePost: async (_: any, { id }: { id: string }) => {
      const [currentPost] = await db
        .select()
        .from(posts)
        .where(eq(posts.id, id))

      if (!currentPost) {
        throw new Error('This Post does not exists')
      }

      await db.delete(posts).where(eq(posts.id, id))
      return true
    },

    createComment: async (
      _: any,
      { postId, content }: { postId: string; content: string }
    ) => {
      const [currentPost] = await db
        .select()
        .from(posts)
        .where(eq(posts.id, postId))

      if (!currentPost) {
        throw new Error('This Post does not exists')
      }

      const data = {
        postId,
        content
      }

      const [comment] = await db.insert(comments).values(data).returning()

      return comment
    },
    updateComment: async (
      _: any,
      { id, content }: { id: string; content: string }
    ) => {
      const [currentComment] = await db
        .select()
        .from(comments)
        .where(eq(comments.id, id))

      if (!currentComment) {
        throw new Error('This Comment  does not exists')
      }

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
    },
    deleteComment: async (_: any, { id }: { id: string }) => {
      const [currentComment] = await db
        .select()
        .from(comments)
        .where(eq(comments.id, id))

      if (!currentComment) {
        throw new Error('This Comment  does not exists')
      }

      await db.delete(comments).where(eq(comments.id, id))

      return true
    }
  }
}
