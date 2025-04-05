'use client'

import React from 'react'

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
import { FormState, usePostForm } from './use-post-form'

type Props = {
  content?: string
  title?: string
  description?: string
  id?: string
  serverAction: (prevState: FormState, data: FormData) => Promise<FormState>
  successMessage: string
}

export function PostForm({
  content = '',
  title = '',
  description = '',
  id = '',
  serverAction,
  successMessage
}: Props) {
  const { handleBack, form, formAction, formRef, isPending } = usePostForm({
    serverAction,
    successMessage,
    content,
    description,
    id,
    title
  })

  return (
    <Form {...form}>
      <form ref={formRef} action={formAction} className="flex flex-col gap-6">
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
            render={({ field: { onChange, value }, fieldState: { error } }) => (
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
            disabled={isPending}
          >
            {isPending ? 'Loading...' : 'Save'}
          </Button>
          <Button
            variant="outline"
            type="button"
            onClick={handleBack}
            disabled={isPending}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  )
}
