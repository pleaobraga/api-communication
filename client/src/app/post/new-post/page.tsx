'use client'

import { PostForm } from '@/components/post-form'
import { createPostAction } from './create-post-action'

export default function NewPostPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold">New Post</h1>
      <PostForm serverAction={createPostAction} />
    </div>
  )
}
