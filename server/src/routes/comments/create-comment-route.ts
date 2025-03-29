import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { createCommentService } from '../../services/comments/create-comment-service'
import { errorSchema } from '../../schemas/schema-validators'

export const createCommentRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/comments',
    {
      schema: {
        tags: ['comments'],
        description: 'Create comment',
        body: z.object({
          content: z.string(),
          postId: z.string()
        }),
        response: {
          201: z.null(),
          500: z.object({
            error: errorSchema
          })
        }
      }
    },

    async (request, reply) => {
      try {
        const { content, postId } = request.body

        await createCommentService({ content, postId })

        return reply.status(201).send()
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
