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
  activationLink: string

  @Prop()
  avatarUrl: string | null
}

export const UserSchema = SchemaFactory.createForClass(User)
