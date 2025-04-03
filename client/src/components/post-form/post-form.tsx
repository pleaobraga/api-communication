'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import React, { useActionState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { FaXmark } from 'react-icons/fa6'

import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { EditorContent } from '../editor-content'
import { Button } from '../ui/button'
import { postFormSchema } from './post-form.schema'
import { FormState } from './post-form-validation-action'
import { useReturnAPIToast } from '@/hooks/useReturnAPIToast'

type Props = {
  content?: string
  title?: string
  description?: string
  id?: string
  serverAction: (prevState: FormState, data: FormData) => Promise<FormState>
}

type PostFormType = z.infer<typeof postFormSchema>

export function PostForm({
  content = '',
  title = '',
  description = '',
  id = '',
  serverAction
}: Props) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useActionState(serverAction, {
    message: ''
  })

  const handleBack = () => {
    router.back()
  }

  useReturnAPIToast({
    status: state.status,
    successMessage: 'Post Updated successfully',
    onSuccessCallBack: handleBack
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

  return (
    <>
      <div className="mt-[-20px]">
        {state?.message !== '' && !state.issues && (
          <div className="text-red-500">{state.message}</div>
        )}
        {state?.issues && (
          <div className="text-red-500">
            <ul>
              {state.issues.map((issue) => (
                <li key={issue} className="flex gap-1 items-center">
                  <FaXmark fill="red" />
                  {issue}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Form {...form}>
        <form ref={formRef} action={formAction} className="flex flex-col gap-6">
          <div>
            <FormField
              control={form.control}
              name="id"
              render={({ field }) => (
                <FormItem className="hidden">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <FormField
              control={form.control}
              name="content"
              render={({
                field: { onChange, value },
                fieldState: { error }
              }) => (
                <FormItem className="w-full">
                  <FormLabel>Post Content</FormLabel>
                  <FormControl>
                    <div>
                      <EditorContent
                        content={value}
                        onChange={onChange}
                        hasError={!!error}
                      />

                      {/* Hidden input to ensure content is sent when JavaScript is disabled */}
                      <input type="hidden" name="content" value={value} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4 flex-row-reverse">
            <Button
              type="button"
              onClick={form.handleSubmit(() => {
                formRef.current?.requestSubmit()
              })}
            >
              Save
            </Button>
            <Button variant="outline" type="button" onClick={handleBack}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
