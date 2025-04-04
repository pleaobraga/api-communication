'use server'

import { FormState, formValidationAction } from '@/components/post-form'

export async function createPostAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const validation = await formValidationAction(prevState, data)

  if (validation.status !== 'success') {
    return validation
  }

  try {
    const dto = {
      title: data.get('title'),
      description: data.get('description'),
      content: data.get('content')
    }

    const response = await fetch(`http://localhost:3002/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dto)
    })

    if (!response.ok) {
      throw new Error('Failed to fetch post')
    }

    return { message: '', status: 'success' }
  } catch (e) {
    return { message: '', status: 'error' }
  }
}
