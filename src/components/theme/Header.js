import React from 'react'
import { Link } from 'react-router-dom'
import SignOut from '../auth/SignOut'
import SignIn from '../auth/SignIn'
import logo from '../../static/boa-logo1.png'
import styles from './header.scss'

const Header = (props) => (
  <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <span className={['navbar-item', styles.logo].join(' ')} href="https://bulma.io">
        <img src={logo} width="150" height="40" alt="logo" />
      </span>

      <span role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </span>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/explore" className="navbar-item">
          Explore
        </Link>
      </div>

      <div className="navbar-end">
        <Link to="/start_guide" className="navbar-item">
          Become a Guide
        </Link>
        {
          props.user ? (
            <div className={styles.userNav}>
              <Link to="/trips" className="navbar-item">
                Trips
              </Link>
              <Link to="/saved" className="navbar-item">
                Saved
              </Link>
              <div className="navbar-item has-dropdown is-hoverable">
                <span className="navbar-link">
                  { props.user.name || props.user.username }
                </span>
                <div className="navbar-dropdown is-right">
                  <Link to={`/users/${props.user.userId}`} className="navbar-item">
                    Profile
                  </Link>
                  <span className="navbar-item">
                    <SignOut { ...props } />
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="navbar-item">
              <div className="buttons">
                <SignIn { ...props } />
              </div>
            </div>
          )
        }
      </div>
    </div>
  </nav>
)

export default Header
