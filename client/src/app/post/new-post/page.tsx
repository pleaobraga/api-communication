import { PostForm } from '@/components/post-form'
import { createPostAction } from './create-post-action'
import { PageHeader } from '@/components/page-header'

export default function NewPostPage() {
  return (
    <>
      <PageHeader title="New Post" />
      <div className="flex flex-col gap-10">
        <PostForm
          serverAction={createPostAction}
          successMessage="Post created successfully!"
        />
      </div>
    </>
  )
}
