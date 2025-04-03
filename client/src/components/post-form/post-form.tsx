'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

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
import { FaXmark } from 'react-icons/fa6'

type Props = {
  content?: string
  title?: string
  description?: string
}

type PostFormType = z.output<typeof postFormSchema>

import { postFormSchema } from './post-form.schema'
import { useFormState } from 'react-dom'
import { z } from 'zod'
import { postFormSubmitAction } from './post-form-submit-action'

export function PostForm({
  content = '',
  title = '',
  description = ''
}: Props) {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useFormState(postFormSubmitAction, {
    message: ''
  })

  const form = useForm<PostFormType>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title,
      description,
      content,
      ...(state?.fields ?? {})
    }
  })

  const handleBack = () => {
    router.back()
  }

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
        <form
          ref={formRef}
          action={formAction}
          onSubmit={form.handleSubmit(() => formRef.current?.submit())}
          className="flex flex-col gap-6"
        >
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
                    <EditorContent
                      content={value}
                      onChange={onChange}
                      hasError={!!error}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex gap-4 flex-row-reverse">
            <Button type="submit">Save</Button>
            <Button variant="outline" onClick={handleBack}>
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </>
  )
}
