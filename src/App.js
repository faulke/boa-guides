import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Login from './layouts/Login'
import Default from './layouts/Default'
import reducers from './reducers'

const store = createStore(reducers)

const App = () => (
  <Provider store={store}>
    <Switch>
      <Route path="/login" component={Login} />
      <Route component={Default} />
    </Switch>
  </Provider>
)

export default App
