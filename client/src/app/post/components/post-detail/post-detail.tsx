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
  const formattedLastUpdate = dayjs(lastUpdate).format('DD/MM/YYYY')

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
      {isEditMode ? (
        <PostForm
          onFormSubmit={() => {}}
          defaultContent={content}
          defaultTitle={title}
        />
      ) : (
        <>
          <h1 className="text-3xl font-semibold">{title}</h1>{' '}
          <SanitizedContent content={content} />
        </>
      )}

      <div className="flex flex-col gap-2">
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
