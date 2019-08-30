import React, { Component } from 'react'
import { Auth, Hub } from 'aws-amplify'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import { Switch, Route } from 'react-router-dom'
import CallbackRoute from './CallbackRoute'


class Authenticator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      authState: 'loading',
      redirect: false
    }

    this.onHubCapsule = this.onHubCapsule.bind(this)
    this.changeState = this.changeState.bind(this)

    Hub.listen('auth', this)
  }
  
  componentDidMount () {
    this.getCurrentUser()
  }

  async getCurrentUser () {
    try {
      const user = await Auth.currentAuthenticatedUser()
      if (user) {
        this.changeState('signedIn')
        const { payload } = user.signInUserSession.idToken
        this.props.setUser(payload)
      }
    } catch (error) {
      this.props.setUser(null)
      this.changeState('signIn')
    }
  }
  
  changeState (state) {
    this.setState({
      ...this.state,
      authState: state
    })
  }
  
  onHubCapsule (capsule) {
    const { channel, payload } = capsule
    if (channel === 'auth') {
      switch (payload.event) {
        case 'signIn':
          this.getCurrentUser()
          break
        case 'signIn_failure':
          console.log('error signing in')
          this.changeState('signIn')
          break
        default:
          break
      }
    }
  }

  render() {
    const { authState } = this.state
    const { user, setUser } = this.props
    const renderChildren = React.Children.map(this.props.children, (child, index) => {
      return React.cloneElement(child, {
        key: `auth-child-${index}`,
        authState,
        setUser,
        user,
        handleChangeState: this.changeState
      })
    })

    return (
      <Switch>
        <Route exact path="/auth">
          <CallbackRoute
            user={user}
            setUser={setUser}
            authState={authState}
            handleChangeState={this.changeState}
          />
        </Route>
        <Route render={() => renderChildren} />
      </Switch>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.authenticatedUser
  }
}

export default connect(
  mapStateToProps,
  { setUser: actions.setUser }
)(Authenticator)
