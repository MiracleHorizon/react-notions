import { SetState } from 'types'
import { TDecorDest } from './ActionsBar/DecorModalActions.types'

export default interface DecorModalNavbarTypes {
  _id: string
  dest: TDecorDest
  categories: string[]
  activeCategory: string
  setActiveCategory: SetState<string>
}
