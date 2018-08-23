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
        <div class="field">
          <label class="label">Username</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Username" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Password" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div class="field is-grouped">
          <div class="control">
            <button
              type="button"
              class="button is-link"
              onClick={this.login}
            >Submit</button>
          </div>
        </div>
      </form> 
    )
  }
}

export default withRouter(LoginForm)
