import IUser, { IGoogleUser } from 'models/IUser'

export default interface AuthState {
  user: null | IUser | IGoogleUser
}
