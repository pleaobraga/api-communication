import { Comment as CommentType } from '@/@types'
import { SanitizedContent } from '@/components/sanitized-content'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'

import { FaRegTrashCan, FaPencil } from 'react-icons/fa6'

type Props = CommentType

export function Comment({ content }: Props) {
  const [isShowingActions, setIsShowingActions] = useState(false)

  return (
    <div
      className="relative p-2"
      onMouseEnter={() => setIsShowingActions(true)}
      onMouseLeave={() => setIsShowingActions(false)}
    >
      <div className="flex border-1 p-4">
        <SanitizedContent content={content} />
        {isShowingActions && (
          <div
            className={cn(
              'absolute bottom-[-42px] left-2',
              'border-1 p-1.5 rounded-b-2xl',
              'flex gap-1'
            )}
          >
            <Button variant="ghost" size="icon">
              <FaRegTrashCan />
            </Button>
            <Button variant="ghost" size="icon">
              <FaPencil />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
