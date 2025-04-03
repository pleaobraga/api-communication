'use client'

import { cn } from '@/lib/utils'
import sanitizeHtml from 'sanitize-html'

type Props = {
  content: string
  classname?: string
}

export function SanitizedContent({ content, classname = '' }: Props) {
  const sanitizedHtml = sanitizeHtml(content, {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'div', 'h1', 'h2', 'h3'],
    allowedAttributes: { a: ['href'] }
  })

  return (
    <div
      className={cn('prose', classname)}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  )
}
