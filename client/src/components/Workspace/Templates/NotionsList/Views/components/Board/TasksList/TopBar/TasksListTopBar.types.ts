import { TasksListTitleColorsEnum } from 'models/decor/TasksListTitleColorsEnum'

export default interface TasksListTopBarProps {
  _id: string
  title: string
  color: TasksListTitleColorsEnum
  totalTasks: number
  hidden: boolean
  isHovering: boolean
}
