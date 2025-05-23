import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { createPostService } from '../../services/posts/create-post-service'
import { ConflictError } from '../../errors/conflict-error'
import { errorSchema } from '../../schemas/schema-validators'

export const createPostRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    '/posts',
    {
      schema: {
        tags: ['posts'],
        description: 'Create Post',
        body: z.object({
          title: z.string(),
          content: z.string(),
          description: z.string()
        }),
        response: {
          201: z.object({}),
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
        const { content, title, description } = request.body

        await createPostService({ content, title, description })

        return reply.status(201).send({})
      } catch (e: any) {
        if (e instanceof ConflictError) {
          return reply.status(409).send({
            error: {
              message: e.message,
              code: e.code
            }
          })
        }

        return reply.code(500).send({ error: e })
      }
    }
  )
}
