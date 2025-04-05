import { apiClient } from './api-client'

export async function updatePostAPI(
  id: string,
  dto: { id?: string; title?: string; description?: string; content?: string }
) {
  const url = `${process.env.REST_BASE_URL}/posts?id=${id}`
  const data = await apiClient().put(url, dto)
  return data
}

export async function getPostAPI(id?: string) {
  const url = id
    ? `${process.env.REST_BASE_URL}/posts?id=${id}`
    : `${process.env.REST_BASE_URL}/posts`
  const data = await apiClient().get(url)
  return data
}

export async function deletePostAPI(id: string) {
  const url = `${process.env.REST_BASE_URL}/posts?id=${id}`
  const data = await apiClient().delete(url)
  return data
}

export async function createPostAPI(dto: {
  title?: string
  description?: string
  content?: string
}) {
  const url = `${process.env.REST_BASE_URL}/posts`
  const data = await apiClient().post(url, dto)
  return data
}
