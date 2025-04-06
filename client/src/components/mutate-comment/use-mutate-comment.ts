import { toast } from 'sonner'
import { useState } from 'react'

import { Comment } from '@/@types'
import { createCommentAction } from './create-comment-action'
import { updateCommentAction } from './update-comment-action'

type Props = {
  postId: string
  defaultComment: string
  onSuccess: (comment: Comment) => void
  id?: string
}

export function useMutateComment({
  id = '',
  postId,
  onSuccess,
  defaultComment
}: Props) {
  const [comment, setComment] = useState(defaultComment)
  const [isLoading, setIsLoading] = useState(false)

  const handleCreateComment = async () => {
    if (comment === '') {
      return
    }

    setIsLoading(true)

    const { status, data } = await createCommentAction({ comment, postId })

    setIsLoading(false)

    if (status === 'error') {
      toast.error('Request failed. Please try again')
      return
    }

    toast.success('Comment created successfully')
    setComment('')
    data && onSuccess(data.comment)
  }

  const handleUpdateComment = async () => {
    if (comment === '' || id === '') {
      return
    }

    setIsLoading(true)

    const { status, data } = await updateCommentAction({ comment, id })

    setIsLoading(false)

    if (status === 'error') {
      toast.error('Request failed. Please try again')
      return
    }

    toast.success('Comment updated successfully')
    data && onSuccess(data?.comment)
  }

  return {
    comment,
    setComment,
    handleCreateComment,
    handleUpdateComment,
    isLoading
  }
}
