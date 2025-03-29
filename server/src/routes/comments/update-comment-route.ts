import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { string, z } from 'zod'
import { updateCommentService } from '../../services/comments/update-comment-service'
import { commentSchema, errorSchema } from '../../schemas/schema-validators'

export const updateCommentRoute: FastifyPluginAsyncZod = async (app) => {
  app.put(
    '/comments',
    {
      schema: {
        tags: ['comments'],
        description: 'Update Comment',
        body: z.object({
          content: z.string(),
          id: string()
        }),
        response: {
          200: commentSchema,
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
        const { content, id } = request.body

        const updatedComment = await updateCommentService({ content, id })

        return reply.status(200).send(updatedComment)
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
