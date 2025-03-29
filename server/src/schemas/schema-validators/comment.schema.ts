import { z } from 'zod'

export const commentSchema = z.object({
  id: z.string(),
  postId: z.string(),
  content: z.string(),
  createdAt: z.date(),
  lastUpdate: z.date()
})
