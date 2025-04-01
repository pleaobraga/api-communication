'use client'

import dayjs from 'dayjs'

import { Post } from '@/@types'
import { SanitizedContent } from '@/components/sanitized-content'
import { useState } from 'react'
import { Actions } from './components/actions'
import { PostForm } from './components/post-form'

type Props = Post

export function PostDetail({ id, content, lastUpdate, title }: Props) {
  const [isEditMode, setIsEditMode] = useState(false)
  const formattedLastUpdate = dayjs(lastUpdate).format('MMMM DD,YYYY')

  const handleEdit = () => {
    setIsEditMode(true)
  }

  const handleAcceptChanges = () => {
    setIsEditMode(false)
  }

  const handleRejectChanges = () => {
    setIsEditMode(false)
  }

  return (
    <div className={'w-full flex flex-col gap-4'}>
      <h1 className="text-3xl font-bold">{title}</h1>
      <span className="text-sm font-regular text-slate-500">
        {formattedLastUpdate}
      </span>
      <div className="flex flex-col gap-2">
        <Actions
          isEditMode={isEditMode}
          onAcceptChange={handleAcceptChanges}
          onClickEdit={handleEdit}
          onRejectChange={handleRejectChanges}
          postId={id}
        />
      </div>
      <SanitizedContent content={content} />
    </div>
  )
}
