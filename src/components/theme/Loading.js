const Loading = ({ authState }) => {
  if (authState === 'loading') {
    return 'Loading...'
  }
  return null
}

export default Loading
