import { Button } from '@/components/ui/button'
import { DeleteButton } from '../delete-button'
import { cn } from '@/lib/utils'
import { FaCircleCheck, FaCircleXmark, FaPencil } from 'react-icons/fa6'

type Props = {
  postId: string
  onClickEdit: () => void
  isEditMode: boolean
  onAcceptChange: () => void
  onRejectChange: () => void
}

export function Actions({
  onClickEdit,
  postId,
  isEditMode,
  onAcceptChange,
  onRejectChange
}: Props) {
  return (
    <div className={cn('flex gap-2 mt-2.5')}>
      {isEditMode ? (
        <>
          <Button variant="destructive" onClick={onRejectChange}>
            Reject
          </Button>
          <Button
            onClick={onAcceptChange}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Accept
          </Button>
        </>
      ) : (
        <>
          <Button className="bg-sky-500 hover:bg-sky-600" onClick={onClickEdit}>
            Edit Post
          </Button>
          <DeleteButton id={postId} />
        </>
      )}
    </div>
  )
}
