import { CommentsSection } from '@/components/comments-section'
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
      <CommentsSection postId={id} comments={post.comments} />
    </div>
  )
}
