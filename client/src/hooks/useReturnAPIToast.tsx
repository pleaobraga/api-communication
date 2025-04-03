'use client'

import { useEffect } from 'react'
import { toast } from 'sonner'

type Props = {
  status?: 'error' | 'success' | 'loading'
  onSuccessCallBack: () => void
  successMessage: string
  errorMessage?: string
  isPendingAction: boolean
}

export function useReturnAPIToast({
  successMessage,
  errorMessage = 'Request failed. Please try again',
  onSuccessCallBack,
  status,
  isPendingAction
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
  }, [status, isPendingAction])
}
