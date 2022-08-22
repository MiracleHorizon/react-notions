import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'
import { Page } from '../../page/schemas/page.schema'

export type TasksListDocument = TasksList & Document

@Schema({
  timestamps: true,
})
export class TasksList {
  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Page' })
  // parentPageId: string

  @Prop()
  parentPageId: string

  @Prop()
  title: string

  @Prop()
  color: string

  @Prop()
  hidden: boolean

  @Prop()
  order: number

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId }], ref: 'Page' })
  dependencies: Page[]

  // @Prop()
  // dependencies: string[]
}

export const TasksListSchema = SchemaFactory.createForClass(TasksList)
