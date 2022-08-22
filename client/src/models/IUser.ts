export default interface IUser {
  _id: string
  email: string
  isActivated: boolean
  fullName: string | null
  avatarUrl: string | null
}

export interface IGoogleUser {
  uid: string
  providerId: string
  displayName: string
  email: string
  photoURL: string
}
