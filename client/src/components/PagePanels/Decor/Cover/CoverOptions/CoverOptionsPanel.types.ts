import { SetState } from 'types'

export default interface CoverOptionsPanelProps {
  _id: string
  isHovering: boolean
  isRepositionEnabled: boolean
  setReposition: SetState<boolean>
  position: number
  fullWidth: boolean
}
