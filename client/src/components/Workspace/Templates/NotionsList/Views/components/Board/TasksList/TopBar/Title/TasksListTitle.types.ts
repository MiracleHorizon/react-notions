import { TasksListTitleColor } from 'models/decor/colors'

export default interface TasksListTitleProps {
  _id: string
  title: string
  color: TasksListTitleColor
  totalTasks: number
}
