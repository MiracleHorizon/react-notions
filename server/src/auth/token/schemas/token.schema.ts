import mongoose, { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type TokenDocument = Token & Document

@Schema({
  timestamps: true,
})
export class Token {
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  })
  user: string

  @Prop({ required: true })
  refreshToken: string
}

export const TokenSchema = SchemaFactory.createForClass(Token)
