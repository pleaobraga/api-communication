import { z } from 'zod'

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  description: z.string().nullable(),
  createdAt: z.date(),
  lastUpdate: z.date()
})
