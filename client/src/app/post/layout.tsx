import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PostLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div>
        <Button variant="secondary" size="sm" asChild>
          <Link href="/">Back to posts</Link>
        </Button>
      </div>
      {children}
    </>
  )
}
