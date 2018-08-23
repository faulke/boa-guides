const initialState = {

}

function app (state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
  return state
}

export default app
