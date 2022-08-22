import NotionContentItemTypes from 'models/pageContent/NotionContentItemTypes'
import NotionContentItemColorsEnum from 'models/decor/NotionContentItemColorsEnum'

export default interface NotionItemToggleWrapperProps {
  children: JSX.Element
  childrenTitle: JSX.Element
  _id: string
  expanded: boolean | null
  type: NotionContentItemTypes
  bgColor: NotionContentItemColorsEnum
  contentLength: number
}
