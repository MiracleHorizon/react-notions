import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import IPage from 'models/page/IPage'

export default interface NotionItemOptionButtonsProps {
  _id: string
  order: number
  type: NotionContentItemTypes
  isHovering: boolean
  page: IPage
}
