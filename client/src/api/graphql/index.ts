import * as commentGraphQL from './comment-graphql-api'
import * as postGraphQL from './post-graphql-api'

export const graphQLAPI = { ...commentGraphQL, ...postGraphQL }
