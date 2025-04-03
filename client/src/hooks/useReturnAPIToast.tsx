'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

type Props = {
  status?: 'error' | 'success'
  onSuccessCallBack: () => void
  successMessage: string
  errorMessage?: string
}

export function useReturnAPIToast({
  successMessage,
  errorMessage = 'Request failed. Please try again',
  onSuccessCallBack,
  status
}: Props) {
  const handleSuccess = () =>
    toast(successMessage, {
      action: {
        label: 'ok',
        onClick: onSuccessCallBack
      }
    })

  const handleError = () => toast(errorMessage)

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
