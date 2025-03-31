import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { FormEvent, useState } from 'react'

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
      <Textarea value={content} onChange={(e) => setContent(e.target.value)} />
    </form>
  )
}
