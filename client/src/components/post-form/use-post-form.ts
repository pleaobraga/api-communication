import { useReturnAPIToast } from '@/hooks/use-return-api-toast'
import { useActionState, useRef } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { postFormSchema } from './post-form.schema'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { sanitizeText } from '@/lib/utils'

export type FormState = {
  message: string
  fields?: Record<string, string>
  issues?: string[]
  status?: 'success' | 'error'
}

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
  const editorRef = useRef<{ getContent: () => string } | null>(null)

  const enhancedServerAction = async (prevState: FormState, data: FormData) => {
    if (id) {
      data.append('id', id)
    }
    return serverAction(prevState, data)
  }

  const [state, formAction, isPending] = useActionState(enhancedServerAction, {
    message: ''
  })

  const handleRedirect = () => {
    const url = id ? `/post/${id}` : '/'
    router.push(url)
  }

  const handleBack = () => {
    router.back()
  }

  useReturnAPIToast({
    status: state.status,
    successMessage,
    onSuccessCallBack: handleRedirect,
    isPendingAction: isPending
  })

  const form = useForm<PostFormType>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title,
      description: description || '',
      content: content || '',
      ...(state?.fields ?? {})
    }
  })

  const handleAction = (formData: FormData) => {
    const contentValue = editorRef.current?.getContent() ?? ''
    const sanitizeContent = sanitizeText(contentValue)

    formData.set('content', sanitizeContent)
    formAction(formData)
  }

  return {
    formRef,
    state,
    form,
    handleBack,
    isPending,
    editorRef,
    handleAction
  }
}
