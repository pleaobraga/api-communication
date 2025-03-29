import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getCommentService } from '../services/get-comment-service'

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
            comments: z.array(
              z.object({
                id: z.string(),
                postId: z.string(),
                content: z.string(),
                createdAt: z.date(),
                lastUpdate: z.date()
              })
            )
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

        const comments = await getCommentService(postId)

        return reply.status(201).send({ comments })
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
