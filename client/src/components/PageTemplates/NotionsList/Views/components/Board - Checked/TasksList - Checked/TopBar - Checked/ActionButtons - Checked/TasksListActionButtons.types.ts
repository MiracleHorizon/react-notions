import { IVoidClick } from 'types'

export default interface TasksListActionButtonsProps extends IVoidClick {
  _id: string
  color: string
  hidden: boolean
  isHovering: boolean
  pageLocked: boolean
}
