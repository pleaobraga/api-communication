'use server'

import { updatePostAPI } from '@/api'
import { FormState } from '@/components/post-form'

export async function updadatePostAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  try {
    const id = data.get('id')?.toString() ?? ''

    const dto = {
      id,
      title: data.get('title')?.toString(),
      description: data.get('description')?.toString(),
      content: data.get('content')?.toString()
    }

    await updatePostAPI(id, dto)

    return { message: '', status: 'success' }
  } catch {
    return { message: '', status: 'error' }
  }
}
