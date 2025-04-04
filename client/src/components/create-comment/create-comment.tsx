'use client'

import { Comment } from '@/@types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCreateComment } from './use-create-comment'

type Props = {
  postId: string
  defaultComment?: string
  onSuccess: (comment: Comment) => void
}

export function CreateComment({
  postId,
  defaultComment = '',
  onSuccess
}: Props) {
  const { comment, handleCreateComment, isLoading, setComment } =
    useCreateComment({ postId, defaultComment, onSuccess })

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
        onClick={handleCreateComment}
        disabled={isLoading}
      >
        {isLoading ? 'loading...' : 'comment'}
      </Button>
    </div>
  )
}
