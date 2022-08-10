import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export default interface ITasksList {
  readonly _id: string
  parentPageId: string
  title: string
  color: TasksListTitleColorsEnum
  hidden: boolean
  order: number
  dependencies: string[] // IPage[]
}
