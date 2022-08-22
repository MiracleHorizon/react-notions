import { SetState } from 'types'

export default interface ToggleLockedButtonProps {
  _id: string
  locked: boolean
  reLock: boolean
  setReLock: SetState<boolean>
}
