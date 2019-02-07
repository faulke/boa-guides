import React from 'react'
import AuthPiece from './AuthPiece'
import { Auth } from 'aws-amplify'

export default class SignIn extends AuthPiece {
  constructor (props) {
    super(props)

    this.signIn = this.signIn.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  signIn () {
    const config = Auth.configure()
    const { 
      domain,  
      redirectSignIn,
      responseType
    } = config.oauth
    const clientId = config.userPoolWebClientId
    const url = `https://${domain}/login?redirect_uri=${redirectSignIn}&response_type=${responseType}&client_id=${clientId}`
    window.location.assign(url) /* eslint-disable-line */
  }

  handleKeyPress (evt) {
    if (evt.key === 'Enter') {
      this.signIn()
    }
  }
  
  render() {
    if (this.props.authState !== 'signIn') {
      return null
    }
    return (
      <span
        role="button"
        className="button is-primary"
        onClick={() => this.signIn()}
        onKeyPress={this.handleKeyPress}
        tabIndex="0"
      >Sign In</span>
    )
  }
}
