import { Button } from '@/components/ui/button'
import { DeleteButton } from '../delete-button'
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
    <div className="flex gap-1">
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
          <Button
            className="bg-sky-500 hover:bg-sky-600"
            variant="default"
            size="icon"
            onClick={onClickEdit}
          >
            <FaPencil />
          </Button>
          <DeleteButton id={commentId} />
        </>
      )}
    </div>
  )
}
