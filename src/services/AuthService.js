import { Auth } from 'aws-amplify'

class AuthService {
  login (username, password) {
    return Auth.signIn(username, password)
  }
}

export default AuthService
