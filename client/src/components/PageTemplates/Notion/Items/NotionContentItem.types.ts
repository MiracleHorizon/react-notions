import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'
import INotionContentItem from 'models/pageContent/INotionContentItem'
import IPage from 'models/page/IPage'

export default interface INotionContentItemProps {
  item: INotionContentItem
  page: IPage
}

export interface INotionContentItemStyles {
  color: NotionContentItemColorsEnum
  bgColor: NotionContentItemColorsEnum
}
