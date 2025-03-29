import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { string, z } from 'zod'
import { updateCommentService } from '../services/update-comment-service'

export const updatePostRoute: FastifyPluginAsyncZod = async (app) => {
  app.put(
    '/comments',
    {
      schema: {
        tags: ['comments'],
        description: 'Update Post',
        body: z.object({
          content: z.string(),
          id: string()
        }),
        response: {
          200: z.object({
            id: z.string(),
            content: z.string(),
            createdAt: z.date(),
            lastUpdate: z.date()
          }),
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
        const { content, id } = request.body

        const updatedComment = await updateCommentService({ content, id })

        return reply.status(200).send(updatedComment)
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
