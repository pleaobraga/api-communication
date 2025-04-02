'use client'

import { Input } from '@/components/ui/input'
import { FormEvent, useState } from 'react'
import { EditorContent } from '../editor-content'
import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'

type Props = {
  defaultTitle?: string
  defaultContent?: string
  defaultDescription?: string
}

export function PostForm({
  defaultContent = '',
  defaultTitle = '',
  defaultDescription = ''
}: Props) {
  const [title, setTitle] = useState(defaultTitle)
  const [description, setDescription] = useState(defaultDescription)
  const [content, setContent] = useState(defaultContent)

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
