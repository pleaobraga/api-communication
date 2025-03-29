import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getPostService } from '../services/get-post-service'
import { getSinglePostService } from '../services/get-single-post-service'

export const getPostRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/posts',
    {
      schema: {
        tags: ['posts'],
        description: 'Get Post',
        querystring: z.object({
          postId: z.string().optional()
        }),
        response: {
          200: z.object({
            posts: z.array(
              z.object({
                id: z.string(),
                title: z.string(),
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
        if (request.query.postId) {
          const posts = await getSinglePostService(request.query.postId)
          return reply.status(201).send({ posts })
        }

        const posts = await getPostService()

        return reply.status(201).send({ posts })
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
