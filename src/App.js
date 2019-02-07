import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Default from './layouts/Default'
import reducers from './reducers'
import Amplify from 'aws-amplify'
import Authenticator from './components/auth/Authenticator'
import Loading from './components/theme/Loading'

const oauth = {
  domain: process.env.COGNITO_DOMAIN,
  scope: ['email', 'openid'],
  redirectSignIn: process.env.AUTH_CALLBACK_URL,
  redirectSignOut: process.env.LOGOUT_URL,
  responseType: 'token'
}

Amplify.configure({
  Auth: {
    region: process.env.COGNITO_REGION,
    userPoolId: process.env.COGNITO_POOL_ID,
    userPoolWebClientId: process.env.COGNITO_CLIENT_ID,
    identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
    oauth
  }
})

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
)

const App = () => (
  <Provider store={store}>
    <Authenticator>
      <Loading />
      <Default />
    </Authenticator>
  </Provider> 
)

export default App
