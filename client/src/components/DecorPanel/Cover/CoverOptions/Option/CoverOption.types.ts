import { SetState } from 'types'

export default interface CoverOptionProps {
  _id?: string
  isRepositionEnabled: boolean
  setReposition: SetState<boolean>
}

export interface OptionButtonProps {
  bRight?: boolean
  pos: 'left' | 'right'
}
