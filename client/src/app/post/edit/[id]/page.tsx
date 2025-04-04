import { PostForm } from '@/components/post-form'
import { updadatePostAction } from './updadate-post-action'

type Props = {
  params: Promise<{ id: string }>
}

export default async function NewPostPage({ params }: Props) {
  const { id } = await params

  const response = await fetch(`http://localhost:3002/posts?postId=${id}`)
  const { posts } = await response.json()

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
