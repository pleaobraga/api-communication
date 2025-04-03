import { z } from 'zod'

const tagContentRegex = /<([a-zA-Z0-9\-]+)>\s*([^<>]+)\s*<\/\1>/

export const postFormSchema = z.object({
  title: z.string().trim().min(1, {
    message: 'Title is required'
  }),
  description: z.string(),
  content: z
    .string()
    .regex(tagContentRegex, {
      message: 'Post content is required'
    })
    .default('')
})
