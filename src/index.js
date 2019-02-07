import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import { from } from 'apollo-link'
import { Auth } from 'aws-amplify'
import { setContext } from 'apollo-link-context'
import App from './App'
import styles from './styles/global.scss' /* eslint-disable-line */

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

render((
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />     
    </ApolloProvider>
  </BrowserRouter> 
),
  document.getElementById('index') /* eslint-disable-line */
)
