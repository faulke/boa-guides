import React from 'react'
import AuthPiece from './AuthPiece'
import { Auth } from 'aws-amplify'

export default class SignOut extends AuthPiece {
  constructor (props) {
    super(props)

    this.signOut = this.signOut.bind(this)
  }

  async signOut () {
    try {
      await Auth.signOut({ global: true })
      this.props.setUser(null)
      this.changeState('signIn')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.props.authState !== 'signedIn') {
      return null
    } 
    return (
      <button
        type="button"
        className="button is-light"
        onClick={this.signOut}
      >Sign Out</button>
    )
  }
}
