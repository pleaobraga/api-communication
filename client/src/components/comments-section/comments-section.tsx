'use client'

import { Comment } from '@/@types'
import { MutateComment } from '../mutate-comment'
import { CommentList } from '../comment-list'
import { useState } from 'react'

type Props = {
  comments: Comment[]
  postId: string
}

export function CommentsSection({ comments: defaulComents, postId }: Props) {
  const [comments, setComments] = useState(defaulComents)

  const handleCreatedSuccess = (comment: Comment) => {
    setComments((state) => [...state, comment])
  }

  const handleUpdatedSuccess = (comment: Comment) => {
    setComments((state) => {
      const currentIndex = state.findIndex(
        (current) => current.id === comment.id
      )

      if (currentIndex < 0) {
        return [...state]
      }

      state[currentIndex] = comment

      return [...state]
    })
  }

  const handleDeleteSuccess = (id: string) => {
    setComments((state) => {
      const newState = state.filter((current) => current.id !== id)

      return [...newState]
    })
  }

  return (
    <div className="flex flex-col gap-10 mt-12">
      <MutateComment postId={postId} onSuccess={handleCreatedSuccess} />
      <CommentList
        comments={comments}
        handleDeleteSuccess={handleDeleteSuccess}
        handleUpdatedSuccess={handleUpdatedSuccess}
      />
    </div>
  )
}
