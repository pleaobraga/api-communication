'use server'

import { FormState } from '@/components/post-form'

export async function updadatePostAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
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

    if (!response.ok) {
      throw new Error('Failed to fetch post')
    }

    return { message: '', status: 'success' }
  } catch {
    return { message: '', status: 'error' }
  }
}
