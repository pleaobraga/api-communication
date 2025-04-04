'use client'

import { FaPencil } from 'react-icons/fa6'

import { Comment as CommentType } from '@/@types'
import { Button } from '@/components/ui/button'
import { DeleteButton } from './components/delete-button'
import { MutateComment } from '../mutate-comment'
import { useComment } from './useComment'

type Props = Omit<CommentType, 'createdAt'> & {
  handleUpdatedSuccess: (comment: CommentType) => void
  handleDeleteSuccess: (id: string) => void
}

export function Comment({
  content,
  id,
  lastUpdate,
  postId,
  handleDeleteSuccess,
  handleUpdatedSuccess
}: Props) {
  const {
    formattedLastUpdate,
    handleEdit,
    handleRejectChanges,
    isEditMode,
    exitEditMode
  } = useComment({ lastUpdate })

  if (isEditMode) {
    return (
      <div className="flex gap-4 items-center">
        <div className="w-full">
          <MutateComment
            id={id}
            postId={postId}
            defaultComment={content}
            onSuccess={(comment: CommentType) => {
              handleUpdatedSuccess(comment)
              exitEditMode()
            }}
            isEdition
          />
        </div>
        <Button size="sm" variant="outline" onClick={handleRejectChanges}>
          Cancel
        </Button>
      </div>
    )
  }

  return (
    <div className="flex gap-4 group justify-between">
      <div className="flex flex-col gap-1 font-normal text-sm">
        <p>{content}</p>
        <span className="text-slate-500">{formattedLastUpdate}</span>
      </div>
      <div className="flex gap-1 invisible group-hover:visible">
        <Button
          className="text-blue-500"
          variant="ghost"
          size="icon"
          onClick={handleEdit}
        >
          <FaPencil />
        </Button>
        <DeleteButton id={id} handleDeleteSuccess={handleDeleteSuccess} />
      </div>
    </div>
  )
}
