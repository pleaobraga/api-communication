import { Post } from '@/@types'
import { PostListItem } from '../post-list-item'

type Props = { posts: Post[] }

export function PostList({ posts }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map(({ content, createdAt, id, lastUpdate, title, comments }) => (
        <PostListItem
          key={id}
          id={id}
          title={title}
          content={content}
          createdAt={createdAt}
          lastUpdate={lastUpdate}
          comments={comments}
        />
      ))}
    </div>
  )
}
