import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import App from './App'
import client from './apollo/config'
import styles from './styles/global.scss' /* eslint-disable-line */

render((
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />     
    </ApolloProvider>
  </BrowserRouter> 
),
  document.getElementById('index') /* eslint-disable-line */
)
