import { IPage } from 'models/page/IPage'

export default interface PageItemProps {
  page: IPage
  pLeft: number
}

export interface ItemContainerProps {
  isHovering: boolean
  isSelected: boolean
  pLeft: number
}
