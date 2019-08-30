import React from 'react'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Header from '../components/theme/Header'
import Explore from '../pages/Explore'
import Profile from '../pages/Profile'
import { Switch, Route } from 'react-router-dom'

const Default = (props) => {
  return (
    <div>
      <Header { ...props } />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/explore" component={Explore} />
        <Route path="/users/:id" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default Default
