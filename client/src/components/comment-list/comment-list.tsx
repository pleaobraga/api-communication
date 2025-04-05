import { Comment as CommentType } from '@/@types'
import { Comment } from '../comment/comment'

type Props = {
  comments: CommentType[]
  handleUpdatedSuccess: (comment: CommentType) => void
  handleDeleteSuccess: (id: string) => void
}

export function CommentList({
  comments,
  handleDeleteSuccess,
  handleUpdatedSuccess
}: Props) {
  return (
    <div className="flex flex-col gap-6">
      {comments.map(({ content, id, lastUpdate, postId }) => (
        <Comment
          key={id}
          id={id}
          content={content}
          lastUpdate={lastUpdate}
          postId={postId}
          handleDeleteSuccess={handleDeleteSuccess}
          handleUpdatedSuccess={handleUpdatedSuccess}
        />
      ))}
    </div>
  )
}
