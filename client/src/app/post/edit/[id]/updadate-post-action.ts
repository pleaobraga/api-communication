import { FormState, formValidationAction } from '@/components/post-form'

export async function updadatePostAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const validation = await formValidationAction(prevState, data)

  if (validation.message !== 'sucess') {
    return validation
  }

  try {
    const response = await fetch(`http://localhost:3002/posts`, {
      method: 'PUT',
      body: data
    })

    await response.json()

    return { message: 'Post Updated' }
  } catch {
    return { message: 'Error on update Post' }
  }
}
