'use client'

import { useState } from 'react'
import dayjs from 'dayjs'
import { FaPencil } from 'react-icons/fa6'

import { Comment as CommentType } from '@/@types'
import { Button } from '@/components/ui/button'
import { DeleteButton } from './components/delete-button'
import { CreateComment } from '../create-comment'

type Props = CommentType

export function Comment({ content, id, lastUpdate, postId }: Props) {
  const [newContent, setNewContent] = useState(content)
  const [isEditMode, setIsEditMode] = useState(false)

  const formattedLastUpdate = dayjs(lastUpdate).format('MMM YYYY')

  const handleEdit = () => {
    setIsEditMode(true)
  }

  const handleRejectChanges = () => {
    setNewContent(content)
    setIsEditMode(false)
  }

  if (isEditMode) {
    return (
      <div className="flex gap-4 items-center">
        <div className="w-full">
          <CreateComment
            postId={postId}
            defaultComment={content}
            onSuccess={() => {}}
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
        <p>{newContent}</p>
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
        <DeleteButton id={id} />
      </div>
    </div>
  )
}
