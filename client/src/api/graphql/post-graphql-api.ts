import { gql } from '@apollo/client'
import { apoloClient } from './api-graphql-client'
import { Post } from '@/@types'

export async function updatePostAPI(
  id: string,
  dto: { id?: string; title?: string; description?: string; content?: string }
): Promise<Post> {
  const mutation = gql`
    mutation updatePost(
      $id: ID!
      $title: String!
      $description: String
      $content: String!
    ) {
      updatePost(
        id: $id
        title: $title
        description: $description
        content: $content
      ) {
        id
      }
    }
  `

  const { data } = await apoloClient.mutate({
    mutation,
    variables: {
      id,
      title: dto.title,
      description: dto.description ?? '',
      content: dto.content
    },
    fetchPolicy: 'no-cache'
  })

  return { ...data.updatePost }
}

export async function getPostAPI(id?: string) {
  const query = gql`
    query getPosts($id: ID) {
      getPosts(id: $id) {
        id
        title
        description
        content
        lastUpdate
        comments {
          id
          content
          lastUpdate
          createdAt
          postId
        }
      }
    }
  `

  const { data } = await apoloClient.query({
    query,
    variables: {
      id
    },
    fetchPolicy: 'no-cache'
  })

  return { posts: data.getPosts }
}

export async function deletePostAPI(id: string) {
  const mutation = gql`
    mutation deletePost($id: ID!) {
      deletePost(id: $id)
    }
  `

  await apoloClient.mutate({
    mutation,
    variables: {
      id
    },
    fetchPolicy: 'no-cache'
  })
}

export async function createPostAPI(dto: {
  title?: string
  description?: string
  content?: string
}) {
  const mutation = gql`
    mutation createPost(
      $title: String!
      $description: String
      $content: String!
    ) {
      createPost(title: $title, description: $description, content: $content) {
        id
      }
    }
  `

  const { data } = await apoloClient.mutate({
    mutation,
    variables: {
      title: dto.title,
      description: dto.description ?? '',
      content: dto.content
    },
    fetchPolicy: 'no-cache'
  })

  return { ...data.updatePost }
}
