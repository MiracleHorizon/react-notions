import { RefObject } from 'react'
import { SetState } from 'types'
import { StartOpenOptionEnum } from 'store/slices/app/app.types'

export default interface IDropdownPopup {
  type: 'theme' | 'startOpen'
  options: string[]
  activeOption: string | StartOpenOptionEnum
  setOption: SetState<StartOpenOptionEnum> | SetState<string>
  invokerRef: RefObject<HTMLDivElement>
}
