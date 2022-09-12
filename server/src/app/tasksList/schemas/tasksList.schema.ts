import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type TasksListDocument = TasksList & Document

@Schema({
  timestamps: true,
})
export class TasksList {
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
}

export const TasksListSchema = SchemaFactory.createForClass(TasksList)
