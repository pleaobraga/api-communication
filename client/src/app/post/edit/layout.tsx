'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function PostLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <>
      <div className="self-end">
        <Button variant="secondary" size="sm" onClick={handleBack}>
          Back to posts detail
        </Button>
      </div>
      {children}
    </>
  )
}
