'use client'

import { useEditor, EditorContent as TipTapEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { MenuBar } from './menu-bar'
import { cn } from '@/lib/utils'

type Props = {
  content?: string
}

export function EditorContent({ content }: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Highlight
    ],
    editorProps: {
      attributes: {
        class: cn(
          'prose p-5 border focus:outline-none w-full max-w-full rounded-md',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'min-h-[20vh]'
        )
      }
    },
    content: content
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <div className="flex flex-col gap-4 ">
        <TipTapEditor editor={editor} />
      </div>
    </div>
  )
}
