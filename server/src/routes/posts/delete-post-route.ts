import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { deletePostService } from '../../services/posts/delete-post-service'
import { errorSchema } from '../../schemas/schema-validators'

export const deletePostRoute: FastifyPluginAsyncZod = async (app) => {
  app.delete(
    '/posts',
    {
      schema: {
        tags: ['posts'],
        description: 'Create Post',
        querystring: z.object({
          id: z.string()
        }),
        response: {
          204: z.object({}),
          409: z.object({
            error: errorSchema
          }),
          500: z.object({
            error: errorSchema
          })
        }
      }
    },

    async (request, reply) => {
      try {
        const { id } = request.query

        await deletePostService(id)

        return reply.status(204).send({})
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
