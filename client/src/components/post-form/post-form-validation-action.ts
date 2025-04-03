'use server'

import { postFormSchema } from './post-form.schema'

export type FormState = {
  message: string
  fields?: Record<string, string>
  issues?: string[]
}

export async function formValidationAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data)
  const parsed = postFormSchema.safeParse(formData)

  if (!parsed.success) {
    const fields: Record<string, string> = {}
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString()
    }

    console.log('issues', parsed.error.issues)

    return {
      message: 'Invalid form data',
      fields,
      issues: parsed.error.issues.map((issue) => issue.message)
    }
  }

  return { message: 'sucess' }
}
