import * as actionTypes from '../actions/actionTypes'

const initialState = {
  authenticatedUser: null
}

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }
    return state
  }
}

const app = createReducer(initialState, {
  [actionTypes.SET_USER]: (state, { payload }) => {
    return {
      ...state,
      authenticatedUser: payload
    }
  }
})

export default app
