import dayjs from 'dayjs'
import DOMPurify from 'dompurify'

import { Post } from '@/@types'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type Props = Post

export function PostListItem({ content, lastUpdate, title, id }: Props) {
  const formattedLastUpdate = dayjs(lastUpdate).format('DD/MM/YYYY')

  const sanitizedHtml = DOMPurify.sanitize(content)

  return (
    <Link
      href={`/post/${id}`}
      className={cn(
        'cursor-pointer w-full p-4 flex flex-col gap-4 border-2 rounded-2xl',
        'hover:bg-gray-100'
      )}
    >
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="flex flex-col gap-2">
        <div
          className="line-clamp-2"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
        <div className="flex gap-2 justify-start items-center text-sm font-semibold text-gray-500">
          <span>Last Updated:</span> {formattedLastUpdate}
        </div>
      </div>
    </Link>
  )
}
