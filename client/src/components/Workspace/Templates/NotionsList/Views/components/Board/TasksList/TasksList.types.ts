import ITasksList from 'models/tasksList/ITasksList'

export default interface TasksListProps {
  list: ITasksList
  isHovering: boolean
  handleListHovering: (_id: string) => void
}
