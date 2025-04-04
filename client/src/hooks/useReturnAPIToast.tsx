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
  const handleSuccess = () => {
    toast.success(successMessage)
    onSuccessCallBack()
  }

  const handleError = () => {
    toast.error(errorMessage)
  }

  useEffect(() => {
    if (status === 'success') {
      handleSuccess()
    }

    if (status === 'error') {
      handleError()
    }
  }, [status, isPendingAction])
}
