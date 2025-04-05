import { getPostAPI } from '@/api'
import { PostList } from '@/components/post-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPostAPI()

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <Button variant="secondary" size="sm" asChild>
          <Link href="/post/new-post">New Post</Link>
        </Button>
      </div>

      <PostList posts={posts.posts} />
    </>
  )
}
