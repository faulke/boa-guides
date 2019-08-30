import React from 'react'
import { Provider } from 'react-redux'
import Default from './layouts/Default'
import configureStore from './store/configureStore'
import Amplify from 'aws-amplify'
import Authenticator from './components/auth/Authenticator'
import Loading from './components/theme/Loading'
import { PersistGate } from 'redux-persist/es/integration/react'

const { persistor, store } = configureStore()

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

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Authenticator>
        <Loading />
        <Default />
      </Authenticator>
    </PersistGate>
  </Provider> 
)

export default App
