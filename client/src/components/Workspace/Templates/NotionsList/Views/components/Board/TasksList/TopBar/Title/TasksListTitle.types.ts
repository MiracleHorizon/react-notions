import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export default interface TasksListTitleProps {
  _id: string
  title: string
  color: TasksListTitleColorsEnum
  totalTasks: number
}
