import React from 'react'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import { Switch, Route } from 'react-router-dom'

const Default = () => (
  <Switch>
    <Route path="/home" component={Home} />
    <Route component={NotFound} />
  </Switch>
)

export default Default
