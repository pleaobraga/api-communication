'use client'

import { useEditor, EditorContent as TipTapEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import { MenuBar } from './menu-bar'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'

type Props = {
  content?: string
  hasError?: boolean
  editorRef: React.MutableRefObject<{ getContent: () => string } | null>
  onChange?: (value: string) => void
}

export function EditorContent({
  content,
  hasError,
  editorRef,
  onChange
}: Props) {
  const editor = useEditor({
    extensions: [StarterKit, Highlight],
    editorProps: {
      attributes: {
        class: cn(
          'prose p-5 border focus:outline-none w-full max-w-full rounded-md',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          hasError &&
            'ring-destructive/20 dark:aria-invalid:ring-destructive/40 border-destructive focus-visible:border-destructive focus-visible:ring-destructive/40 ',
          'min-h-[20vh]'
        )
      }
    },
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML())
    },
    immediatelyRender: typeof window !== 'undefined'
  })

  useEffect(() => {
    if (editor && content) {
      editor.commands.setContent(content)
    }
  }, [content, editor])

  useEffect(() => {
    if (editor) {
      editorRef.current = {
        getContent: () => editor.getHTML() || ''
      }
    }
  }, [editor, editorRef])
  return (
    <div>
      <MenuBar editor={editor} />
      <div className="flex flex-col gap-4 ">
        <TipTapEditor editor={editor} />
      </div>
    </div>
  )
}
