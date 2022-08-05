import { SetState } from 'types'

export default interface DropdownProps {
  options: string[]
  activeOption: string
  setOption: SetState<string>
  pos: 'center' | 'bottom'
  type: 'theme' | 'comments' | 'startOpen'
}
