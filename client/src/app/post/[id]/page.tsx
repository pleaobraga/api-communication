import { PostDetail } from '../components/post-detail'

type Props = {
  params: Promise<{ postId: string }>
}

export default async function postDetail({ params }: Props) {
  const { postId } = await params

  const response = await fetch(`http://localhost:3002/posts?postId=${postId}`)
  const post = await response.json()

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <div>
      <PostDetail {...post.post} />
    </div>
  )
}
