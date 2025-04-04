import { toast } from 'sonner'
import { useState } from 'react'

import { Comment } from '@/@types'
import { createCommentAction } from './create-comment-action'
import { updateCommentAction } from './update-comment-action'

type Props = {
  postId: string
  defaultComment: string
  onSuccess: (comment: Comment) => void
  isEdition?: boolean
  id?: string
}

export function useMutateComment({
  id = '',
  postId,
  onSuccess,
  defaultComment,
  isEdition
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
    onSuccess(data.comment)
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
    onSuccess(data.comment)
  }

  return {
    comment,
    setComment,
    handleCreateComment,
    handleUpdateComment,
    isLoading
  }
}
