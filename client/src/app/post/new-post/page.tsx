'use client'

import { PostForm } from '@/components/post-form'

export default function NewPostPage() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold">New Post</h1>
      <PostForm />
    </div>
  )
}
