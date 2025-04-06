'use server'

import { clientAPI } from '@/api'

type Props = {
  id: string
}

export async function deletePostAction({
  id
}: Props): Promise<{ message: string; status: 'error' | 'success' }> {
  try {
    await clientAPI.deletePostAPI(id)
    return { message: '', status: 'success' }
  } catch {
    return { message: '', status: 'error' }
  }
}
