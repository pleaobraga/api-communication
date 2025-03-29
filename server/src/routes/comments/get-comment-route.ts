import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getCommentService } from '../../services/comments/get-comment-service'
import { commentSchema, errorSchema } from '../../schemas/schema-validators'

export const getCommentRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/comments',
    {
      schema: {
        tags: ['comments'],
        description: 'Get Comments for a post',
        querystring: z.object({
          postId: z.string()
        }),
        response: {
          200: z.object({
            comments: z.array(commentSchema)
          }),
          500: z.object({
            error: errorSchema
          })
        }
      }
    },

    async (request, reply) => {
      try {
        const { postId } = request.query

        const comments = await getCommentService(postId)

        return reply.status(201).send({ comments })
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
