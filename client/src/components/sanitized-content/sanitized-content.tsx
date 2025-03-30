import DOMPurify from 'dompurify'

type Props = {
  content: string
  classname?: string
}

export function SanitizedContent({ content, classname = '' }: Props) {
  const sanitizedHtml = DOMPurify.sanitize(content)

  return (
    <div
      className={classname}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  )
}
