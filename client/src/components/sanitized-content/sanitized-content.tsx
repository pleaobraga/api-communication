'use client'

import { cn, sanitizeText } from '@/lib/utils'

type Props = {
  content: string
  className?: string
}

export function SanitizedContent({ content, className = '' }: Props) {
  const sanitizedHtml = sanitizeText(content)

  return (
    <div
      className={cn('prose  w-full max-w-full', className)}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  )
}
