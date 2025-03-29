import fastify from 'fastify'
import { env } from './env'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider
} from 'fastify-type-provider-zod'
import fastifyCors from '@fastify/cors'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'

import { createPostRoute } from './routes/posts/create-post-route'
import { getPostRoute } from './routes/posts/get-post-route'
import { deletePostRoute } from './routes/posts/delete-post-route'
import { updatePostRoute } from './routes/posts/update-post-route'
import { createCommentRoute } from './routes/comments/create-comment-route'
import { getCommentRoute } from './routes/comments/get-comment-route'
import { deleteCommentRoute } from './routes/comments/delete-comment-route'
import { updateCommentRoute } from './routes/comments/update-comment-route'
import mercurius from 'mercurius'
import { GraphQLSchema } from './graphql/schema/schema'
import { GraphQLResolvers } from './graphql/resolvers/resolvers'

const restApp = fastify({ logger: true }).withTypeProvider<ZodTypeProvider>()

restApp.register(fastifyCors, {
  origin: '*'
})

restApp.setValidatorCompiler(validatorCompiler)
restApp.setSerializerCompiler(serializerCompiler)

restApp.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'api-communication-server',
      version: '1.0.0'
    }
  },
  transform: jsonSchemaTransform
})

restApp.register(fastifySwaggerUi, {
  routePrefix: '/docs'
})

restApp.register(createPostRoute)
restApp.register(getPostRoute)
restApp.register(deletePostRoute)
restApp.register(updatePostRoute)

restApp.register(createCommentRoute)
restApp.register(getCommentRoute)
restApp.register(deleteCommentRoute)
restApp.register(updateCommentRoute)

restApp.listen({ port: Number(env.REST_PORT) }, (err) => {
  if (err) {
    restApp.log.error(err)
    process.exit(1)
  }
  console.log(`REST API running on port ${env.REST_PORT}`)
})

const gqlApp = fastify({ logger: true })
gqlApp.register(mercurius, {
  schema: GraphQLSchema,
  resolvers: GraphQLResolvers,
  graphiql: true
})

gqlApp.listen({ port: Number(env.GRAPHQL_PORT) }, (err) => {
  if (err) {
    gqlApp.log.error(err)
    process.exit(1)
  }
  console.log(`GraphQL API running on port ${env.GRAPHQL_PORT}`)
})
