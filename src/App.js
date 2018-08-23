import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './layouts/Login'
import Default from './layouts/Default'

const App = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route component={Default} />
  </Switch>
)

export default App
