import { TasksListTitleColor } from 'models/decor/colors'

export default interface TasksListTopBarProps {
  _id: string
  title: string
  color: TasksListTitleColor
  totalTasks: number
  hidden: boolean
  isHovering: boolean
}
