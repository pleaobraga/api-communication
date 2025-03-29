import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { deleteCommentService } from '../services/delete-comment-service'

export const deleteCommentRoute: FastifyPluginAsyncZod = async (app) => {
  app.delete(
    '/comments',
    {
      schema: {
        tags: ['comments'],
        description: 'Delete Comment',
        querystring: z.object({
          commentId: z.string()
        }),
        response: {
          204: z.null(),
          500: z.object({
            error: z.object({
              message: z.string().optional(),
              code: z.string().optional()
            })
          })
        }
      }
    },

    async (request, reply) => {
      try {
        const { commentId } = request.query

        await deleteCommentService(commentId)

        return reply.status(204).send()
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
