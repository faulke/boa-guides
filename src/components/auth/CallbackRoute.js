import React from 'react'
import AuthPiece from './AuthPiece'
import { Switch, Route, Redirect } from 'react-router-dom'

export default class CallbackRoute extends AuthPiece {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Switch>
        <Route path="/auth">
          {
            this.props.authState === 'signedIn'
              ? (<Redirect to="/" />)
              : null
          }
        </Route>
      </Switch>
    )
  }
}
