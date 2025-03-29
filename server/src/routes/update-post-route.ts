import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { string, z } from 'zod'
import { createPostService } from '../services/create-post-service'
import { ConflictError } from '../errors/conflict-error'
import { updatePostService } from '../services/update-post-service'

export const updatePostRoute: FastifyPluginAsyncZod = async (app) => {
  app.put(
    '/posts',
    {
      schema: {
        tags: ['posts'],
        description: 'Update Post',
        body: z.object({
          title: z.string(),
          content: z.string(),
          id: string()
        }),
        response: {
          200: z.object({
            id: z.string(),
            title: z.string(),
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
        const { content, title, id } = request.body

        const updatedPost = await updatePostService({ content, title, id })

        return reply.status(200).send(updatedPost)
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
