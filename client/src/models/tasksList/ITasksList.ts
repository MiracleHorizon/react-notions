import { IPage } from 'models/page/IPage'
import { TasksListTitleColor } from 'models/decor/colors'

export default interface ITasksList {
  readonly _id: string
  parentPageId: string
  title: string
  color: TasksListTitleColor
  hidden: boolean
  order: number
  dependencies: string[] // IPage[]
}
