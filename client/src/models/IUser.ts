export default interface IUser {
  _id: string
  fullName: string
  email: string
  isActivated: boolean
  avatarUrl: string | null
}
