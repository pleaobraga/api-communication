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
        querystring: z.object({
          id: string()
        }),
        body: z.object({
          content: z.string()
        }),
        response: {
          200: z.object({
            comment: commentSchema
          }),
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
        const { content } = request.body

        const updatedComment = await updateCommentService({ content, id })

        return reply.status(200).send({ comment: updatedComment })
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
