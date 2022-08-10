import mongoose, { Document, ObjectId } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Page } from '../../page/schemas/page.schema'

export type NotionContentItemDocument = NotionContentItem & Document

@Schema({
  timestamps: true,
})
export class NotionContentItem {
  // @Prop() _id: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Page' })
  parentPageId: string

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'NotionContentItem' })
  parentItemId: string | null

  @Prop() type: string

  @Prop() content: string

  @Prop() color: string

  @Prop() bgColor: string

  @Prop() expanded: boolean | null

  @Prop() completed: boolean | null

  @Prop() iconUrl: string | null

  @Prop() pageId: string | null

  @Prop() order: number

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    ref: 'NotionContentItem',
  })
  dependencies: string[]

  @Prop() author: string
}

export const NotionContentItemSchema =
  SchemaFactory.createForClass(NotionContentItem)
