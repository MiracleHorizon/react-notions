import { ISelectItemParams } from 'types'

export default interface MovePageOptionProps extends ISelectItemParams<string> {
  pageForMoveId: string
  title: string
  iconUrl: string | null
  handleMovePage: () => void
}
