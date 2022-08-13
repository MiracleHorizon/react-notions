import { SetState } from 'types'
import { RefObject } from 'react'

export default interface IDropdownPopup {
  options: string[]
  activeOption: string
  setOption: SetState<string>
  type: 'theme' | 'startOpen'
  invokerRef: RefObject<HTMLDivElement>
}
