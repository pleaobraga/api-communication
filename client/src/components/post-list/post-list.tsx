import { Post } from '@/@types'
import { PostListItem } from '../post-list-item'

type Props = { posts: Post[] }

export function PostList({ posts }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {posts?.map(({ id, lastUpdate, title, comments, description }) => (
        <PostListItem
          key={id}
          id={id}
          title={title}
          lastUpdate={lastUpdate}
          comments={comments}
          description={description}
        />
      ))}
    </div>
  )
}
