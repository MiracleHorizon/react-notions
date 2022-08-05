export default interface IUser {
  _id: string
  email: string | null
  fullName: string
  avatarUrl: string | null
  token?: string
}

export interface IGoogleUser {
  uid: string
  providerId: string
  displayName: string
  email: string
  photoURL: string
}
