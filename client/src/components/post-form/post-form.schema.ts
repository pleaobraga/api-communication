import { z } from 'zod'

const tagContentRegex = /<([a-zA-Z0-9\-]+)>\s*([^<>]+)\s*<\/\1>/

export const postFormSchema = z.object({
  id: z.string().nullable(),
  title: z.string().trim().min(1, {
    message: 'Title is required'
  }),
  description: z.string(),
  content: z
    .string()
    .min(1, { message: 'Post content is required' })
    .regex(tagContentRegex, {
      message: 'Post content is required'
    })
})
