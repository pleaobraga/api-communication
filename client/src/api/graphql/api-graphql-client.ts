import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client'
import fetch from 'cross-fetch'

export const apoloClient = new ApolloClient({
  link: new HttpLink({
    uri: `${process.env.GRAPHQL_BASE_URL}/graphql`,
    fetch
  }),
  cache: new InMemoryCache()
})
