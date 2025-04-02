'use client'

import { PostForm } from '@/components/post-form'

export default function NewPostPage() {
  const handleFormSubmit = () => {}

  return (
    <div>
      <h1>new post</h1>
      <PostForm onFormSubmit={handleFormSubmit} />
    </div>
  )
}
