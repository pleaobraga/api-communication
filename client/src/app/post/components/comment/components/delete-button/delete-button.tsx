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

type Props = {
  id: string
}

export function DeleteButton({ id }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
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
            <Button type="button" variant="secondary">
              Cancel
            </Button>
          </DialogClose>
          <Button type="button">Delete</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
