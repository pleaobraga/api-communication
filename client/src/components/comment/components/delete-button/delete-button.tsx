import { Button } from '@/components/ui/button'
import { FaRegTrashCan } from 'react-icons/fa6'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from '@/components/ui/dialog'
import { toast } from 'sonner'
import { deleteCommentAction } from './delete-comment-action'
import { useState } from 'react'

type Props = {
  id: string
  handleDeleteSuccess: (id: string) => void
}

export function DeleteButton({ id, handleDeleteSuccess }: Props) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleDelete() {
    setIsLoading(true)

    const { status } = await deleteCommentAction({ id })

    setIsLoading(false)

    if (status === 'error') {
      toast.error('Request failed. Please try again')
      return
    }

    toast.success('Comment delete successfully')
    handleDeleteSuccess(id)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="text-red-500">
          <FaRegTrashCan />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Comment</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this comment? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary" disabled={isLoading}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="button" onClick={handleDelete} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
