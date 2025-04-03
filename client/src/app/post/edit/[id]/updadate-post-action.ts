'use server'

import { FormState, formValidationAction } from '@/components/post-form'

export async function updadatePostAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const validation = await formValidationAction(prevState, data)

  if (validation.status !== 'success') {
    return validation
  }

  try {
    const dto = {
      id: data.get('id'),
      title: data.get('title'),
      description: data.get('description'),
      content: data.get('content')
    }

    const response = await fetch(`http://localhost:3002/posts?id=${dto.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dto)
    })

    await response.json()

    return { message: 'Post Updated', status: 'success' }
  } catch {
    return { message: 'Error on update Post', status: 'error' }
  }
}
