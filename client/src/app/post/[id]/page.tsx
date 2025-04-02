import { CommentList } from '@/components/comment-list'
import { CreateComment } from '@/components/create-comment'
import { PostDetail } from '@/components/post-detail'

type Props = {
  params: Promise<{ id: string }>
}

export default async function postDetail({ params }: Props) {
  const { id } = await params

  const response = await fetch(`http://localhost:3002/posts?postId=${id}`)
  const { posts } = await response.json()

  if (!posts) {
    return <div>Post not found</div>
  }

  const [post] = posts

  return (
    <div className="flex flex-col gap-4">
      <PostDetail {...post} />
      <div className="flex flex-col gap-10 mt-12">
        <CreateComment postId={id} />
        <CommentList comments={post.comments} />
      </div>
    </div>
  )
}
