import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { getUserById } from '../apollo/queries/user'
import { useSelector } from 'react-redux'

const Profile = ({ match }) => {
  const userId = match.params.id
  const { loading, data } = useQuery(getUserById, {
    variables: { userId }
  })
  const user = useSelector(state => state.authenticatedUser)
  const isUser = match.params.id === user.userId

  if (loading) return 'Loading...'
  // fetch user by id
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth columns">
          <div className="column is-one-third">
            <div className="image is-128x128 is-pulled-right">
              <img
                className="is-rounded"
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Profile pic"
              ></img>
              {
                isUser &&
                  <div className="has-text-centered">
                    <Link to="/profile/edit-photo">Update photo</Link>
                  </div>
              }
            </div>
          </div>
          <div className="column is-two-thirds has-text-left">
            <div>
              <h1 className="is-size-2">{data.user.name}</h1>
              {
                isUser &&
                  <p>Edit profile</p>
              }
              <p>{data.user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
