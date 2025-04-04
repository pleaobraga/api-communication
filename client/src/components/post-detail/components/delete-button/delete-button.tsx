'use client'

import { Button } from '@/components/ui/button'

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
import { deletePostAction } from './delete-post-action'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

type Props = {
  id: string
}

export function DeleteButton({ id }: Props) {
  const router = useRouter()

  async function handleDelete() {
    const { status } = await deletePostAction({ id })

    if (status === 'error') {
      toast('Request failed. Please try again')
      return
    }

    toast('Post delete successfully')
    router.push('/')
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Delete Post
        </Button>
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
          <Button type="button" onClick={handleDelete}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
