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
import { createPostRoute } from './routes/create-post-route'
import { getPostRoute } from './routes/get-post-route'
import { deletePostRoute } from './routes/delete-post-route'
import { updatePostRoute } from './routes/update-post-route'
import { createCommentRoute } from './routes/create-comment-route'
import { getCommentRoute } from './routes/get-comment-route'
import { deleteCommentRoute } from './routes/delete-comment-route'

const app = fastify({ logger: true }).withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*'
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'api-communication-server',
      version: '1.0.0'
    }
  },
  transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs'
})

app.register(createPostRoute)
app.register(getPostRoute)
app.register(deletePostRoute)
app.register(updatePostRoute)

app.register(createCommentRoute)
app.register(getCommentRoute)
app.register(deleteCommentRoute)

const start = async () => {
  try {
    await app.listen({ port: Number(env.PORT) })
    console.log(`Server is running on http://localhost:${env.PORT}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()
