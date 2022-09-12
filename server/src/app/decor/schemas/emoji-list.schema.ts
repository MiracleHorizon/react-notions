import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'

export type EmojiListDocument = EmojiList & Document

@Schema()
export class EmojiList {
  @Prop()
  title: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: 'Emoji' })
  content: string[]
}

export const EmojiListSchema = SchemaFactory.createForClass(EmojiList)
