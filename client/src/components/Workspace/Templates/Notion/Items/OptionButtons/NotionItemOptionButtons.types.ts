import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'

export default interface NotionItemOptionButtonsProps {
  _id: string
  order: number
  type: NotionContentItemTypes
  isHovering: boolean
}
