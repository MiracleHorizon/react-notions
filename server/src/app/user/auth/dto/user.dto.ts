import { UserDocument } from '../schemas/user.schema'

export class UserDto {
  _id: string
  email: string
  isActivated: boolean
  fullName: string | null
  avatarUrl: string | null

  constructor(model: UserDocument) {
    this._id = model._id
    this.email = model.email
    this.isActivated = model.isActivated
    this.fullName = model.fullName
    this.avatarUrl = model.avatarUrl
  }
}
