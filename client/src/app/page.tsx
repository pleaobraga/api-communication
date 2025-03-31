import { PostList } from '@/components/post-list'

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
    <div className="flex flex-col gap-4 mx-auto max-w-4xl h-[100vh] overflow-clip">
      <h1 className="text-4xl my-6 font-bold">Post List</h1>

      <PostList posts={posts.posts} />
    </div>
  )
}
