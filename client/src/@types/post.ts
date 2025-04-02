import { Comment } from './'

export type Post = {
  id: string
  title: string
  description?: string
  content: string
  createdAt: string
  lastUpdate: string
  comments: Comment[]
}
