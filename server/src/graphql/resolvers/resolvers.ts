import { createCommentService } from '../../services/comments/create-comment-service'
import { updateCommentService } from '../../services/comments/update-comment-service'
import { deleteCommentService } from '../../services/comments/delete-comment-service'
import { deletePostService } from '../../services/posts/delete-post-service'
import { updatePostService } from '../../services/posts/update-post-service'
import { createPostService } from '../../services/posts/create-post-service'
import { getPostService } from '../../services/posts/get-post-service'
import { getSinglePostService } from '../../services/posts/get-single-post-service'

export const GraphQLResolvers = {
  Query: {
    getPost: async (_: any, { id }: { id: string }) =>
      await getSinglePostService(id),

    getPosts: async () => await getPostService()
  },
  Mutation: {
    createPost: async (
      _: any,
      { title, content }: { title: string; content: string }
    ) => await createPostService({ title, content }),

    updatePost: async (
      _: any,
      { id, title, content }: { id: string; title: string; content: string }
    ) => await updatePostService({ id, title, content }),

    deletePost: async (_: any, { id }: { id: string }) =>
      await deletePostService(id),

    createComment: async (
      _: any,
      { postId, content }: { postId: string; content: string }
    ) => await createCommentService({ postId, content }),

    updateComment: async (
      _: any,
      { id, content }: { id: string; content: string }
    ) => updateCommentService({ id, content }),

    deleteComment: async (_: any, { id }: { id: string }) =>
      await deleteCommentService(id)
  }
}
