import { clientAPI } from '@/api'
import { CommentsSection } from '@/components/comments-section'
import { PostDetail } from '@/components/post-detail'

type Props = {
  params: Promise<{ id: string }>
}

export default async function postDetail({ params }: Props) {
  const { id } = await params

  const { posts } = await clientAPI.getPostAPI(id)

  const [post] = posts

  return (
    <>
      <div className="flex flex-col gap-4">
        <PostDetail {...post} />
        <CommentsSection postId={id} comments={post.comments} />
      </div>
    </>
  )
}
