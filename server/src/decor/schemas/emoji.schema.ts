import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type EmojiDocument = Emoji & Document

@Schema()
export class Emoji {
  @Prop()
  imgUrl: string

  @Prop()
  tooltipTitle: string
}

export const EmojiSchema = SchemaFactory.createForClass(Emoji)
