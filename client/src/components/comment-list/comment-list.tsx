import { Comment as CommentType } from '@/@types'
import { Comment } from '../comment/comment'

type Props = {
  comments: CommentType[]
}

export function CommentList({ comments }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {comments.map(({ content, id, lastUpdate, postId }) => (
        <Comment
          key={id}
          id={id}
          content={content}
          lastUpdate={lastUpdate}
          postId={postId}
        />
      ))}
    </div>
  )
}
