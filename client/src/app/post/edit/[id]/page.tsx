import { PostForm } from '@/components/post-form'
import { updadatePostAction } from './updadate-post-action'
import { getPostAPI } from '@/api'
import { PageHeader } from '@/components/page-header'

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
    <>
      <PageHeader title="Edit Post" />
      <div className="flex flex-col gap-10">
        <PostForm
          id={id}
          content={post.content}
          title={post.title}
          description={post.description}
          serverAction={updadatePostAction}
          successMessage="Post updated successfully!"
        />
      </div>
    </>
  )
}
