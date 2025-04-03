'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

type Props = {
  status?: 'error' | 'success'
  successMessage: string
  errorMessage?: string
}

export function useReturnAPIToast({
  successMessage,
  errorMessage = 'There was an Error',
  status
}: Props) {
  console.log('status', status)

  const router = useRouter()

  const handleSuccess = () =>
    toast(successMessage, {
      action: {
        label: 'ok',
        onClick: () => router.push('/')
      }
    })

  const handleError = () => toast(errorMessage, {})

  useEffect(() => {
    if (status === 'success') {
      debugger
      handleSuccess()
    }

    if (status === 'error') {
      debugger
      handleError()
    }
  }, [status])
}
