import { Comment } from '@/@types'
import { graphQLAPI } from './graphql'
import { restAPI } from './rest'

type APIImplementation = {
  updateCommentAPI: (
    id: string,
    dto: { content: string }
  ) => Promise<{ comment: Comment }>
}

type CommunicationType = 'rest' | 'graphQL'

interface Communication {
  apis: APIImplementation
  type: CommunicationType
}

const COMMUNICATIONS: Record<CommunicationType, Communication> = {
  rest: { apis: restAPI, type: 'rest' },
  graphQL: { apis: graphQLAPI, type: 'graphQL' }
}

const apiType = process.env.API_COMMUNICATION as keyof typeof COMMUNICATIONS

export const clientAPI =
  COMMUNICATIONS[apiType]?.apis ?? COMMUNICATIONS.rest.apis
