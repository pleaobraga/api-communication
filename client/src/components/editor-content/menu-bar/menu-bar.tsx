import { Button } from '@/components/ui/button'
import { Editor } from '@tiptap/react'

type Props = {
  editor: Editor | null
}

export function MenuBar({ editor }: Props) {
  if (!editor) {
    return null
  }

  return (
    <div className="flex gap-2 flex-wrap py-2 pr-2">
      <Button
        variant="outline"
        type="button"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'bg-slate-600 text-white ' : ''}
      >
        Bold
      </Button>
      <Button
        variant="outline"
        type="button"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'bg-slate-600 text-white ' : ''}
      >
        Italic
      </Button>
      <Button
        variant="outline"
        type="button"
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'bg-slate-600 text-white ' : ''}
      >
        Strike
      </Button>
      <Button
        variant="outline"
        type="button"
        size="sm"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={
          editor.isActive('highlight') ? 'bg-slate-600 text-white ' : ''
        }
      >
        Highlight
      </Button>
    </div>
  )
}
