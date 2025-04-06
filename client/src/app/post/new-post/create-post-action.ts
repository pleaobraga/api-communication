'use server'

import { clientAPI } from '@/api'
import { FormState } from '@/components/post-form'

export async function createPostAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  try {
    const dto = {
      title: data.get('title')?.toString(),
      description: data.get('description')?.toString(),
      content: data.get('content')?.toString()
    }

    await clientAPI.createPostAPI(dto)

    return { message: '', status: 'success' }
  } catch (e) {
    return { message: '', status: 'error' }
  }
}
