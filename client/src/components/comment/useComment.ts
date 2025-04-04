'use client'

import { Comment as CommentType } from '@/@types'
import dayjs from 'dayjs'
import { useState } from 'react'

type Props = Pick<CommentType, 'lastUpdate'> & {}

export function useComment({ lastUpdate }: Props) {
  const [isEditMode, setIsEditMode] = useState(false)

  const formattedLastUpdate = dayjs(lastUpdate).format('MMM YYYY')

  const handleEdit = () => {
    setIsEditMode(true)
  }

  const handleRejectChanges = () => {
    exitEditMode()
  }

  const exitEditMode = () => {
    setIsEditMode(false)
  }

  return {
    handleRejectChanges,
    handleEdit,
    formattedLastUpdate,
    isEditMode,
    exitEditMode
  }
}
