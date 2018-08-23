import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LoginForm extends Component {
  constructor () {
    super()

    this.login = this.login.bind(this)
  }

  login (evt) {
    return this.props.history.push('/home')
  } 

  render () {
    return (
      <form>
        <input type="text" placeholder="User name" />
        <input type="text" placeholder="Password" />
        <button type="button" onClick={this.login}>Login</button>
      </form> 
    )
  }
}

export default withRouter(LoginForm)
