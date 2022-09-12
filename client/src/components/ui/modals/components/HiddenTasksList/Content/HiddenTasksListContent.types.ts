import { SetState } from 'types'
import ITasksList from 'models/tasksList/ITasksList'

export default interface HiddenTasksListContentProps {
  list: ITasksList
  taskCreating: boolean
  setTaskCreating: SetState<boolean>
}
