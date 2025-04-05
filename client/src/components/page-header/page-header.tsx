import Link from 'next/link'
import { Button } from '../ui/button'

type Props = {
  title: string
}

export function PageHeader({ title }: Props) {
  return (
    <div className="flex justify-between">
      <h1 className="text-3xl font-bold">{title}</h1>
      <Button variant="secondary" size="sm" asChild>
        <Link href="/">Back to posts</Link>
      </Button>
    </div>
  )
}
