import { Comment } from '@/@types'
import { graphQLAPI } from './graphql'
import { restAPI } from './rest'

const COMMUNICATIONS = {
  rest: { apis: restAPI, type: 'rest' },
  graphQL: { apis: graphQLAPI, type: 'graphQL' }
}

type Props = {
  updateCommentAPI: (
    id: string,
    dto: { content: string }
  ) => Promise<{ comment: Comment }>
}

function apiImplementation(APIFunctions: Props) {
  return {
    ...APIFunctions
  }
}

const apiType = process.env.API_COMMUNICATION as keyof typeof COMMUNICATIONS

const implementationAPI =
  COMMUNICATIONS[apiType]?.apis ?? COMMUNICATIONS.rest.apis

export const clientAPI = apiImplementation(implementationAPI)
