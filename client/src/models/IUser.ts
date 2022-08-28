export default interface IUser {
  _id: string
  email: string
  isActivated: boolean
  fullName: string | null
  avatarUrl: string | null
}
