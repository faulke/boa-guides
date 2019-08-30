import gql from 'graphql-tag'

export const getCurrentUser =
  gql`{
    me {
      id
      username
      name
      email
    }
  }`

export const getUserById =
  gql`query getUserById($userId: ID!) {
    user(userId: $userId) {
      id
      username
      name
      email
    }
  }`
