'use client'

import { Input } from '@/components/ui/input'
import { FormEvent, useState } from 'react'
import { EditorContent } from '../editor-content'
import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

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
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-6">
      <div>
        <Label htmlFor="title" className="font-medium">
          Title
        </Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <Label htmlFor="Description" className="font-medium">
          Description
        </Label>
        <Textarea
          id="Description"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <Label className="font-medium">Post Content</Label>
        <EditorContent content={content} />
      </div>

      <div className="flex gap-4 flex-row-reverse">
        <Button type="submit">Save</Button>
        <Button variant="outline" onClick={() => {}}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
