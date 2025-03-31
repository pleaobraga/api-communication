'use client'

import { Comment as CommentType } from '@/@types'
import { SanitizedContent } from '@/components/sanitized-content'

import { useState } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { Actions } from './components/actions'

type Props = CommentType

export function Comment({ content, id }: Props) {
  const [newContent, setNewContent] = useState(content)
  const [isEditMode, setIsEditMode] = useState(false)

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewContent(e.target.value)
  }

  const handleEdit = () => {
    setIsEditMode(true)
  }

  const handleAcceptChanges = () => {
    setIsEditMode(false)
  }

  const handleRejectChanges = () => {
    setNewContent(content)
    setIsEditMode(false)
  }

  return (
    <div className="flex flex-col gap-2 border-1 p-4">
      {isEditMode ? (
        <Textarea onChange={handleTextChange} value={newContent} />
      ) : (
        <SanitizedContent content={newContent} />
      )}

      <Actions
        commentId={id}
        onClickEdit={handleEdit}
        isEditMode={isEditMode}
        onAcceptChange={handleAcceptChanges}
        onRejectChange={handleRejectChanges}
      />
    </div>
  )
}
