import { ISelectItemParams } from 'types'

export default interface MovePageOptionProps extends ISelectItemParams<string> {
  pageId: string
  pageForMoveId: string
  title: string
  iconUrl: string | null
}
