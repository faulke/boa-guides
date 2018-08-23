import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class LoginForm extends Component {
  constructor () {
    super()

    this.login = this.login.bind(this)
    this.input = this.input.bind(this)
  }

  login (evt) {
    return this.props.history.push('/home')
  }

  input (evt) {
    console.log(evt.target.value)
  }

  render () {
    return (
      <form>
        <div className="field">
          <label className="label">Username</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Username" onInput={this.input}/>
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Password</label>
          <div className="control has-icons-left has-icons-right">
            <input className="input" type="text" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button
              type="button"
              className="button is-link"
              onClick={this.login}
            >Submit</button>
          </div>
        </div>
      </form> 
    )
  }
}

export default withRouter(LoginForm)
