import { IVoidClick } from 'types'
import ITasksList from 'models/tasksList/ITasksList'

export default interface TasksListTopBarProps extends ITasksList, IVoidClick {
  totalTasks: number
  isHovering: boolean
  pageLocked: boolean
}
