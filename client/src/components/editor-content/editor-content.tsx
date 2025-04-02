'use client'

import { useEditor, EditorContent as TipTapEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { MenuBar } from './menu-bar'

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
        class:
          'prose prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none'
      }
    },
    content: content ?? '<p>Hello World! 🌎️</p>'
  })

  return (
    <div>
      <MenuBar editor={editor} />
      <div className="flex flex-col gap-4 border">
        <TipTapEditor editor={editor} />
      </div>
    </div>
  )
}
