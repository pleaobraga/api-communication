import { apiClient } from './api-client'

export async function updateCommentAPI(id: string, dto: { content: string }) {
  const url = `${process.env.REST_BASE_URL}/comments?id=${id}`
  const data = await apiClient().put(url, dto)
  return data
}

export async function deleteCommentAPI(id: string) {
  const url = `${process.env.REST_BASE_URL}/comments?id=${id}`
  const data = await apiClient().delete(url)
  return data
}

export async function createCommentAPI(dto: {
  postId: string
  content: string
}) {
  const url = `${process.env.REST_BASE_URL}/comments`
  const data = await apiClient().post(url, dto)
  return data
}
