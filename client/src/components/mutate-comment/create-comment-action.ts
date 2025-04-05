'use server'

import { createCommentAPI } from '@/api/comment-api'

type Props = {
  postId: string
  comment: string
}

export async function createCommentAction({ comment, postId }: Props) {
  try {
    const dto = {
      postId,
      content: comment
    }

    const data = await createCommentAPI(dto)

    return { message: '', status: 'success', data }
  } catch (e) {
    return { message: '', status: 'error' }
  }
}
