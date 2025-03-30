import { Button } from '@/components/ui/button'
import { DeleteButton } from '../delete-button'
import { cn } from '@/lib/utils'
import { FaCircleCheck, FaCircleXmark, FaPencil } from 'react-icons/fa6'

type Props = {
  commentId: string
  onClickEdit: () => void
  isEditMode: boolean
  onAcceptChange: () => void
  onRejectChange: () => void
}

export function Actions({
  onClickEdit,
  commentId,
  isEditMode,
  onAcceptChange,
  onRejectChange
}: Props) {
  return (
    <div
      className={cn(
        'absolute bottom-[-42px] left-2',
        'border-1 border-t-0 p-1.5 rounded-b-2xl',
        'flex gap-1'
      )}
    >
      {isEditMode ? (
        <>
          <Button variant="ghost" size="icon" onClick={onRejectChange}>
            <FaCircleXmark color="#E7020B" />
          </Button>
          <Button variant="ghost" size="icon" onClick={onAcceptChange}>
            <FaCircleCheck color="#009966" />
          </Button>
        </>
      ) : (
        <>
          <DeleteButton id={commentId} />
          <Button variant="ghost" size="icon" onClick={onClickEdit}>
            <FaPencil />
          </Button>
        </>
      )}
    </div>
  )
}
