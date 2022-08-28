import ITasksList from 'models/tasksList/ITasksList'
import IPage from 'models/page/IPage'

export default interface TasksListsState {
  lists: ITasksList[]
  startItem: IPage | null
  startList: ITasksList | null
}
