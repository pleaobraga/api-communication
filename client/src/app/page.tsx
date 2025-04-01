import { PostList } from '@/components/post-list'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default async function Home() {
  const res = await fetch(`http://localhost:3002/posts`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })

  if (!res.ok) {
    throw new Error('Failed to fetch post')
  }

  const posts = await res.json()

  return (
    <div className="flex flex-col gap-7 lg:mx-20 mx-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">All Posts</h1>
        <Button variant="secondary" size="sm" asChild>
          <Link href="/post/new-post">New Post</Link>
        </Button>
      </div>

      <PostList posts={posts.posts} />
    </div>
  )
}
