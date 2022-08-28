import { InputState } from 'hooks/useInput'
import ITasksList from 'models/tasksList/ITasksList'

export default interface HiddenTasksListModalTopBarTypes extends InputState {
  isLoading: boolean
  list: ITasksList
  totalTasks: number
  handleStartTaskCreating: () => void
}
