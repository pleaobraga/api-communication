import dayjs from 'dayjs'

import { Post } from '@/@types'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FaRegMessage, FaRegFileLines, FaRegCalendar } from 'react-icons/fa6'

import { SanitizedContent } from '../sanitized-content'

type Props = Pick<
  Post,
  'id' | 'title' | 'comments' | 'lastUpdate' | 'description'
>

export function PostListItem({
  lastUpdate,
  title,
  id,
  comments,
  description
}: Props) {
  const formattedLastUpdate = dayjs(lastUpdate).format('MMM DD')

  return (
    <Link
      href={`/post/${id}`}
      className={cn(
        'cursor-pointer w-full p-4 flex gap-4 rounded-2xl',
        'hover:bg-slate-100'
      )}
    >
      <div className="flex items-center justify-center p-4 bg-gray-200 rounded-xl">
        <FaRegFileLines className="w-6 h-6" />
      </div>
      <div className="flex justify-between gap-4 w-full">
        <div className="flex flex-col">
          <h1 className="text-lg font-medium">{title}</h1>
          <span className="line-clamp-1 text-slate-400 font-normal">
            {description}
          </span>
        </div>
        <div className="flex flex-col justify-center items-end min-w-20">
          <div className="flex gap-1 items-center justify-center font-light">
            {formattedLastUpdate}
          </div>
          <div className="flex gap-1 items-center font-medium text-slate-500">
            <FaRegMessage /> {comments?.length}
          </div>
        </div>
      </div>
    </Link>
  )
}
