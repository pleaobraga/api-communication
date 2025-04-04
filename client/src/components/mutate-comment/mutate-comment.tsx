'use client'

import { Comment } from '@/@types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useMutateComment } from './use-mutate-comment'

type Props = {
  postId: string
  defaultComment?: string
  onSuccess: (comment: Comment) => void
  isEdition?: boolean
  id?: string
}

export function MutateComment({
  postId,
  id = '',
  defaultComment = '',
  onSuccess,
  isEdition
}: Props) {
  const {
    comment,
    handleCreateComment,
    isLoading,
    setComment,
    handleUpdateComment
  } = useMutateComment({ postId, defaultComment, onSuccess, id })

  console.log('isEdition', isEdition)

  return (
    <div className="flex items-center gap-4">
      <Input
        className="text-slate-400 placeholder:text-slate-400 bg-gray-200 py-3 px-4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <Button
        className="bg-blue-500 hover:bg-blue-500/90"
        size="sm"
        onClick={isEdition ? handleUpdateComment : handleCreateComment}
        disabled={isLoading}
      >
        {isLoading ? 'loading...' : 'comment'}
      </Button>
    </div>
  )
}
