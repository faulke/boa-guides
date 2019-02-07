import { Component } from 'react'

export default class AuthPiece extends Component {
  constructor (props) {
    super(props)

    this.inputs = {}

    this.changeState = this.changeState.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  changeState (state) {
    this.props.handleChangeState(state)
  }

  handleInput ({ target }) {
    const { name, value } = target
    const inputs = {
      ...this.inputs,
      [name]: value
    }
    this.inputs = inputs
  }

  render () {
    return null
  }
}