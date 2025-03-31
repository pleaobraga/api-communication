'use client'

import sanitizeHtml from 'sanitize-html'

type Props = {
  content: string
  classname?: string
}

export function SanitizedContent({ content, classname = '' }: Props) {
  const sanitizedHtml = sanitizeHtml(content, {
    allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'div'],
    allowedAttributes: { a: ['href'] }
  })

  return (
    <div
      className={classname}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  )
}
