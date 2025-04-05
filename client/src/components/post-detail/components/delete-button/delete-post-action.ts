'use server'

import { deletePostAPI } from '@/api'

type Props = {
  id: string
}

export async function deletePostAction({
  id
}: Props): Promise<{ message: string; status: 'error' | 'success' }> {
  try {
    await deletePostAPI(id)
    return { message: '', status: 'success' }
  } catch {
    return { message: '', status: 'error' }
  }
}
