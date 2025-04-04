'use client'

import { Comment as CommentType } from '@/@types'
import dayjs from 'dayjs'
import { useState } from 'react'

type Props = Omit<CommentType, 'createdAt'>

export function useComment({ content, id, lastUpdate, postId }: Props) {
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

  return {
    handleRejectChanges,
    handleEdit,
    formattedLastUpdate,
    newContent,
    isEditMode
  }
}
