import dayjs from 'dayjs'

import { Post } from '@/@types'
import { SanitizedContent } from '@/components/sanitized-content'
import { Button } from '@/components/ui/button'
import { DeleteButton } from './components/delete-button'
import Link from 'next/link'

type Props = Post

export function PostDetail({ id, content, lastUpdate, title }: Props) {
  const formattedLastUpdate = dayjs(lastUpdate).format('MMMM DD,YYYY')

  return (
    <div className={'w-full flex flex-col gap-4'}>
      <h1 className="text-3xl font-bold">{title}</h1>
      <span className="text-sm font-regular text-slate-500">
        {formattedLastUpdate}
      </span>
      <div className="flex gap-2 mt-2.5">
        <Button size="sm" asChild>
          <Link href={`/post/edit/${id}`}>Edit Post</Link>
        </Button>
        <DeleteButton id={id} />
      </div>
      <SanitizedContent content={content} />
    </div>
  )
}
