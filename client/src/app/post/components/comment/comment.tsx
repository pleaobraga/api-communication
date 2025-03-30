import { Comment as CommentType } from '@/@types'
import { SanitizedContent } from '@/components/sanitized-content'

import { useState } from 'react'

import { Textarea } from '@/components/ui/textarea'
import { Actions } from './components/actions'

type Props = CommentType

export function Comment({ content, id }: Props) {
  const [isShowingActions, setIsShowingActions] = useState(false)
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
    <div
      className="relative p-2"
      onMouseEnter={() => setIsShowingActions(true)}
      onMouseLeave={() => setIsShowingActions(false)}
    >
      <div className="flex border-1 p-4">
        {isEditMode ? (
          <Textarea onChange={handleTextChange} value={newContent} />
        ) : (
          <SanitizedContent content={newContent} />
        )}
        {isEditMode && (
          <Actions
            commentId={id}
            onClickEdit={handleEdit}
            isEditMode={isEditMode}
            onAcceptChange={handleAcceptChanges}
            onRejectChange={handleRejectChanges}
          />
        )}
        {!isEditMode && isShowingActions && (
          <Actions
            commentId={id}
            onClickEdit={handleEdit}
            isEditMode={isEditMode}
            onAcceptChange={handleAcceptChanges}
            onRejectChange={handleRejectChanges}
          />
        )}
      </div>
    </div>
  )
}
