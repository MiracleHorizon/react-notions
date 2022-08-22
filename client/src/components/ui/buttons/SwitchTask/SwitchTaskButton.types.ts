import { IVoidClick } from 'types'

export default interface SwitchTaskButtonProps extends IVoidClick {
  dest: 'next' | 'prev'
  isActive: boolean
}
