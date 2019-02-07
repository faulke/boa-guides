import React, { Component } from 'react'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Header from '../components/theme/Header'
import Browse from '../pages/Browse'
import { Switch, Route } from 'react-router-dom'

class Default extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <Header { ...this.props } />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/browse" component={Browse} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default Default
