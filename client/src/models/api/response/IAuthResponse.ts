import IUser from 'models/IUser'

export default interface IAuthResponse {
  accessToken: string
  refreshToken: string
  user: IUser
}
