import { RefObject } from 'react'
import { ISelectItemState } from 'hooks/useSelectItem'
import IPage from 'models/page/IPage'

export default interface RecentPageItemProps extends ISelectItemState<string> {
  page: IPage
  isSelected: boolean
  handleSelectPage: () => void
  parentRef: RefObject<HTMLDivElement>
}
