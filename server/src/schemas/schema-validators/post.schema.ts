import { z } from 'zod'

export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  createdAt: z.date(),
  lastUpdate: z.date()
})
