'use server'

import { deleteCommentAPI } from '@/api'

type Props = {
  id: string
}

export async function deleteCommentAction({
  id
}: Props): Promise<{ message: string; status: 'error' | 'success' }> {
  try {
    await deleteCommentAPI(id)

    return { message: '', status: 'success' }
  } catch {
    return { message: '', status: 'error' }
  }
}
