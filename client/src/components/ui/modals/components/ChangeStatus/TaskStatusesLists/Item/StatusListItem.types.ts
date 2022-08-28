import ITasksList from 'models/tasksList/ITasksList'
import { ISelectItemParams } from 'types'

export default interface StatusListItemProps extends ISelectItemParams<string> {
  list: ITasksList
  handleChangeTaskStatus: () => void
}
