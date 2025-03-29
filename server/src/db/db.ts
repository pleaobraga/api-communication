import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

import { env } from '../env'
import * as schema from './schema'

// Initialize PostgreSQL pool connection
export const client = new Pool({
  connectionString: env.DATABASE_URL
})

export const db = drizzle(client, { schema, logger: env.ENV === 'dev' })
