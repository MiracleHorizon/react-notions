import IPage from 'models/page/IPage'
import INotionContentItem from 'models/pageContent/INotionContentItem'

export default interface NotionItemOptionButtonsProps {
  item: INotionContentItem
  page: IPage
  isHovering: boolean
}
