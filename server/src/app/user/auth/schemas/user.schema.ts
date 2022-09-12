import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type UserDocument = User & Document

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  fullName: string

  @Prop({ required: true, unique: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true, default: false })
  isActivated: boolean

  @Prop()
  avatarUrl: string | null

  @Prop()
  activationLink: string

  @Prop()
  changeEmailCode: string

  @Prop()
  resetPasswordCode: string
}

export const UserSchema = SchemaFactory.createForClass(User)
