import dayjs from 'dayjs'

import { Post } from '@/@types'
import { SanitizedContent } from '@/components/sanitized-content'

type Props = Post

export function PostDetail({ content, lastUpdate, title }: Props) {
  const formattedLastUpdate = dayjs(lastUpdate).format('DD/MM/YYYY')

  return (
    <div className={'w-full p-4 flex flex-col gap-4'}>
      <h1 className="text-3xl font-semibold">{title}</h1>
      <div className="flex flex-col gap-2">
        <SanitizedContent content={content} />
        <div className="flex gap-2 justify-start items-center text-sm font-semibold text-gray-500">
          <span>Last Updated:</span> {formattedLastUpdate}
        </div>
      </div>
    </div>
  )
}
