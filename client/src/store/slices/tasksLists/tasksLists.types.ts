import ITasksList from 'models/tasksList/ITasksList'
import IPage from 'models/page/IPage'

export default interface TasksListsState {
  tasksLists: ITasksList[]
  startItem: IPage | null
  startList: ITasksList | null
}
