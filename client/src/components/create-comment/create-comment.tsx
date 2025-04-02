'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormEvent, useState } from 'react'

type Props = {
  postId: string
  defaultComment?: string
}

export function CreateComment({ postId, defaultComment = '' }: Props) {
  const [comment, setComment] = useState(defaultComment)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form className="flex items-center gap-4" onSubmit={handleSubmit}>
      <Input
        className="text-slate-400 placeholder:text-slate-400 bg-gray-200 py-3 px-4"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment..."
      />
      <Button className="bg-blue-500 hover:bg-blue-500/90" size="sm">
        Comment
      </Button>
    </form>
  )
}
