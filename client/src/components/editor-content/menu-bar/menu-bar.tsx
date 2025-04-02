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
    <div className="flex gap-2 flex-wrap p-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={
          editor.isActive('heading', { level: 1 })
            ? 'bg-slate-600 text-white '
            : ''
        }
      >
        H1
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={
          editor.isActive('heading', { level: 2 })
            ? 'bg-slate-600 text-white '
            : ''
        }
      >
        H2
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={
          editor.isActive('heading', { level: 3 })
            ? 'bg-slate-600 text-white '
            : ''
        }
      >
        H3
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
          editor.isActive('paragraph') ? 'bg-slate-600 text-white ' : ''
        }
      >
        Paragraph
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive('bold') ? 'bg-slate-600 text-white ' : ''}
      >
        Bold
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive('italic') ? 'bg-slate-600 text-white ' : ''}
      >
        Italic
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive('strike') ? 'bg-slate-600 text-white ' : ''}
      >
        Strike
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().toggleHighlight().run()}
        className={
          editor.isActive('highlight') ? 'bg-slate-600 text-white ' : ''
        }
      >
        Highlight
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={
          editor.isActive({ textAlign: 'left' })
            ? 'bg-slate-600 text-white '
            : ''
        }
      >
        Left
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={
          editor.isActive({ textAlign: 'center' })
            ? 'bg-slate-600 text-white '
            : ''
        }
      >
        Center
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={
          editor.isActive({ textAlign: 'right' })
            ? 'bg-slate-600 text-white '
            : ''
        }
      >
        Right
      </Button>
    </div>
  )
}
