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

  const handleSuccess = (comment: Comment) => {
    setComments((state) => [...state, comment])
  }

  return (
    <div className="flex flex-col gap-10 mt-12">
      <MutateComment postId={postId} onSuccess={handleSuccess} />
      <CommentList comments={comments} />
    </div>
  )
}
