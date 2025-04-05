'use server'

import { updateCommentAPI } from '@/api'

type Props = {
  id: string
  comment: string
}

export async function updateCommentAction({ comment, id }: Props) {
  try {
    const dto = {
      content: comment
    }

    const data = await updateCommentAPI(id, dto)

    return { message: '', status: 'success', data }
  } catch (e) {
    return { message: '', status: 'error' }
  }
}
