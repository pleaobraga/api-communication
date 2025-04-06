import { gql } from '@apollo/client'
import { apoloClient } from './api-graphql-client'

export async function updateCommentAPI(id: string, dto: { content: string }) {
  const mutation = gql`
    mutation UpdateComment($id: ID!, $content: String!) {
      updateComment(id: $id, content: $content) {
        id
        postId
        content
        lastUpdate
      }
    }
  `

  const { data } = await apoloClient.mutate({
    mutation,
    variables: {
      id,
      content: dto.content
    },
    fetchPolicy: 'no-cache'
  })

  return { comment: data.updateComment }
}

export async function deleteCommentAPI(id: string) {
  const mutation = gql`
    mutation deleteComment($id: ID!) {
      deleteComment(id: $id)
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

export async function createCommentAPI(dto: {
  postId: string
  content: string
}) {
  const mutation = gql`
    mutation createComment($postId: ID!, $content: String!) {
      createComment(postId: $postId, content: $content) {
        id
        postId
        content
        lastUpdate
      }
    }
  `

  const { data } = await apoloClient.mutate({
    mutation,
    variables: {
      postId: dto.postId,
      content: dto.content
    },
    fetchPolicy: 'no-cache'
  })

  return { comment: data.createComment }
}
