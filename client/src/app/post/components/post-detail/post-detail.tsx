'use client'

import dayjs from 'dayjs'

import { Post } from '@/@types'
import { SanitizedContent } from '@/components/sanitized-content'
import { useState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Actions } from './components/actions'

type Props = Post

export function PostDetail({ id, content, lastUpdate, title }: Props) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [newContent, setNewContent] = useState(content)

  const formattedLastUpdate = dayjs(lastUpdate).format('DD/MM/YYYY')

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
    <div className={'w-full p-4 flex flex-col gap-4'}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="flex flex-col gap-2">
        {isEditMode ? (
          <Textarea onChange={handleTextChange} value={newContent} />
        ) : (
          <SanitizedContent content={newContent} />
        )}
        <div className="flex gap-2 justify-start items-center text-sm font-semibold text-gray-500">
          <span>Last Updated:</span> {formattedLastUpdate}
        </div>
        <Actions
          isEditMode={isEditMode}
          onAcceptChange={handleAcceptChanges}
          onClickEdit={handleEdit}
          onRejectChange={handleRejectChanges}
          postId={id}
        />
      </div>
    </div>
  )
}
