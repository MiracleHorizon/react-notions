import { SetState } from 'types'
import { StartOpenOptionEnum } from 'store/slices/app/app.types'

export default interface DropdownProps {
  options: string[]
  activeOption: string
  setOption: SetState<StartOpenOptionEnum> | SetState<string> //! Кринж
  type: 'theme' | 'startOpen'
}
