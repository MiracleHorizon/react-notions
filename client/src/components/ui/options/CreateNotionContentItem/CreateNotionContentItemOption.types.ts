import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import INotionContentItem from 'models/pageContent/INotionContentItem'

export default interface SelectNotionContentTypeOptionProps {
  title: string
  desc: string
  imageUrl: string
  type: NotionContentItemTypes
  item: INotionContentItem
  parentItemId: string | undefined
}
