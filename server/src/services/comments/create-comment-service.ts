import { db } from '../../db/db'
import { comments } from '../../db/schema'

type Params = {
  content: string
  postId: string
}

export async function createCommentService({ content, postId }: Params) {
  await db.insert(comments).values({
    content,
    postId
  })
}
