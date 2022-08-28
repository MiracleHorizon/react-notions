import IUser from 'models/IUser'

export default interface AuthState {
  isAuth: boolean
  user: IUser
}
