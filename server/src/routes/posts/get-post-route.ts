import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { getPostService } from '../../services/posts/get-post-service'
import { getSinglePostService } from '../../services/posts/get-single-post-service'
import { errorSchema, postSchema } from '../../schemas/schema-validators'

export const getPostRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    '/posts',
    {
      schema: {
        tags: ['posts'],
        description: 'Get Post',
        querystring: z.object({
          id: z.string().optional()
        }),
        response: {
          200: z.object({
            posts: z.array(postSchema)
          }),
          500: z.object({
            error: errorSchema
          })
        }
      }
    },

    async (request, reply) => {
      try {
        if (request.query.id) {
          const posts = await getSinglePostService(request.query.id)
          return reply.status(200).send({ posts })
        }

        const posts = await getPostService()

        return reply.status(200).send({ posts })
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
