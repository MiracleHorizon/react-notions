import mongoose, { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { NotionContentItem } from '../../notionContentItem/schemas/notionContentItem.schema'

export type PageDocument = Page & Document

@Schema({
  timestamps: true,
})
export class Page {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Page' })
  parentPageId: string | null

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TasksList' })
  parentListId: string | null

  @Prop() template: string

  @Prop() status: string | null

  @Prop() title: string

  @Prop() iconUrl: string | null

  @Prop() coverUrl: string | null

  @Prop() coverPosition: number

  @Prop() favorite: boolean

  @Prop() expanded: boolean

  @Prop() fullWidth: boolean

  @Prop() smallText: boolean

  @Prop() locked: boolean

  @Prop() font: string

  @Prop() descriptionExpanded: boolean

  @Prop() description: string

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId }],
    ref: 'NotionContentItem',
  })
  content: NotionContentItem[]

  @Prop() sbOrder: number | null

  @Prop() taskOrder: number | null

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: 'Page' })
  dependencies: Page[]

  @Prop() author: string

  @Prop()
  deleted: boolean
}

export const PageSchema = SchemaFactory.createForClass(Page)
