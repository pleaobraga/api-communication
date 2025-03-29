import Fastify from 'fastify'
import { env } from './env'

const server = Fastify({ logger: true })

const start = async () => {
  try {
    await server.listen({ port: Number(env.PORT) })
    console.log(`Server is running on http://localhost:${env.PORT}`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}

start()
