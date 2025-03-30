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
        <Button variant="destructive"> Delete Post</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Post</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this Post? This action cannot be
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
