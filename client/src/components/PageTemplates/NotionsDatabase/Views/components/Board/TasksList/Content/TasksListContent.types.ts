import IPage from 'models/page/IPage'
import { SetState } from 'types'

export default interface TasksListContentProps {
  _id: string
  tasks: IPage[]
  taskCreating: boolean
  setTaskCreating: SetState<boolean>
  handleStartTaskCreating: () => void
  dragOver: boolean
}
