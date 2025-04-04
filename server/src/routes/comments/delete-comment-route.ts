import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { deleteCommentService } from '../../services/comments/delete-comment-service'
import { errorSchema } from '../../schemas/schema-validators'

export const deleteCommentRoute: FastifyPluginAsyncZod = async (app) => {
  app.delete(
    '/comments',
    {
      schema: {
        tags: ['comments'],
        description: 'Delete Comment',
        querystring: z.object({
          id: z.string()
        }),
        response: {
          204: z.object({}),
          500: z.object({
            error: errorSchema
          })
        }
      }
    },

    async (request, reply) => {
      try {
        const { id } = request.query

        await deleteCommentService(id)

        return reply.status(204).send({})
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
