import { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { string, z } from 'zod'
import { updatePostService } from '../../services/posts/update-post-service'
import { errorSchema, postSchema } from '../../schemas/schema-validators'

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
        const { content, title, id } = request.body

        const updatedPost = await updatePostService({ content, title, id })

        return reply.status(200).send(updatedPost)
      } catch (e: any) {
        return reply.status(500).send({ error: e })
      }
    }
  )
}
