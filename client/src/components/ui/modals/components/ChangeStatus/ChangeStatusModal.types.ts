import ITasksList from 'models/tasksList/ITasksList'
import IPage from 'models/page/IPage'

export default interface ChangeStatusModalProps {
  task: IPage
  list: ITasksList
}
