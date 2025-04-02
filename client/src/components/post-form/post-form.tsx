'use client'

import { Input } from '@/components/ui/input'
import { FormEvent, useState } from 'react'
import { EditorContent } from '../editor-content'

type Props = {
  onFormSubmit: () => void
  defaultTitle?: string
  defaultContent?: string
}

export function PostForm({
  onFormSubmit,
  defaultContent = '',
  defaultTitle = ''
}: Props) {
  const [title, setTitle] = useState(defaultTitle)
  const [content, setContent] = useState(defaultContent)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    onFormSubmit()
  }

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <EditorContent content={content} />
    </form>
  )
}
