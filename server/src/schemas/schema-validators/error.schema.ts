import { z } from "zod";

export const errorSchema = z.object({
  message: z.string().optional(),
  code: z.string().optional()
})
