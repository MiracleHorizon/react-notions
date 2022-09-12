import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'

export type CoverListDocument = CoverList & Document

@Schema()
export class CoverList {
  @Prop()
  title: string

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: 'Cover' })
  content: string[]
}

export const CoverListSchema = SchemaFactory.createForClass(CoverList)
