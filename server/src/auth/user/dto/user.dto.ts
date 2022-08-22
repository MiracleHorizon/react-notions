export class UserDto {
  _id: string
  email: string
  isActivated: boolean

  constructor(model) {
    this._id = model._id
    this.email = model.email
    this.isActivated = model.isActivated
  }
}
