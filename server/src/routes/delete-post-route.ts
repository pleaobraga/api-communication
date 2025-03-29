import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { deletePostService } from '../services/get-post-service copy'

export const deletePostRoute: FastifyPluginAsyncZod = async (app) => {
  app.delete(
    '/posts',
    {
      schema: {
        tags: ['posts'],
        description: 'Create Post',
        querystring: z.object({
          postId: z.string()
        }),
        response: {
          204: z.null(),
          409: z.object({
            error: z.object({
              message: z.string(),
              code: z.string()
            })
          }),
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
        const { postId } = request.query

        await deletePostService(postId)

        return reply.status(204).send()
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
