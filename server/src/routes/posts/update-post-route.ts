import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { updatePostService } from '../../services/posts/update-post-service'
import { errorSchema, postSchema } from '../../schemas/schema-validators'

export const updatePostRoute: FastifyPluginAsyncZod = async (app) => {
  app.put(
    '/posts',
    {
      schema: {
        tags: ['posts'],
        description: 'Update Post',
        querystring: z.object({
          id: z.string()
        }),
        body: z.object({
          title: z.string(),
          content: z.string(),
          description: z.string().nullable()
        }),
        response: {
          200: postSchema,
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
        const { content, title, description } = request.body

        debugger

        const updatedPost = await updatePostService({
          content,
          title,
          id,
          description: description ?? ''
        })

        return reply.status(200).send(updatedPost)
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
