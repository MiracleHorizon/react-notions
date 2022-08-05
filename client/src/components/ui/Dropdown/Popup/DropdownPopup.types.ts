import { ElementCoords, SetState } from 'types'

export default interface IDropdownPopup {
  options: string[]
  activeOption: string
  setOption: SetState<string>
  coords: ElementCoords
  type: 'theme' | 'comments' | 'startOpen'
}
