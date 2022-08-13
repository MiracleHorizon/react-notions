import { ISelectItemParams } from 'types'

export default interface TasksListColorOptionProps
  extends ISelectItemParams<string> {
  _id: string
  color: string
  reqColor: string
  title: string
  isActive: boolean
}
