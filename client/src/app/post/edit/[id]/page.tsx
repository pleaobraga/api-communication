import { PostForm } from '@/components/post-form'
import { updadatePostAction } from './updadate-post-action'
import { getPostAPI } from '@/api'

type Props = {
  params: Promise<{ id: string }>
}

export default async function UpdatePostPage({ params }: Props) {
  const { id } = await params

  const { posts } = await getPostAPI(id)

  if (!posts) {
    return <div>Post not found</div>
  }

  const [post] = posts

  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-3xl font-bold">Edit Post</h1>
      <PostForm
        id={id}
        content={post.content}
        title={post.title}
        description={post.description}
        serverAction={updadatePostAction}
        successMessage="Post updated successfully!"
      />
    </div>
  )
}
