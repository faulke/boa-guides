import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import NoMatch from './NoMatch'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/test" component={NoMatch} />
    </Switch>
  </main>
)

export default Main
