import { useReturnAPIToast } from '@/hooks/useReturnAPIToast'
import { FormState } from './post-form-validation-action'
import { useActionState, useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { postFormSchema } from './post-form.schema'
import { z } from 'zod'
import { useRouter } from 'next/navigation'

type Props = {
  content?: string
  title?: string
  description?: string
  id?: string
  serverAction: (prevState: FormState, data: FormData) => Promise<FormState>
  successMessage: string
}

type PostFormType = z.infer<typeof postFormSchema>

export function usePostForm({
  serverAction,
  successMessage,
  content,
  description,
  id,
  title
}: Props) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction, isPending] = useActionState(serverAction, {
    message: ''
  })

  const handleBack = () => {
    router.back()
  }

  useReturnAPIToast({
    status: state.status,
    successMessage,
    onSuccessCallBack: handleBack,
    isPendingAction: isPending
  })

  const form = useForm<PostFormType>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      id: id ?? '',
      title,
      description: description || '',
      content: content || '',
      ...(state?.fields ?? {})
    }
  })

  return {
    formRef,
    formAction,
    state,
    form,
    handleBack,
    isPending
  }
}
