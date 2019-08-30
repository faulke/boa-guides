import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { from } from 'apollo-link'
import { Auth } from 'aws-amplify'
import { setContext } from 'apollo-link-context'

const authMiddleware = setContext(async ({ headers }) => {
  const user = await Auth.currentSession()

  if (user) {
    return {
      headers: {
        ...headers,
        Authorization: user.idToken.jwtToken
      }
    }
  }
})

const httpLink = new HttpLink({
  uri: process.env.API_URL
})

const client = new ApolloClient({
  link: from([authMiddleware, httpLink]),
  cache: new InMemoryCache()
})

export default client
